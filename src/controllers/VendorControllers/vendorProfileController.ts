// src/controllers/authController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import { PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";
import { completeSetupSMS } from '../../utils/sendSMS';
import uploadImage from '../../utils/cloudinary';
import fs from "fs";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function completeSetup(request: Request, response: Response) {
    // Extract data from the request
    const { bank_name, account_name, account_number } = request.body;
    const vendorId = request.user.vendorId;

    try {
      const validationRules = [
        body('bank_name').notEmpty().withMessage('Bank Name is required'),
        body('account_name').notEmpty().withMessage('Account Name is required'),
        body('account_number').notEmpty().isLength({ min: 10 }).withMessage('Account number is required and must be at least 10 characters long'),
      ];
      
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
  
      // Check if the email is already registered
      const existingVendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
      if (!existingVendor) {
        return response.status(404).json({ message: 'Vendor not Found' });
      }
  
    const existingBankDetails = await prisma.bank_details.findUnique({ where: {vendor_id:vendorId}})
      if (existingBankDetails) {
        return response.status(400).json({message: 'Bank Details Already Exist'})
      }
  
      try {
  
          const newDetail = await prisma.bank_details.create({
            data:{
              vendor_id: vendorId,
              bank_name,
              account_name,
              account_number
            },
            select:{
              id:true,
              vendor_id:true,
              bank_name:true,
              account_name:true,
              account_number:true,
              vendor:{
                select:{
                  id:true,
                  fullname:true,
                  email:true,
                  username:true,
                  phone_number:true,
                }
              }
            }
          })
  
          const vendor = await prisma.vendor.findUnique({
            where:{
                id:vendorId
            }
        })
        const vendor_name = vendor?.fullname
        const vendor_phone = vendor?.phone_number
  
        const message = `Dear ${vendor_name}, Your credentials have been received and will be checked properly, but for now you will not be able to receive any delivery request until your account is activated, which will take 24-48hrs. Powered by RiderVerse.net`
  
        if (vendor_phone) {
          completeSetupSMS(vendor_phone, message)
        } else {
          console.log("SMS Undefined")
        }
  
          return response.status(200).json({ message: 'Vendor account details created', bank_detail: newDetail });
      } catch (error) {
        console.error('Error completing setup:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
  
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
}
    
export async function updateAccountDetails(request:Request, response: Response) {
  const { bank_name, bank_code, account_name, account_number } = request.body;
  const vendorId = request.user.vendorId;

  try {
      const validationRules = [
      body('bank_name').notEmpty().withMessage('Bank Name is required'),
      body('bank_code').notEmpty().withMessage('Bank Code is required'),
      body('account_name').notEmpty().withMessage('Full Name is required'),
      body('account_number').isLength({ min: 10 }).withMessage('Account number must be at least 10 characters long'),
      ];
      
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
      }

      const bank = await prisma.nigerian_banks.findUnique({ where: { code: bank_code } });
      if (!bank) {
        return response.status(404).json({ message: 'Bank not Found' });
      }

      // Check if the email is already registered
      const existingVendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
      if (!existingVendor) {
      return response.status(404).json({ message: 'Vendor not Found' });
      }

      const existingBankDetails = await prisma.bank_details.findUnique({ where: {vendor_id:vendorId, bank_id: bank.id, account_number, account_name }})
      if (existingBankDetails) {
        return response.status(400).json({message: 'Bank Details already exist'})
      }

      const updateDetail = await prisma.bank_details.upsert({
        where: {
          vendor_id: vendorId // This is the unique identifier to find existing record
        },
        update: {
          bank_name,
          account_name,
          account_number,
          bank_id: bank.id
        },
        create: {
          bank_name,
          account_name,
          account_number,
          vendor_id: vendorId,
          bank_id: bank.id
        },
        select: {
          id: true,
          vendor_id: true,
          bank_name: true,
          account_name: true,
          account_number: true,
          vendor: {
            select: {
              id: true,
              fullname: true,
              email: true,
              username: true,
              phone_number: true,
            }
          },
          bank:{
            select:{
              name:true,
              code: true,
              ussd: true,
              is_active: true,
              slug: true
            }
          }
        }
      });

      return response.status(200).json({ message: 'Vendor account details updated', data: updateDetail});
  } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function accountDetail(request:Request, response: Response) {
  const vendorId = request.user.vendorId;

  try {
    // Check if the email is already registered
    const existingVendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
    if (!existingVendor) {
    return response.status(404).json({ message: 'Vendor not Found' });
    }

    const bankDetail = await prisma.bank_details.findUnique({ 
      where: {vendor_id:vendorId },
      select: {
        id: true,
        vendor_id: true,
        bank_name: true,
        account_name: true,
        account_number: true,
        vendor: {
          select: {
            id: true,
            fullname: true,
            email: true,
            username: true,
            phone_number: true,
          }
        },
        bank:{
          select:{
            name:true,
            code: true,
            ussd: true,
            is_active: true,
            slug: true
          }
        }
      }
    });

    if (!bankDetail) {
      return response.status(404).json({message: 'Bank Details does not exist'})
    }

    return response.status(200).json({ message: 'Vendor account details fetched successfully', data: bankDetail});
  } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateVendor(request: Request, response: Response) {
    const { fullname, phone_number } = request.body;
    const vendorId = request.user.vendorId;
  
    try {
  
      // Check if the email is already registered
      const existingvendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
      if (!existingvendor) {
        return response.status(404).json({ message: 'Vendor not Found' });
      }
      
  
      // Update a new vendor in the database
      const user = await prisma.vendor.update({
        where:{
          id:vendorId
        },
        data: {
          fullname,
          phone_number,
        },
        select:{
          id:true,
          fullname:true,
          username:true,
          email:true,
          profile_image:true,
          phone_number:true
        }
      });
  
      return response.status(200).json({ message: 'Vendor profile updated', data: user});
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
}
  
export async function profile(request: Request, response: Response) {
  const vendorId = request.user.vendorId;
  try {
    // Check if the email is already registered
    const existingvendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
    if (!existingvendor) {
      return response.status(404).json({ message: 'Vendor not Found' });
    }
    

    // Create a new user in the database
    const user = await prisma.vendor.findUnique({
      where:{
        id:vendorId
      },
      select:{
        id:true,
        fullname:true,
        username:true,
        email:true,
        profile_image:true,
        phone_number:true
      }
    });

    return response.status(200).json({ message: 'Vendor profile', data: user});
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function changeProfileImage(request: Request, response: Response) {
  const vendorId = request.user.vendorId;

  try {

    // Check if the email is already registered
    const existingvendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
    if (!existingvendor) {
      return response.status(404).json({ message: 'Vendor not Found' });
    }
    
    //Uploading Image to Cloudinary
    let imageUrl // Default URL
    if (request.file) {
      const profile_image = request.file.path; // Assuming you're using multer or a similar middleware for file uploads
      if (profile_image != null) {
        const uploadedImageUrl = await uploadImage(profile_image, 'rider_app/images/profile_images');
        if (uploadedImageUrl) {
          imageUrl = uploadedImageUrl;
        }
      }

      fs.unlink(profile_image, (err) => {
        if (err) {
          console.error(`Error deleting file: ${profile_image}`);
        } else {
          console.log(`File deleted: ${profile_image}`);
        }
      });
    }
    else {
      response.status(400).json({ message: 'No file uploaded' });
    }

    // Create a new user in the database
    const user = await prisma.vendor.update({
      where:{
        id:vendorId
      },
      data: {
        profile_image: imageUrl,
      },
      select:{
        id:true,
        fullname:true,
        username:true,
        email:true,
        profile_image:true,
        phone_number:true
      }
    });

    return response.status(200).json({ message: 'Vendor profile image updated', data: user});
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function changePassword(request: Request, response: Response) {
  const { old_password, password } = request.body;
  const vendorId = request.user.vendorId;

  try {
    const validationRules = [
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Check if the email is already registered
    const existingvendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
    if (!existingvendor) {
      return response.status(404).json({ message: 'Vendor not Found' });
    }
    
    // Verify the password
    const passwordMatch = await bcrypt.compare(password, existingvendor.password);

  if (!passwordMatch) {
    response.status(401).json({ error: 'Invalid email or password' });
    return;
  }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await prisma.vendor.update({
      where:{
        id:vendorId
      },
      data: {
        password: hashedPassword,
      },
      select:{
        id:true,
        fullname:true,
        username:true,
        email:true,
        profile_image:true,
        phone_number:true
      }
    });

    // Clear the JWT token from the client-side cookies
    response.clearCookie('jwt');

    return response.status(200).json({ message: 'vendor password updated', data: user});
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateOperatingArea(request: Request, response: Response) {
  const vendorId = request.user.vendorId;
  const { area, newArea, newPrice } = request.body;

  if (!area || (!newArea && !newPrice)) {
    return response.status(400).json({ error: 'Invalid input. Provide an area and at least one update field (newArea or newPrice).' });
  }

  try {
    // Fetch the vendor's operating_area field
    const vendor = await prisma.vendor.findUnique({ where: { id: vendorId } });

    if (!vendor) {
      return response.status(404).json({ error: 'Vendor not found' });
    }

    // Parse the JSON string into an array
    const operatingArea = JSON.parse(vendor.operating_areas as string) as Array<{ area: string; price: string }>;

    // Update the relevant entry
    const updatedArea = operatingArea.map((entry) => {
      if (entry.area === area) {
        return {
          area: newArea || entry.area,
          price: newPrice || entry.price,
        };
      }
      return entry;
    });

    // Save the updated JSON back to the database (stringify the array)
    const updatedVendor = await prisma.vendor.update({
      where: { id: vendorId },
      data: { operating_areas: JSON.stringify(updatedArea) },
    });

    response.status(200).json({ message: 'Operating area updated successfully', updatedVendor });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteOperatingArea(request: Request, response: Response) {
  const vendorId = request.user.vendorId;
  const area  = request.query.area as string;

  if (!area) {
    return response.status(400).json({ error: 'Area is required for deletion' });
  }

  try {
    // Fetch the vendor's operating_area field
    const vendor = await prisma.vendor.findUnique({ where: { id: vendorId } });

    if (!vendor) {
      return response.status(404).json({ error: 'Vendor not found' });
    }

    // Parse the JSON string into an array
    const operatingArea = JSON.parse(vendor.operating_areas as string) as Array<{ area: string; price: string }>;

    // Remove the relevant entry
    const updatedArea = operatingArea.filter((entry) => entry.area !== area);

    // Save the updated JSON back to the database (stringify the array)
    const updatedVendor = await prisma.vendor.update({
      where: { id: vendorId },
      data: { operating_areas: JSON.stringify(updatedArea) },
    });

    response.status(200).json({ message: 'Operating area deleted successfully', updatedVendor });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function addOperatingArea(request: Request, response: Response) {
  const vendorId = request.user.vendorId;
  const { area, price } = request.body;

  if (!area || !price) {
    return response.status(400).json({ error: 'Both area and price are required' });
  }

  try {
    // Fetch the vendor's current operating_area
    const vendor = await prisma.vendor.findUnique({ where: { id: vendorId } });

    if (!vendor) {
      return response.status(404).json({ error: 'Vendor not found' });
    }

    // Parse the JSON string into an array
    const operatingArea = JSON.parse(vendor.operating_areas as string) as Array<{ area: string; price: string }>;

    // Check if the area already exists
    const areaExists = operatingArea.some((entry) => entry.area === area);
    if (areaExists) {
      return response.status(400).json({ error: `The area "${area}" already exists` });
    }

    // Add the new area and price
    operatingArea.push({ area, price });

    // Save the updated JSON back to the database (stringify the array)
    const updatedVendor = await prisma.vendor.update({
      where: { id: vendorId },
      data: { operating_areas: JSON.stringify(operatingArea) },
    });

    response.status(200).json({ message: 'New operating area added successfully', updatedVendor });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function viewAllOperatingArea(request: Request, response: Response) {
  const vendorId = request.user.vendorId;

  if (!vendorId) {
    return response.status(400).json({ error: 'Vendor ID is required' });
  }

  try {
    // Fetch the vendor's operating_area
    const vendor = await prisma.vendor.findUnique({ where: { id: vendorId } });

    if (!vendor) {
      return response.status(404).json({ error: 'Vendor not found' });
    }

    // Parse the JSON string into an array
    const operatingAreas = JSON.parse(vendor.operating_areas as string) || [];

    response.status(200).json({ operatingAreas });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function viewSingleOperatingArea(request: Request, response: Response) {
  const vendorId = request.user?.vendorId; // Ensure user object exists
  const area = request.query.area as string;

  if (!vendorId) {
    return response.status(400).json({ error: 'Vendor ID is required' });
  }

  if (!area) {
    return response.status(400).json({ error: 'Area name is required' });
  }

  try {
    // Fetch the vendor's operating_area
    const vendor = await prisma.vendor.findUnique({ where: { id: Number(vendorId) } });

    if (!vendor) {
      return response.status(404).json({ error: 'Vendor not found' });
    }

    // Parse the JSON string into an array
    const operatingAreas = JSON.parse(vendor.operating_areas as string) || [];

    // Find the specific operating area
    const foundArea = operatingAreas.find((entry: { area: string }) => entry.area === area);

    if (!foundArea) {
      return response.status(404).json({ error: `Operating area "${area}" not found` });
    }

    response.status(200).json({ operatingArea: foundArea });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
}