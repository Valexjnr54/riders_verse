"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAdmin = exports.loginAdmin = exports.registerAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new models_1.PrismaClient();
async function registerAdmin(request, res) {
    const { fullname, username, email, password } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingAdmin = await prisma.admin.findUnique({ where: { email } });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        //Uploading Image to Cloudinary
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        // Create a new Admin in the database
        const newAdmin = await prisma.admin.create({
            data: {
                fullname,
                username,
                email,
                profile_image: imageUrl,
                password: hashedPassword, // Store the salt along with the hash
            },
        });
        // Generate a JWT token for the newly registered Admin
        const token = jsonwebtoken_1.default.sign({ adminId: newAdmin.id, email: newAdmin.email, fullname: newAdmin.fullname, username: newAdmin.username, profile_image: newAdmin.profile_image }, config_1.Config.secret);
        res.status(201).json({ token, newAdmin });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.registerAdmin = registerAdmin;
async function loginAdmin(req, res) {
    const { email, password } = req.body;
    try {
        // Find the Admin by email
        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(password, admin.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        // Generate a JWT token for the admin
        const token = jsonwebtoken_1.default.sign({ adminId: admin.id, email: admin.email }, config_1.Config.secret);
        res.status(200).json({ token, admin });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.loginAdmin = loginAdmin;
async function logoutAdmin(req, res) {
    try {
        // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
        // Here, we'll focus on clearing the token from cookies.
        // Clear the JWT token from the client-side cookies
        res.clearCookie('jwt');
        // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.
        // Send a success response to the client
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.logoutAdmin = logoutAdmin;
