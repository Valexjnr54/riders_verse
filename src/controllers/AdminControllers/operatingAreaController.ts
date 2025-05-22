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

export async function updateOperatingArea(request: Request, response: Response) {
  const { operating_area } =request.body;
  const admin_id = request.user.adminId;
  const id: number = parseInt(request.query.operating_area_id as string, 10)

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

    const updateOperatingArea = await prisma.operating_areas.update({
      where:{
        id
      },
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

    if (!updateOperatingArea) {
      return response.status(403).json({ message: 'Unable to update Operating Area' });
    }
    return response.status(200).json({ message: 'Operation Area updated', data: updateOperatingArea });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allOperatingAreas(request: Request, response: Response) {
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

    const allOperatingArea = await prisma.operating_areas.findMany({
      select:{
        id:true,
        name:true,
        status:true,
        createdAt: true,
        updatedAt: true
      },
    });
    if(allOperatingArea.length <= 0){
      return response.status(404).json({ message: 'No Operating Area(s) Found' });
    }
    return response.status(200).json({message: 'Operation Area(s) fetched', data: allOperatingArea });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleOperatingArea(request: Request, response: Response) {
  const id: number = parseInt(request.query.operating_area_id as string, 10)
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

    const singleOperatingArea = await prisma.operating_areas.findUnique({
      where: {
        id: id
      },
      select:{
        id:true,
        name:true,
        status:true,
        createdAt: true,
        updatedAt: true
      },
    });
    if (!singleOperatingArea) {
      return response.status(404).json({ message: 'No Operating Area Found' });
    }
    return response.status(200).json({message: 'Operation Area fetched', data: singleOperatingArea });
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteOperatingArea(request: Request, response: Response) {
  const id: number = parseInt(request.query.operating_area_id as string, 10)
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

    // Create a new delivery entry in the database
    const deleteOperatingArea = await prisma.operating_areas.delete({
      where:{
        id
      },
    });
    if (!deleteOperatingArea) {
      return response.status(403).json({ message: 'Unable to delete Operaing area' });
    }
    return response.status(204).json({ message: 'Operating Area was deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}