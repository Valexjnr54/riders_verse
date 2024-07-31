import nodemailer, { TransportOptions, SentMessageInfo }  from 'nodemailer';
import { emailConfig } from '../config/config';

const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.auth.user,
    pass: emailConfig.auth.pass,
  },
  connectionTimeout: 5000000,
  timeout: 10000000,
} as TransportOptions);


const sendEmail = async () => {
    try {
      const info: SentMessageInfo = await transporter.sendMail({
        from: 'no-reply@dverse.com',
        to: 'jimvalex54@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email from Node.js!',
      });
  
      console.log('Email sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

sendEmail();
