// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { acceptDelivery, pickDelivery, rejectDelivery, viewAllDelivery, viewSingleDelivery } from '../../controllers/VendorControllers/deliveryController';

export const vendorDeliveryRouter = express.Router();

vendorDeliveryRouter.get('/pickup-delivery', authenticateJWT, pickDelivery);
vendorDeliveryRouter.get('/all-delivery', authenticateJWT, viewAllDelivery);
vendorDeliveryRouter.get('/single-delivery', authenticateJWT, viewSingleDelivery);
vendorDeliveryRouter.put('/accept-delivery', authenticateJWT, acceptDelivery);
vendorDeliveryRouter.put('/reject-delivery', authenticateJWT, rejectDelivery);