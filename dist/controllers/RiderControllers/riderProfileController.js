"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeSetup = exports.changePassword = exports.changeProfileImage = exports.profile = exports.updateRider = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const sendSMS_1 = require("../../utils/sendSMS");
const prisma = new models_1.PrismaClient();
async function updateRider(request, response) {
    const { fullname, phone_number } = request.body;
    const riderId = request.user.riderId;
    try {
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { id: riderId } });
        if (!existingRider) {
            return response.status(404).json({ message: 'Rider not Found' });
        }
        // Update a new rider in the database
        const user = await prisma.rider.update({
            where: {
                id: riderId
            },
            data: {
                fullname,
                phone_number,
            },
            select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                profile_image: true,
                phone_number: true
            }
        });
        return response.status(200).json({ message: 'Rider profile updated', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateRider = updateRider;
async function profile(request, response) {
    const riderId = request.user.riderId;
    try {
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { id: riderId } });
        if (!existingRider) {
            return response.status(404).json({ message: 'Rider not Found' });
        }
        // Create a new user in the database
        const user = await prisma.rider.findUnique({
            where: {
                id: riderId
            },
            select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                profile_image: true,
                phone_number: true
            }
        });
        return response.status(200).json({ message: 'Rider profile', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.profile = profile;
async function changeProfileImage(request, response) {
    const riderId = request.user.riderId;
    try {
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { id: riderId } });
        if (!existingRider) {
            return response.status(404).json({ message: 'Rider not Found' });
        }
        //Uploading Image to Cloudinary
        let imageUrl; // Default URL
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
        else {
            response.status(400).json({ message: 'No file uploaded' });
        }
        // Create a new user in the database
        const user = await prisma.rider.update({
            where: {
                id: riderId
            },
            data: {
                profile_image: imageUrl,
            },
            select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                profile_image: true,
                phone_number: true
            }
        });
        return response.status(200).json({ message: 'Rider profile image updated', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.changeProfileImage = changeProfileImage;
async function changePassword(request, response) {
    const { old_password, password } = request.body;
    const riderId = request.user.riderId;
    try {
        const validationRules = [
            (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { id: riderId } });
        if (!existingRider) {
            return response.status(404).json({ message: 'Rider not Found' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(password, existingRider.password);
        if (!passwordMatch) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create a new user in the database
        const user = await prisma.rider.update({
            where: {
                id: riderId
            },
            data: {
                password: hashedPassword,
            },
            select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                profile_image: true,
                phone_number: true
            }
        });
        // Clear the JWT token from the client-side cookies
        response.clearCookie('jwt');
        return response.status(200).json({ message: 'Rider password updated', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.changePassword = changePassword;
async function completeSetup(request, response) {
    // Extract data from the request
    const { bank_name, account_name, account_number } = request.body;
    const riderId = request.user.riderId;
    try {
        const validationRules = [
            (0, express_validator_1.body)('bank_name').notEmpty().withMessage('Bank Name is required'),
            (0, express_validator_1.body)('account_name').notEmpty().withMessage('Account Name is required'),
            (0, express_validator_1.body)('account_number').notEmpty().isLength({ min: 10 }).withMessage('Account number is required and must be at least 10 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { id: riderId } });
        if (!existingRider) {
            return response.status(404).json({ message: 'Rider not Found' });
        }
        const existingBankDetails = await prisma.bank_details.findUnique({ where: { rider_id: riderId } });
        if (existingBankDetails) {
            return response.status(400).json({ message: 'Bank Details Already Exist' });
        }
        try {
            const newDetail = await prisma.bank_details.create({
                data: {
                    rider_id: riderId,
                    bank_name,
                    account_name,
                    account_number
                },
                select: {
                    id: true,
                    rider_id: true,
                    bank_name: true,
                    account_name: true,
                    account_number: true,
                    rider: {
                        select: {
                            id: true,
                            fullname: true,
                            email: true,
                            username: true,
                            phone_number: true,
                        }
                    }
                }
            });
            const rider = await prisma.rider.findUnique({
                where: {
                    id: riderId
                }
            });
            const rider_name = rider?.fullname;
            const rider_phone = rider?.phone_number;
            const message = `Dear ${rider_name}, Your credentials have been received and will be checked properly, but for now you will not be able to receive any delivery request until your account is activated, which will take 24-48hrs. Powered by RiderVerse.net`;
            if (rider_phone) {
                (0, sendSMS_1.completeSetupSMS)(rider_phone, message);
            }
            else {
                console.log("SMS Undefined");
            }
            return response.status(200).json({ message: 'Rider account details created', bank_detail: newDetail });
        }
        catch (error) {
            console.error('Error completing setup:', error);
            return response.status(500).json({ message: 'Internal Server Error' });
        }
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.completeSetup = completeSetup;
