// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";

const prisma = new PrismaClient();

export async function viewAllDelivery(request: Request, response: Response) {
    const admin_id = request.user.adminId;
  
    // Check if admin_id is not present or undefined
    if (!admin_id) {
      return response.status(403).json({ message: 'Unauthorized User' });
    }
  
    try {
      // Retrieve the admin by admin_id
      const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
      const role = check_admin?.role;
  
      // Check if the role is not 'admin'
      if (role !== 'Admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
      }
  
      const allDelivery = await prisma.delivery.findMany({
        select: {
          id:true,
          package_name: true,
          phone_number: true,
          pickup_location: true,
          delivery_location: true,
          estimated_delivery_price: true,
          package_image: true,
          is_pickedup:true,
          is_delivered:true,
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
const admin_id = request.user.adminId;
const id: number = parseInt(request.query.delivery_id as string, 10)

// Check if admin_id is not present or undefined
if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
}

if (!id) {
    return response.status(403).json({ message: 'Delivery ID required' });
}

try {
    // Retrieve the admin by admin_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'admin'
    if (role !== 'Admin') {
    return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleDelivery = await prisma.delivery.findUnique({
    where: {
        id: id,
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
  
export async function deleteDelivery(request:Request, response: Response) {
const admin_id = request.user.adminId;
const id: number = parseInt(request.query.delivery_id as string, 10)

// Check if admin_id is not present or undefined
if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
}

if (!id) {
    return response.status(403).json({ message: 'Delivery ID required' });
}

try {
    // Retrieve the admin by admin_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'admin'
    if (role !== 'Admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const delivery = await prisma.delivery.findUnique({
        where:{id}
    });

    if (!delivery) {
        return response.status(404).json({ message: 'Record not found' });
    }

    // Create a new delivery entry in the database
    const deleteDelivery = await prisma.delivery.delete({
    where:{
        id
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