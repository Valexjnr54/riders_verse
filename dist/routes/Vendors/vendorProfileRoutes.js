"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProfileRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const vendorProfileController_1 = require("../../controllers/VendorControllers/vendorProfileController");
// import {  completeSetup, updateAccountDetails } from '../../controllers/VendorControllers/vendorProfileController';
exports.vendorProfileRouter = express_1.default.Router();
// Secure the logout route with authentication middleware
exports.vendorProfileRouter.get('/profile', authenticationMiddleware_1.authenticateJWT, vendorProfileController_1.profile);
exports.vendorProfileRouter.put('/update-profile', authenticationMiddleware_1.authenticateJWT, vendorProfileController_1.updateVendor);
exports.vendorProfileRouter.put('/change-profile-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('profile_image'), vendorProfileController_1.changeProfileImage);
exports.vendorProfileRouter.put('/change-password', authenticationMiddleware_1.authenticateJWT, vendorProfileController_1.changePassword);
exports.vendorProfileRouter.post('/complete-setup', authenticationMiddleware_1.authenticateJWT, vendorProfileController_1.completeSetup);
exports.vendorProfileRouter.put('/update-account-details', authenticationMiddleware_1.authenticateJWT, vendorProfileController_1.updateAccountDetails);
// export default authRouter;
