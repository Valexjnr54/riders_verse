// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import {  registerRider } from '../../controllers/VendorControllers/vendorRiderController';
import { riderCredentials } from '../../middlewares/multerProfileMiddleware';

export const vendorRiderRouter = express.Router();

// Secure the logout route with authentication middleware
vendorRiderRouter.post('/vendor-create-rider', authenticateJWT, riderCredentials, registerRider);
// export default authRouter;
