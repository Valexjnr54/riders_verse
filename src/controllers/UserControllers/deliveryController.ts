import { Request, Response } from 'express';
import { PrismaClient, User } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from 'express-validator';
import uploadImage from '../../utils/cloudinary';
import fs from 'fs';
import { sendDeliveryRequest, sendWelcomeEmail } from '../../utils/emailSender';
import { createDeliverySMS } from '../../utils/sendSMS';
import { initializePayment, verifyPayment, extractReferenceFromRequest } from '../../utils/paystack';

const prisma = new PrismaClient();

export async function createDeliveryRequest(request: Request,response: Response) {
  const { package_name, phone_number, pickup_location, delivery_location, price, landmark, vendor_id } =request.body;
  const user_id = request.user.userId;

  // Check if user_id is not present or undefined
  if (!user_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_user = await prisma.user.findUnique({ where: { id: user_id } });
    if (!check_user) {
      return response.status(404).json({ message: 'Not Found' });
    }
    const role = check_user.role;
    const email = check_user.email;

    // Check if the role is not 'User'
    if (role !== 'User') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Validation rules
    const validationRules = [
      body('package_name').notEmpty().withMessage('Package Name is required'),
      body('phone_number').notEmpty().withMessage('Phone Number is required'),
      body('pickup_location').notEmpty().withMessage('Pickup Location is required'),
      body('delivery_location').notEmpty().withMessage('Delivery Location is required'),
      body('price').notEmpty().withMessage('Estimated Delivery Price is required'),
      body('landmark').notEmpty().withMessage('Landmark is required'),
      body('vendor_id').notEmpty().withMessage('Vendor is required'),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let imageUrl = '';
    if (request.file) {
      const profile_image = request.file.path;

      // Upload image to Cloudinary
      const uploadedImageUrl = await uploadImage(profile_image,'rider_app/images/delivery_images');
      if (uploadedImageUrl) {
        imageUrl = uploadedImageUrl;
      }

      // Delete the local file after uploading
      fs.unlink(profile_image, (err) => {

        if (err) {
          console.error(`Error deleting file: ${profile_image}`);
        }
      });
    } else {
      // Handle case when no file is provided
      return response.status(400).json({ message: 'Package Image is required' });
    }

    const vendor = await prisma.vendor.findUnique({
      where: { id: parseInt(vendor_id) }
    });

    if (!vendor)
    {
      return response.status(404).json({ message: 'Vendor does not exist' });
    }

    const min = 100000
    const max = 999999

    const delivery_code = Math.floor(Math.random()*(max - min + 1)) + min;
    const callback_url = Config.paystackDeliveryCallback;
    if (!callback_url) {
      return response
        .status(400)
        .json({ message: "Callback Can't be undefined" });
    }

    const amount = price * 100

    const paymentInfo = await initializePayment(
      package_name,
      phone_number,
      user_id,
      pickup_location,
      delivery_location,
      delivery_code,
      amount,
      imageUrl,
      landmark,
      callback_url,
      email,
      vendor_id
    );

    return response.status(200).json({ data: paymentInfo });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function verifyPaymentHandler(request: Request, response: Response) 
{
  try {
    const reference = extractReferenceFromRequest(request);
    if (typeof reference !== "string") {
      throw new Error("Reference is not a string");
    }

    const paymentDetails = await verifyPayment(reference);
    const paymentStatus = paymentDetails.status;
    const paymentReference = paymentDetails.reference;
    const package_name = paymentDetails.metadata.package_name;
    const email = paymentDetails.metadata.email;
    const paidamount = paymentDetails.metadata.amount;
    const phone_number = paymentDetails.metadata.phone_number;
    const user_id = parseInt(paymentDetails.metadata.user_id);
    const pickup_location = paymentDetails.metadata.pickup_location;
    const delivery_location = paymentDetails.metadata.delivery_location;
    const delivery_code = parseInt(paymentDetails.metadata.delivery_code);
    const package_image = paymentDetails.metadata.imageUrl;
    const landmark = paymentDetails.metadata.landmark;
    const vendor_id = parseInt(paymentDetails.metadata.vendor_id);

    const price = (paidamount / 100).toString();

    const checkuser = await prisma.user.findUnique({
      where: { id: user_id },
    });

    if (!checkuser)
      {
        return response.status(404).json({ message: 'User does not exist' });
      }

    const checkvendor = await prisma.vendor.findUnique({
      where: { id: vendor_id }
    });

    if (!checkvendor)
    {
      return response.status(404).json({ message: 'Vendor does not exist' });
    }

    const delivery_payment = await prisma.delivery_payment.findUnique({
      where: { reference },
    });
    const delivery_owner = await prisma.delivery.findUnique({
      where: { reference, user_id },
      select: {
        id:true,
        package_name: true,
        phone_number: true,
        pickup_location: true,
        delivery_location: true,
        estimated_delivery_price: true,
        delivery_code:true,
        landmark: true,
        package_image: true,
        is_delivered:true,
        is_pickedup:true,
        status:true,
        vendor_id:true,
        user:{
          select: {
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        },
        vendor:{
          select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        }
      },
    });
    if (delivery_payment) {
      return response
        .status(200)
        .json({ message: "Payment was Successful", data:delivery_owner, payment:delivery_payment });
    }

    const payment = await prisma.delivery_payment.create({
      data: {
        user_id,
        email,
        amount:price,
        phone_number,
        has_paid:true,
        reference: paymentReference,
        status: "Paid",
      },
    });

    // Create a new delivery entry in the database
    const newDelivery = await prisma.delivery.create({
      data: {
        package_name,
        phone_number,
        user_id,
        pickup_location,
        delivery_location,
        delivery_code,
        estimated_delivery_price: price,
        reference: paymentReference,
        package_image,
        landmark: landmark,
        vendor_id
      },
      select: {
        id:true,
        package_name: true,
        phone_number: true,
        pickup_location: true,
        delivery_location: true,
        estimated_delivery_price: true,
        delivery_code:true,
        landmark: true,
        package_image: true,
        is_delivered:true,
        is_pickedup:true,
        is_accepted:true,
        status:true,
        vendor_id:true,
        user:{
          select: {
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        },
        vendor:{
          select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        }
      },
    });

    const vendor = await prisma.vendor.findUnique({
        where: {
          id:vendor_id,
        },
        select: {
          id: true,
          fullname: true,
          username: true,
          email: true,
          phone_number: true,
          profile_image: true,
        }
      });
      
      if (!vendor) {
        // Handle the case where vendor is not found
        throw new Error("Vendor not found");
      }
      

    const url = `${process.env.ROOT_URL}/vendor/order/${newDelivery.id}`

    const message = `Dear Vendor, there's a new order waiting for you on Riderverse. A user in ${pickup_location} needs your expertise to deliver ${package_name} to ${delivery_location}.

    Visit ${url} for more details

    Powered by RiderVerse.net
    `
    
    sendDeliveryRequest(vendor.email, vendor, newDelivery)
    createDeliverySMS(vendor.phone_number,message)

    return response.status(200).json({ message: 'Payment was Successful and Delivery Request created', data: newDelivery, payment:payment });
    //sendPersonnelReceiptEmail(email, paymentDetails, paymentReference);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Internal server error" });
  }
}

export async function viewAllDelivery(request: Request, response: Response) {
  const user_id = request.user.userId;

  // Check if user_id is not present or undefined
  if (!user_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_user = await prisma.user.findUnique({ where: { id: user_id } });
    const role = check_user?.role;

    // Check if the role is not 'User'
    if (role !== 'User') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allDelivery = await prisma.delivery.findMany({
      where: {
        user_id: user_id
      },select: {
        id:true,
        package_name: true,
        phone_number: true,
        pickup_location: true,
        delivery_location: true,
        estimated_delivery_price: true,
        package_image: true,
        is_pickedup:true,
        is_delivered:true,
        is_accepted:true,
        status:true,
        vendor_id:true,
        user:{
          select: {
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        },
        vendor:{
          select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        }
      },
    });
    if(allDelivery.length <= 0){
      return response.status(404).json({ message: 'No Delivery Found' });
    }
    return response.status(200).json({ data: allDelivery });
  } catch (error) {
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function viewSingleDelivery(request: Request, response: Response) {
  const user_id = request.user.userId;
  const id: number = parseInt(request.query.id as string, 10)

  // Check if user_id is not present or undefined
  if (!user_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_user = await prisma.user.findUnique({ where: { id: user_id } });
    const role = check_user?.role;

    // Check if the role is not 'User'
    if (role !== 'User') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleDelivery = await prisma.delivery.findUnique({
      where: {
        id: id,
        user_id: user_id
      },select: {
        id:true,
        package_name: true,
        phone_number: true,
        pickup_location: true,
        delivery_location: true,
        estimated_delivery_price: true,
        package_image: true,
        is_pickedup:true,
        is_delivered:true,
        is_accepted:true,
        status:true,
        vendor_id:true,
        user:{
          select: {
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        },
        vendor:{
          select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        }
      },
    });
    if (!singleDelivery) {
      return response.status(404).json({ message: 'No Delivery Found' });
    }
    return response.status(200).json({ data: singleDelivery });
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateDelivery(request:Request, response:Response) {
  const { package_name, phone_number, pickup_location, delivery_location, price } =request.body;
  const user_id = request.user.userId;
  const id: number = parseInt(request.query.id as string, 10)

  // Check if user_id is not present or undefined
  if (!user_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_user = await prisma.user.findUnique({ where: { id: user_id } });
    const role = check_user?.role;

    // Check if the role is not 'User'
    if (role !== 'User') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Validation rules
    const validationRules = [
      body('package_name').notEmpty().withMessage('Package Name is required'),
      body('phone_number').notEmpty().withMessage('Phone Number is required'),
      body('pickup_location').notEmpty().withMessage('Pickup Location is required'),
      body('delivery_location').notEmpty().withMessage('Delivery Location is required'),
      body('price').notEmpty().withMessage('Estimated Delivery Price is required'),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let imageUrl = '';
    if (request.file) {
      const profile_image = request.file.path;

      // Upload image to Cloudinary
      const uploadedImageUrl = await uploadImage(profile_image,'rider_app/images/delivery_images');
      if (uploadedImageUrl) {
        imageUrl = uploadedImageUrl;
      }

      // Delete the local file after uploading
      fs.unlink(profile_image, (err) => {
        if (err) {
          console.error(`Error deleting file: ${profile_image}`);
        } else {
          console.log(`File deleted: ${profile_image}`);
        }
      });
    }

    // Create a new delivery entry in the database
    const updateDelivery = await prisma.delivery.update({
      where:{
        id,
        user_id
      },
      data: {
        package_name,
        phone_number,
        user_id,
        pickup_location,
        delivery_location,
        estimated_delivery_price: price,
        ...(imageUrl && { package_image: imageUrl }),
      },
      select: {
        id:true,
        package_name: true,
        phone_number: true,
        pickup_location: true,
        delivery_location: true,
        estimated_delivery_price: true,
        package_image: true,
        is_delivered:true,
        is_pickedup:true,
        status:true,
        vendor_id:true,
        user:{
          select: {
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        },
        vendor:{
          select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        }
      },
    });
    if (!updateDelivery) {
      return response.status(403).json({ message: 'Unauthorized User' });
    }
    return response.status(200).json({ message: 'Delivery Request updated', data: updateDelivery });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteDelivery(request:Request, response: Response) {
  const user_id = request.user.userId;
  const id: number = parseInt(request.query.id as string, 10)

  // Check if user_id is not present or undefined
  if (!user_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_user = await prisma.user.findUnique({ where: { id: user_id } });
    const role = check_user?.role;

    // Check if the role is not 'User'
    if (role !== 'User') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Create a new delivery entry in the database
    const deleteDelivery = await prisma.delivery.delete({
      where:{
        id,
        user_id
      },
    });
    if (!deleteDelivery) {
      return response.status(403).json({ message: 'Unauthorized User' });
    }
    return response.status(204).json({ message: 'Delivery Request was deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function confirmDelivery(request:Request, response:Response) {
  const user_id = request.user.userId;
  const delivery_id = parseInt(request.query.delivery_id as string, 10);
  const vendor_id: number = parseInt(request.query.vendor_id as string, 10);

  // Check if vendor_id is not present or undefined
  if (!user_id) {
    response.status(403).json({ message: 'Unauthorized User' });
    return;
  }

  try {
    // Retrieve the user by user_id
    const check_user = await prisma.user.findUnique({ where: { id: user_id } });
    const role = check_user?.role;

    // Check if the role is not 'User'
    if (role !== 'User') {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }

    const check_exist = await prisma.delivery.findUnique({
        where:{
            id: delivery_id,
        }
    })
    const userId = check_exist?.user_id;
    const vendorId = check_exist?.vendor_id;
    if (userId != user_id) {
        return response.status(400).json({ message: "This delivery does not belong to this user"})
    }

    if (vendorId != vendor_id) {
      return response.status(400).json({ message: "Vendor not assigned to this delivery"})
    }

    const updatePickup = await prisma.delivery.update({
        where:{
            id: delivery_id,
            user_id: user_id,
        },
        data:{
            is_delivered: true,
            status: 'Delivered'
        },
        select:{
            id:true,
            package_name: true,
            phone_number: true,
            pickup_location: true,
            delivery_location: true,
            estimated_delivery_price: true,
            vendor_id:true,
            package_image: true,
            is_pickedup: true,
            is_delivered: true,
            status:true,
            user:{
                select: {
                  id:true,
                  fullname:true,
                  username:true,
                  email:true,
                  phone_number:true,
                  profile_image:true,
                }
            }
        }
    })
    return response.status(200).json({ message: "Package Picked", data: updatePickup})
  } catch (error) {
      return response.status(500).json({ message: error})
  }
}