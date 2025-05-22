"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRider = exports.loginRider = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new models_1.PrismaClient();
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
