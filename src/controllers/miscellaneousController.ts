import { Request, Response } from 'express';
import { PrismaClient, User } from '../models';
import { Config } from '../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';
import axios from 'axios';

const prisma = new PrismaClient();

const PAYSTACK_SECRET_KEY = Config.paystackSecret;

export async function allOperatingArea(request: Request, response: Response) {
  try {
    const allOperatingArea = await prisma.operating_areas.findMany({
        select:{
            id:true,
            name:true,
            status:true,
            createdAt: true,
            updatedAt: true
        }
    })

    if(allOperatingArea.length <= 0){
        return response.status(404).json({ message: 'No Record Found'})
    }
    
    return response.status(200).json({ message: 'All Operating Areas', data: allOperatingArea });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function deliveryCode(request: Request, response: Response) {
  const delivery_code: number = parseInt(request.query.delivery_code as string, 10)
  try {
    const delivery = await prisma.delivery.findUnique({
        where:{
          delivery_code
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
    })

    if(!delivery){
        return response.status(404).json({ message: 'Delivery Does not Exist'})
    }
    
    return response.status(200).json({ message: 'Delivery Details', data: delivery });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function confirmDelivery(request:Request, response:Response) {
  const delivery_code: number = parseInt(request.query.delivery_code as string, 10)
  try {
    const delivery = await prisma.delivery.update({
        data:{
          is_delivered:true,
          status:'Delivered'
        },
        where:{
          delivery_code
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
    })

    if(!delivery){
        return response.status(404).json({ message: 'No Record Found'})
    }
    
    return response.status(200).json({ message: 'Delivery Details', data: delivery });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function banks(request:Request, response:Response) {
  try {
    const banks = await prisma.nigerian_banks.findMany({
      select:{
        id:true,
        name:true,
        code: true,
        ussd: true,
        slug: true,
        is_active: true,
        created_at:true,
        updated_at: true,
      }
    })

    if(banks.length <= 0){
        return response.status(404).json({ message: 'No Record Found'})
    }
  
    return response.status(200).json({ message: 'All Banks', data: banks });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function vendorPrice(request: Request, response: Response) {
  try {
    const { landmark } = request.query;

    // Define types for better type safety
    type OperatingArea = { area: string; price: number };
    type Vendor = { id: number; business_name: string; operating_areas: OperatingArea[] };

    function isOperatingAreaArray(value: any): value is OperatingArea[] {
      return Array.isArray(value) && value.every(item => typeof item === 'object' && 'area' in item && 'price' in item);
    }

    // Fetch all vendors from the database
    const allVendors = await prisma.vendor.findMany({});

    // Filter the vendors to match the landmark in the operating_area JSON field
    const matchingVendors = allVendors.reduce((acc, vendor) => {
      if (typeof vendor.operating_areas === 'string') {
        try {
          // Parse the JSON string to an array of OperatingArea
          const operatingAreas = JSON.parse(vendor.operating_areas);

          // Use type guard to check if operatingAreas is an array of OperatingArea
          if (isOperatingAreaArray(operatingAreas)) {
            const matchedAreas = operatingAreas.filter(areaObj => areaObj.area === landmark);
            if (matchedAreas.length > 0) {
              acc.push({
                id: vendor.id,
                business_name: vendor.username,
                operating_areas: matchedAreas
              });
            }
          }
        } catch (error) {
          // Handle JSON parsing error
          console.error('Error parsing operating_areas JSON:', error);
        }
      }
      return acc;
    }, [] as Vendor[]);

    if (matchingVendors.length <= 0) {
      return response.status(404).json({ message: 'No Record Found' });
    }

    return response.status(200).json({ message: 'All Operating Areas', data: matchingVendors });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function fetchAccountName(request: Request, response: Response) {
  const { bank_code, account_number } = request.body;

  try {
    const validationRules = [
      body('bank_code').notEmpty().withMessage('Bank code is required'),
      body('account_number').isLength({ min: 10 }).withMessage('Account number must be at least 10 digits'),
    ];

    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Call Paystack API to verify account details
    const paystackResponse = await axios.get(`https://api.paystack.co/bank/resolve`, {
      params: {
        account_number,
        bank_code
      },
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    });

    const { account_name } = paystackResponse.data.data;

    if (!account_name) {
      return response.status(400).json({ message: 'Unable to resolve account name' });
    }
  

    return response.status(200).json({ message: 'Vendor account details updated', data: account_name });
  } catch (error: any) {
    console.error(error?.response?.data || error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}