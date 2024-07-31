import { Request, Response } from 'express';
import { PrismaClient, User } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';

const prisma = new PrismaClient();

export async function createOperatingArea(request: Request, response: Response) {
  const { operating_area } = request.body;
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

    // Validation rules
    const validationRules = [
        body('operating_area').notEmpty().withMessage('Operating Area is required'),
    ];
  
    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
    }

    const addOperatingArea = await prisma.operating_areas.create({
        data: {
            name: operating_area,
        },
        select:{
            id:true,
            name:true,
            status:true,
            createdAt: true,
            updatedAt: true
        }
    })
    return response.status(200).json({ message: 'Operating Area created', data: addOperatingArea });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}