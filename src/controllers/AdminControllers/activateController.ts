import { Request, Response } from 'express';
import { PrismaClient, User } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';
import { setupApprovedSMS } from '../../utils/sendSMS';

const prisma = new PrismaClient();

export async function activateRider(request: Request, response: Response) {
    const rider_id: number = parseInt(request.query.rider_id as string, 10)
    const admin_id = request.user.adminId;

  // Check if user_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'Admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const rider = await prisma.rider.update({
        where:{
            id:rider_id
        },
        data:{
            status: "Active",
            is_verified: true,
        },
        select:{
            id:true,
            fullname:true,
            email:true,
            username:true,
            phone_number:true,
            profile_image:true,
            avg_rating:true,
            role:true,
            status:true,
            is_verified:true
        }
    })

    const url = `${process.env.ROOT_URL}/login`

    const message = `Dear ${rider.fullname}, this is to inform you tha you account with us has been activated, you can now receive delivery request. Click to login with your email and password ${url} Powered by RiderVerse.net`

    setupApprovedSMS(rider.phone_number,message)
    return response.status(200).json({ message: 'Rider Has been Activated', data: rider });
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: error})
  }
}