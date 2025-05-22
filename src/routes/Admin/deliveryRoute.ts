// src/routes/deliveryRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { deleteDelivery, viewAllDelivery, viewSingleDelivery } from '../../controllers/AdminControllers/deliveryController';

export const adminDeliveryRouter = express.Router();
adminDeliveryRouter.get('/all-deliveries', authenticateJWT, viewAllDelivery);
adminDeliveryRouter.get('/single-delivery', authenticateJWT, viewSingleDelivery);
adminDeliveryRouter.delete('/delete-delivery', authenticateJWT, deleteDelivery);