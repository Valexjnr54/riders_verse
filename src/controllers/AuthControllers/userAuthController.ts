// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import uploadImage from '../../utils/cloudinary';
import fs from "fs"
import { sendWelcomeEmail } from '../../utils/emailSender';
import { sendWelcomeSMS } from '../../utils/sendSMS';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function registerUser(request: Request, res: Response) {
  const { fullname, username, email, phone_number, password } = request.body;

  try {
    const validationRules = [
      body('fullname').notEmpty().withMessage('Full Name is required'),
      body('username').notEmpty().withMessage('Username is required'),
      body('email').isEmail().withMessage('Invalid email address'),
      body('phone_number').notEmpty().withMessage('Phone Number is required'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email is already registered
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const existingPhone = await prisma.user.findUnique({ where: { phone_number } });
    if (existingPhone) {
      return res.status(400).json({ message: 'Phone Number Already Exist' });
    }

    const existingUsername = await prisma.user.findUnique({ where: {  username } });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username Already Exist' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    //Uploading Image to Cloudinary
    let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
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
    // else {
    //   res.status(400).json({ message: 'No file uploaded' });
    // }
    

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        fullname,
        username,
        email,
        phone_number,
        profile_image: imageUrl,
        password: hashedPassword, // Store the salt along with the hash
      },
    });

    // Send a welcome email with the user's name and email
    sendWelcomeEmail(email, fullname);

    const message = `Welcome,  ${fullname}

    You're receiving this message because you recently signed up for a account with Riders App.
    Please Verify your email address.
    
    Confirm your email address by clicking the button below. This step adds extra security to your business by verifying you own this email.
    
    Powered by RiderVerse.net`

    // Send a welcome SMS with the rider's name and email
    sendWelcomeSMS(phone_number, message);

    // Generate a JWT token for the newly registered user
    const token = jwt.sign({ userId: newUser.id, email: newUser.email, fullname: newUser.fullname, phone_number: newUser.phone_number, username: newUser.username, profile_image:newUser.profile_image, role:'User' }, Config.secret);

    return res.status(201).json({ token, newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user.id, email: user.email }, Config.secret);

    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export async function logoutUser(req: Request, res: Response) {
  try {
    // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
    // Here, we'll focus on clearing the token from cookies.

    // Clear the JWT token from the client-side cookies
    res.clearCookie('jwt');

    // Optionally, you can perform additional tasks here, such as logging the user's logout action.

    // Send a success response to the client
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    // Handle any potential errors that may occur during the logout process.
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

