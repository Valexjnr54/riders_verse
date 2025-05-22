import axios, { AxiosError } from 'axios';

const termiiApiKey = process.env.TERMII_API_KEY || 'TLQvkk7mJcru5ajmXjD6BuEwrBPead7GNyltdUz9RZHpOEC9zfxlwbA6BqHjpn';
const termiiEndpoint = process.env.TERMII_ENDPOINT || 'https://api.ng.termii.com/api/sms/send';

export async function  sendWelcomeSMS(phoneNumber: string, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"N-Alert",
            type:"plain",
            channel:"generic"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function  createDeliverySMS(phoneNumber: any, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"Dverse",
            type:"plain",
            channel:"generic"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function  sendProposalSMS(phoneNumber: string, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"Dverse",
            type:"plain",
            channel:"generic"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function  acceptProposalSMS(phoneNumber: string, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"Dverse",
            type:"plain",
            channel:"generic"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function  sendDeliveryCodeSMS(phoneNumber: string, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"N-Alert",
            type:"plain",
            channel:"dnd"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function   completeSetupSMS(phoneNumber: string, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"Dverse",
            type:"plain",
            channel:"generic"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function  setupApprovedSMS(phoneNumber: string, message: string): Promise<void>  {
    try {
        const response = await axios.post(
          termiiEndpoint,
          {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms:message,
            from:"Dverse",
            type:"plain",
            channel:"generic"
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('SMS sent successfully:', response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error sending SMS:', error.response?.data || error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
}

export async function  sendSMS(phoneNumber: string, message: string): Promise<void>  {
  try {
      const response = await axios.post(
        termiiEndpoint,
        {
          api_key: termiiApiKey,
          to: phoneNumber,
          sms:message,
          from:"Dverse",
          type:"plain",
          channel:"generic"
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('SMS sent successfully:', response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error sending SMS:', error.response?.data || error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
}