// src/controllers/authController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";
import { completeSetupSMS } from '../../utils/sendSMS';

const prisma = new PrismaClient();

export async function completeSetup(request: Request, response: Response) {
    // Extract data from the request
    const { bank_name, account_name, account_number } = request.body;
    const vendorId = request.user.vendorId;
  
    try {
      const validationRules = [
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
      const existingVendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
      if (!existingVendor) {
        return response.status(404).json({ message: 'Vendor not Found' });
      }
  
    const existingBankDetails = await prisma.bank_details.findUnique({ where: {vendor_id:vendorId}})
      if (existingBankDetails) {
        return response.status(400).json({message: 'Bank Details Already Exist'})
      }
  
      try {
  
          const newDetail = await prisma.bank_details.create({
            data:{
              vendor_id: vendorId,
              bank_name,
              account_name,
              account_number
            },
            select:{
              id:true,
              vendor_id:true,
              bank_name:true,
              account_name:true,
              account_number:true,
              vendor:{
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
  
          const vendor = await prisma.vendor.findUnique({
            where:{
                id:vendorId
            }
        })
        const vendor_name = vendor?.fullname
        const vendor_phone = vendor?.phone_number
  
        const message = `Dear ${vendor_name}, Your credentials have been received and will be checked properly, but for now you will not be able to receive any delivery request until your account is activated, which will take 24-48hrs. Powered by RiderVerse.net`
  
        if (vendor_phone) {
          completeSetupSMS(vendor_phone, message)
        } else {
          console.log("SMS Undefined")
        }
  
          return response.status(200).json({ message: 'Vendor account details created', bank_detail: newDetail });
      } catch (error) {
        console.error('Error completing setup:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
  
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
    
  export async function updateAccountDetails(request:Request, response: Response) {
    const { bank_name, account_name, account_number } = request.body;
    const vendorId = request.user.vendorId;
  
    try {
      const validationRules = [
        body('bank_name').notEmpty().withMessage('Full Name is required'),
        body('account)_number').notEmpty().withMessage('Full Name is required'),
        body('account_number').isLength({ min: 10 }).withMessage('Account number must be at least 10 characters long'),
      ];
      
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
  
      // Check if the email is already registered
      const existingVendor = await prisma.vendor.findUnique({ where: { id:vendorId } });
      if (!existingVendor) {
        return response.status(404).json({ message: 'Vendor not Found' });
      }
  
      const existingBankDetails = await prisma.bank_details.findUnique({ where: {vendor_id:vendorId}})
      if (!existingBankDetails) {
        return response.status(404).json({message: 'Bank Details not found'})
      }
  
      const updateDetail = await prisma.bank_details.update({
        where:{
          vendor_id:vendorId
        },
        data:{
          bank_name,
          account_name,
          account_number
        },
        select:{
          id:true,
          vendor_id:true,
          bank_name:true,
          account_name:true,
          account_number:true,
          vendor:{
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
  
      return response.status(200).json({ message: 'Vendor account details updated', data: updateDetail});
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }