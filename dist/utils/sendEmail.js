"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config/config");
const transporter = nodemailer_1.default.createTransport({
    host: config_1.emailConfig.host,
    port: config_1.emailConfig.port,
    secure: config_1.emailConfig.secure,
    auth: {
        user: config_1.emailConfig.auth.user,
        pass: config_1.emailConfig.auth.pass,
    },
    connectionTimeout: 5000000,
    timeout: 10000000,
});
const sendEmail = async () => {
    try {
        const info = await transporter.sendMail({
            from: 'no-reply@dverse.com',
            to: 'jimvalex54@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email from Node.js!',
        });
        console.log('Email sent: %s', info.messageId);
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
};
sendEmail();
