"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRider = exports.loginRider = exports.registerRider = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const emailSender_1 = require("../../utils/emailSender");
const sendSMS_1 = require("../../utils/sendSMS");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new models_1.PrismaClient();
async function registerRider(request, res) {
    const { fullname, username, email, phone_number, operating_areas, password } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            (0, express_validator_1.body)('operating_areas').notEmpty().withMessage('Areas of Operation is required'),
            (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { email } });
        if (existingRider) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        const existingPhone = await prisma.rider.findUnique({ where: { phone_number } });
        if (existingPhone) {
            return res.status(400).json({ message: 'Phone Number Already Exist' });
        }
        const existingUsername = await prisma.rider.findUnique({ where: { username } });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username Already Exist' });
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        //Uploading Image to Cloudinary
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        if (request.file) {
            const profile_image = request.file.path; // Assuming you're using multer or a similar middleware for file uploads
            if (profile_image != null) {
                const uploadedImageUrl = await (0, cloudinary_1.default)(profile_image, 'rider_app/images/profile_images');
                if (uploadedImageUrl) {
                    imageUrl = uploadedImageUrl;
                }
            }
            fs_1.default.unlink(profile_image, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${profile_image}`);
                }
                else {
                    console.log(`File deleted: ${profile_image}`);
                }
            });
        }
        // else {
        //   res.status(400).json({ message: 'No file uploaded' });
        // }
        // Create a new Rider in the database
        const newRider = await prisma.rider.create({
            data: {
                fullname,
                username,
                email,
                phone_number,
                profile_image: imageUrl,
                operating_areas: operating_areas.filter((area) => area !== undefined),
                password: hashedPassword // Store the salt along with the hash
            },
        });
        // Send a welcome email with the rider's name and email
        (0, emailSender_1.sendWelcomeEmail)(email, fullname);
        const message = `Welcome,  ${fullname}

    You're receiving this message because you recently signed up for a account with Riders App.
    Please Verify your email address.
    
    Confirm your email address by clicking the button below. This step adds extra security to your business by verifying you own this email.
    
    Powered by RiderVerse.net`;
        // Send a welcome SMS with the rider's name and email
        (0, sendSMS_1.sendWelcomeSMS)(phone_number, message);
        // Generate a JWT token for the newly registered rider
        const token = jsonwebtoken_1.default.sign({ riderId: newRider.id, email: newRider.email, fullname: newRider.fullname, phone_number: newRider.phone_number, username: newRider.username, profile_image: newRider.profile_image }, config_1.Config.secret);
        res.status(201).json({ token, newRider });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.registerRider = registerRider;
async function loginRider(req, res) {
    const { email, password } = req.body;
    try {
        // Find the Rider by email
        const rider = await prisma.rider.findUnique({ where: { email } });
        if (!rider) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(password, rider.password);
        if (!passwordMatch) {
            res.status(400).json({ error: 'Invalid email or password' });
            return;
        }
        // Generate a JWT token for the rider
        const token = jsonwebtoken_1.default.sign({ riderId: rider.id, email: rider.email }, config_1.Config.secret);
        res.status(200).json({ token, rider });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.loginRider = loginRider;
async function logoutRider(req, res) {
    try {
        // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
        // Here, we'll focus on clearing the token from cookies.
        // Clear the JWT token from the client-side cookies
        res.clearCookie('jwt');
        // Optionally, you can perform additional tasks here, such as logging the Rider's logout action.
        // Send a success response to the client
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.logoutRider = logoutRider;
