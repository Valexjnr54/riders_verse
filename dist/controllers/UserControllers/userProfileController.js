"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.changeProfileImage = exports.profile = exports.updateUser = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new models_1.PrismaClient();
async function updateUser(request, response) {
    const { fullname, phone_number } = request.body;
    const userId = request.user.userId;
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) {
            return response.status(404).json({ message: 'User not Found' });
        }
        // Create a new user in the database
        const user = await prisma.user.update({
            where: {
                id: userId
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
        return response.status(200).json({ message: 'User profile updated', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateUser = updateUser;
async function profile(request, response) {
    const userId = request.user.userId;
    try {
        // Check if the email is already registered
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) {
            return response.status(404).json({ message: 'User not Found' });
        }
        // Create a new user in the database
        const user = await prisma.user.findUnique({
            where: {
                id: userId
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
        return response.status(200).json({ message: 'User profile', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.profile = profile;
async function changeProfileImage(request, response) {
    const userId = request.user.userId;
    try {
        // Check if the email is already registered
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) {
            return response.status(404).json({ message: 'User not Found' });
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
        const user = await prisma.user.update({
            where: {
                id: userId
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
        return response.status(200).json({ message: 'User profile updated', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.changeProfileImage = changeProfileImage;
async function changePassword(request, response) {
    const { old_password, password } = request.body;
    const userId = request.user.userId;
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
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) {
            return response.status(404).json({ message: 'User not Found' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(old_password, existingUser.password);
        if (!passwordMatch) {
            response.status(401).json({ error: 'Password do not match' });
            return;
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create a new user in the database
        const user = await prisma.user.update({
            where: {
                id: userId
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
        return response.status(200).json({ message: 'User password updated', data: user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.changePassword = changePassword;
