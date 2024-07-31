import dotenv from 'dotenv'

dotenv.config({ path:__dirname + '/../../.env' });

export const Config = {
    secret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5ODgyMjQ0NCwiaWF0IjoxNjk4ODIyNDQ0fQ.5TVMbvZoSSbNxcdP2ltyu4-Qbaec9LMAKlmTnslK8lo',
    corsAllowedOrigin: process.env.CORS_ALLOWED_ORIGIN || '*',
    paystackSecret: process.env.PAYSTACK_API_KEY,
    paystackBaseURL: process.env.PAYSTACK_BASE_URL,
    paystackDeliveryCallback: process.env.PAYSTACK_DELIVERY_CALLBACK,
};

export const emailConfig = {
    host: process.env.EMAIL_HOST || 'box1109.bluehost.com',
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: process.env.EMAIL_SECURE === 'true' || false,
    auth: {
      user: process.env.EMAIL_USER || 'info@qmarthub.com',
      pass: process.env.EMAIL_PASSWORD || 'infoP@55word',
    },
  };
  



