"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProfileRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
// import {  completeSetup, updateAccountDetails } from '../../controllers/VendorControllers/vendorProfileController';
exports.vendorProfileRouter = express_1.default.Router();
// Secure the logout route with authentication middleware
// vendorProfileRouter.post('/complete-setup', authenticateJWT, completeSetup);
// vendorProfileRouter.put('/update-account-details', authenticateJWT, updateAccountDetails);
// export default authRouter;
