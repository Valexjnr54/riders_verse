// src/utils/emailSender.ts
import nodemailer, { TransportOptions, SentMessageInfo } from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import fs from "fs";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.MAIL_USER || "qmarthub@gmail.com",
    pass: process.env.MAIL_PASSWORD || "fukpospayyoomzlv"
  }
});

export async function sendWelcomeEmail(email: string, fullname: string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: 'no-reply@dverse.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { fullname, email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendDeliveryRequest(email: string, rider:object, deliveryDetail: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/delivery.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { deliveryDetail:deliveryDetail, rider:rider, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendProposal(email: string, proposal: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/proposal.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { proposal:proposal, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendApproval(email: string, deliveryDetail: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/approve.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { deliveryDetail:deliveryDetail, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendReject(email: string, deliveryDetail: object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/reject.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'info@riderapp.com',
    to: email,
    subject: 'Welcome to Riders App',
    html: ejs.render(template, { deliveryDetail:deliveryDetail, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// const sendEmail = async () => {
//   try {
//     const info: SentMessageInfo = await transporter.sendMail({
//       from: 'no-reply@dverse.com',
//       to: 'jimvalex54@gmail.com',
//       subject: 'Test Email',
//       text: 'This is a test email from Node.js!',
//     });

//     console.log('Email sent: %s', info.messageId);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// sendEmail();