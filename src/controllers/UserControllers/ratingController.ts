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
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function rateRider(request: Request, res: Response) {
  const { rider_id, star, review } = request.body;
  const user_id = request.user.userId;

  try {
    const validationRules = [
      body('rider_id').notEmpty().withMessage('Rider ID is required'),
      body('star').notEmpty().withMessage('Number of rating star is required'),
      body('review').notEmpty().withMessage('Review comment is required'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email is already registered
    const existingUser = await prisma.user.findUnique({ where: { id:user_id } });
    if (!existingUser) {
      return res.status(400).json({ message: 'User not Found' });
    }

    const hasRated = await prisma.rider_rating.findFirst({
        where:{
            user_id,
            rider_id
        }
    })

    if (hasRated) {
        return res.status(400).json({ message: 'User have rated this rider' });
    }
    

    // Create a new user in the database
    const newRating = await prisma.rider_rating.create({
      data: {
        rider_id,
        user_id,
        rating:star,
        review
      },
      select:{
        id:true,
        rider_id:true,
        user_id:true,
        rating:true,
        review:true
      }
    });

    const aggregations = await prisma.rider_rating.aggregate({
        _avg: {
            rating: true,
        },
        where: {
            rider_id
        }
    });

    const updateRider = await prisma.rider.update({
        where:{
            id: rider_id
        },
        data:{
            avg_rating: aggregations._avg.rating ?? 0
        }
    })

    return res.status(201).json({  newRating });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}