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
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function loginRider(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // Find the Rider by email
    const rider = await prisma.rider.findUnique({ where: { email } });

    if (!rider) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, rider.password);

    if (!passwordMatch) {
      res.status(400).json({ error: 'Invalid email or password' });
      return;
    }

    // Generate a JWT token for the rider
    const token = jwt.sign({ riderId: rider.id, email: rider.email }, Config.secret);

    res.status(200).json({ token, rider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export async function logoutRider(req: Request, res: Response) {
  try {
    // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
    // Here, we'll focus on clearing the token from cookies.

    // Clear the JWT token from the client-side cookies
    res.clearCookie('jwt');

    // Optionally, you can perform additional tasks here, such as logging the Rider's logout action.

    // Send a success response to the client
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    // Handle any potential errors that may occur during the logout process.
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

