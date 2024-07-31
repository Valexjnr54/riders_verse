// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import {  completeSetup, updateAccountDetails } from '../../controllers/VendorControllers/vendorProfileController';

export const vendorProfileRouter = express.Router();

// Secure the logout route with authentication middleware
// vendorProfileRouter.post('/complete-setup', authenticateJWT, completeSetup);
// vendorProfileRouter.put('/update-account-details', authenticateJWT, updateAccountDetails);
// export default authRouter;
