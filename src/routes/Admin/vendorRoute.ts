// src/routes/vendorRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allVendors, deleteVendor, singleVendor } from '../../controllers/AdminControllers/vendorController';

export const adminVendorRouter = express.Router();
adminVendorRouter.get('/all-vendors', authenticateJWT, allVendors);
adminVendorRouter.get('/single-vendor', authenticateJWT, singleVendor);
adminVendorRouter.delete('/delete-vendor', authenticateJWT, deleteVendor);