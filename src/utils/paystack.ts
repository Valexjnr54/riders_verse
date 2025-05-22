// paystack.ts
import axios from 'axios';
import { Request, Response,response } from 'express';
import { Config } from '../config/config';

const PAYSTACK_SECRET_KEY = Config.paystackSecret;
const PAYSTACK_BASE_URL = Config.paystackBaseURL


export async function initializePayment(package_name:string, phone_number:string, user_id:number,pickup_location:string,delivery_location:string, delivery_code:number, price: number, imageUrl: string, landmark:string, callback_url: string, email:string, vendor_id:string) {
  try {
    const response = await axios.post(
      PAYSTACK_BASE_URL + '/initialize',
      {
        amount:price,
        email,
        callback_url,
        metadata:{
          package_name,
          email,
          phone_number,
          user_id,
          pickup_location,
          delivery_location,
          delivery_code,
          amount:price,
          imageUrl,
          landmark,
          vendor_id
        }
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function verifyPayment(reference: string) {
  try {
    const response = await axios.get(
      PAYSTACK_BASE_URL + `/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export function extractReferenceFromRequest(req: Request) {
  const reference = req.query.reference;
  return reference;
}
