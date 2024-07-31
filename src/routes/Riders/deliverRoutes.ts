// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { pickDelivery, viewAllDelivery, viewSingleDelivery } from '../../controllers/RiderControllers/deliveryController';

export const riderDeliveryRouter = express.Router();

riderDeliveryRouter.get('/pickup-delivery', authenticateJWT, pickDelivery);
riderDeliveryRouter.get('/all-delivery', authenticateJWT, viewAllDelivery);
riderDeliveryRouter.get('/single-delivery', authenticateJWT, viewSingleDelivery);