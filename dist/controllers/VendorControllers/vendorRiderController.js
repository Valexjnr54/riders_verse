"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRider = void 0;
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
    const { fullname, username, email, phone_number, password, nin, driver_license, plate_number } = request.body;
    const vendor_id = request.user.vendorId;
    try {
        const validationRules = [
            (0, express_validator_1.body)("fullname").notEmpty().withMessage("Full Name is required"),
            (0, express_validator_1.body)("username").notEmpty().withMessage("Username is required"),
            (0, express_validator_1.body)("email").isEmail().withMessage("Invalid email address"),
            (0, express_validator_1.body)("phone_number").notEmpty().withMessage("Phone Number is required"),
            (0, express_validator_1.body)("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
            (0, express_validator_1.body)('nin').notEmpty().withMessage('NIN Number is required'),
            (0, express_validator_1.body)('driver_license').notEmpty().withMessage('Driver License is required'),
            (0, express_validator_1.body)('plate_number').notEmpty().withMessage('Plate Number is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { email } });
        if (existingRider) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const existingPhone = await prisma.rider.findUnique({
            where: { phone_number },
        });
        if (existingPhone) {
            return res.status(400).json({ message: "Phone Number Already Exist" });
        }
        const existingUsername = await prisma.rider.findUnique({
            where: { username },
        });
        if (existingUsername) {
            return res.status(400).json({ message: "Username Already Exist" });
        }
        const existingNin = await prisma.rider_credentials.findFirst({ where: { nin: nin } });
        if (existingNin) {
            return res.status(400).json({ message: 'NIN Already Exist' });
        }
        const existingDriverLicence = await prisma.rider_credentials.findFirst({ where: { driver_license: driver_license } });
        if (existingDriverLicence) {
            return res.status(400).json({ message: 'Driver Licence Already Exist' });
        }
        const existingPlateNumber = await prisma.rider_credentials.findFirst({ where: { plate_number: plate_number } });
        if (existingPlateNumber) {
            return res.status(400).json({ message: 'Plate Number Already Exist' });
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        //Uploading Image to Cloudinary
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        if (request.file) {
            const profile_image = request.file.path; // Assuming you're using multer or a similar middleware for file uploads
            if (profile_image != null) {
                const uploadedImageUrl = await (0, cloudinary_1.default)(profile_image, "rider_app/images/profile_images");
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
                vendor_id,
                fullname,
                username,
                email,
                phone_number,
                profile_image: imageUrl,
                // operating_areas: operating_areas.filter((area: undefined) => area !== undefined),
                password: hashedPassword, // Store the salt along with the hash
            },
        });
        if (!request.files || !('nin_image' in request.files) || !('driver_license_image' in request.files) || !('vehicle_image' in request.files)) {
            return res.status(400).json({ message: 'Please provide all required images.' });
        }
        // Upload NIN image to Cloudinary
        const ninImageUrl = await (0, cloudinary_1.default)(request.files['nin_image'][0].path, 'rider_app/images/nin_images');
        fs_1.default.unlink(request.files['nin_image'][0].path, (err) => {
            if (err) {
                console.error(`Error deleting NIN file`);
            }
            else {
                console.log(`NIN File deleted`);
            }
        });
        // Upload Driver License image to Cloudinary
        const driverLicenseImageUrl = await (0, cloudinary_1.default)(request.files['driver_license_image'][0].path, 'rider_app/images/driver_license_images');
        fs_1.default.unlink(request.files['driver_license_image'][0].path, (err) => {
            if (err) {
                console.error(`Error deleting driver license file`);
            }
            else {
                console.log(`Driver License File deleted`);
            }
        });
        // Upload Vehicle image to Cloudinary
        const vehicleImageUrl = await (0, cloudinary_1.default)(request.files['vehicle_image'][0].path, 'rider_app/images/vehicle_images');
        fs_1.default.unlink(request.files['vehicle_image'][0].path, (err) => {
            if (err) {
                console.error(`Error deleting vehicle Image file`);
            }
            else {
                console.log(`Vehicle Image File deleted`);
            }
        });
        // Save data to the database using Prisma
        const credentials = await prisma.rider_credentials.create({
            data: {
                rider_id: newRider.id,
                nin,
                nin_image: ninImageUrl,
                driver_license,
                driver_license_image: driverLicenseImageUrl,
                plate_number,
                vehicle_image: vehicleImageUrl,
                status: 'Pending', // Adjust as needed
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
        const token = jsonwebtoken_1.default.sign({
            riderId: newRider.id,
            email: newRider.email,
            fullname: newRider.fullname,
            phone_number: newRider.phone_number,
            username: newRider.username,
            profile_image: newRider.profile_image,
        }, config_1.Config.secret);
        res.status(201).json({ token, newRider, credentials });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
exports.registerRider = registerRider;
