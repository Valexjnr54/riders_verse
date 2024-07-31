// src/controllers/authController.ts
import { Request, Response } from 'express';
import crypto from 'crypto';
import { PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";
import uploadImage from '../../utils/cloudinary';
import fs from "fs";
import bcrypt from 'bcrypt';
import { riderCredentials } from '../../middlewares/multerProfileMiddleware';
import { completeSetupSMS } from '../../utils/sendSMS';

const prisma = new PrismaClient();

export async function updateRider(request: Request, response: Response) {
    const { fullname, phone_number } = request.body;
    const riderId = request.user.riderId;
  
    try {
  
      // Check if the email is already registered
      const existingRider = await prisma.rider.findUnique({ where: { id:riderId } });
      if (!existingRider) {
        return response.status(404).json({ message: 'Rider not Found' });
      }
      
  
      // Update a new rider in the database
      const user = await prisma.rider.update({
        where:{
          id:riderId
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
  
      return response.status(200).json({ message: 'Rider profile updated', data: user});
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
}
  
export async function profile(request: Request, response: Response) {
  const riderId = request.user.riderId;
  try {
    // Check if the email is already registered
    const existingRider = await prisma.rider.findUnique({ where: { id:riderId } });
    if (!existingRider) {
      return response.status(404).json({ message: 'Rider not Found' });
    }
    

    // Create a new user in the database
    const user = await prisma.rider.findUnique({
      where:{
        id:riderId
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

    return response.status(200).json({ message: 'Rider profile', data: user});
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function changeProfileImage(request: Request, response: Response) {
  const riderId = request.user.riderId;

  try {

    // Check if the email is already registered
    const existingRider = await prisma.rider.findUnique({ where: { id:riderId } });
    if (!existingRider) {
      return response.status(404).json({ message: 'Rider not Found' });
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
    const user = await prisma.rider.update({
      where:{
        id:riderId
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

    return response.status(200).json({ message: 'Rider profile image updated', data: user});
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function changePassword(request: Request, response: Response) {
  const { old_password, password } = request.body;
  const riderId = request.user.riderId;

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
    const existingRider = await prisma.rider.findUnique({ where: { id:riderId } });
    if (!existingRider) {
      return response.status(404).json({ message: 'Rider not Found' });
    }
    
    // Verify the password
    const passwordMatch = await bcrypt.compare(password, existingRider.password);

  if (!passwordMatch) {
    response.status(401).json({ error: 'Invalid email or password' });
    return;
  }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await prisma.rider.update({
      where:{
        id:riderId
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

    return response.status(200).json({ message: 'Rider password updated', data: user});
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function completeSetup(request: Request, response: Response) {
  // Extract data from the request
  const { bank_name, account_name, account_number, nin, driver_license, plate_number } = request.body;
  const riderId = request.user.riderId;

  try {
    const validationRules = [
      body('nin').notEmpty().withMessage('NIN Number is required'),
      body('driver_license').notEmpty().withMessage('Driver License is required'),
      body('plate_number').notEmpty().withMessage('Plate Number is required'),
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
    const existingRider = await prisma.rider.findUnique({ where: { id:riderId } });
    if (!existingRider) {
      return response.status(404).json({ message: 'Rider not Found' });
    }

  const existingBankDetails = await prisma.bank_details.findUnique({ where: {rider_id:riderId}})
    if (existingBankDetails) {
      return response.status(400).json({message: 'Bank Details Already Exist'})
    }

    const existingNin = await prisma.rider_credentials.findFirst({ where: {nin:nin}})
    if (existingNin) {
      return response.status(400).json({message: 'NIN Already Exist'})
    }

    const existingDriverLicence = await prisma.rider_credentials.findFirst({ where: {driver_license:driver_license}})
    if (existingDriverLicence) {
      return response.status(400).json({message: 'Driver Licence Already Exist'})
    }

    const existingPlateNumber = await prisma.rider_credentials.findFirst({ where: {plate_number:plate_number}})
    if (existingPlateNumber) {
      return response.status(400).json({message: 'Plate Number Already Exist'})
    }

    try {
      if (!request.files || !('nin_image' in request.files) || !('driver_license_image' in request.files) || !('vehicle_image' in request.files)) {
        return response.status(400).json({ message: 'Please provide all required images.' });
      }
      // Upload NIN image to Cloudinary
      const ninImageUrl = await uploadImage(request.files['nin_image'][0].path, 'rider_app/images/nin_images');
      fs.unlink(request.files['nin_image'][0].path, (err) => {
        if (err) {
          console.error(`Error deleting NIN file`);
        } else {
          console.log(`NIN File deleted`);
        }
      });

      // Upload Driver License image to Cloudinary
      const driverLicenseImageUrl = await uploadImage(request.files['driver_license_image'][0].path,'rider_app/images/driver_license_images');
      fs.unlink(request.files['driver_license_image'][0].path, (err) => {
        if (err) {
          console.error(`Error deleting driver license file`);
        } else {
          console.log(`Driver License File deleted`);
        }
      });

      // Upload Vehicle image to Cloudinary
      const vehicleImageUrl = await uploadImage(request.files['vehicle_image'][0].path, 'rider_app/images/vehicle_images');
      fs.unlink(request.files['vehicle_image'][0].path, (err) => {
        if (err) {
          console.error(`Error deleting vehicle Image file`);
        } else {
          console.log(`Vehicle Image File deleted`);
        }
      });

      // Save data to the database using Prisma
      const credentials = await prisma.rider_credentials.create({
          data: {
            rider_id: riderId,
            nin,
            nin_image: ninImageUrl,
            driver_license,
            driver_license_image: driverLicenseImageUrl,
            plate_number,
            vehicle_image: vehicleImageUrl,
            status: 'Pending', // Adjust as needed
          },
        });

        const newDetail = await prisma.bank_details.create({
          data:{
            rider_id: riderId,
            bank_name,
            account_name,
            account_number
          },
          select:{
            id:true,
            rider_id:true,
            bank_name:true,
            account_name:true,
            account_number:true,
            rider:{
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

        const rider = await prisma.rider.findUnique({
          where:{
              id:riderId
          }
      })
      const rider_name = rider?.fullname
      const rider_phone = rider?.phone_number

      const message = `Dear ${rider_name}, Your credentials have been received and will be checked properly, but for now you will not be able to receive any delivery request until your account is activated, which will take 24-48hrs. Powered by RiderVerse.net`

      if (rider_phone) {
        completeSetupSMS(rider_phone, message)
      } else {
        console.log("SMS Undefined")
      }

        return response.status(200).json({ message: 'Rider account details created', bank_detail: newDetail, credentials });
    } catch (error) {
      console.error('Error completing setup:', error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }

  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}