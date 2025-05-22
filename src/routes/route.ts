// src/routes/userRoutes.ts
import express from 'express';
import { allOperatingArea, confirmDelivery, deliveryCode, vendorPrice, banks, fetchAccountName } from '../controllers/miscellaneousController';

export const router = express.Router();

router.get('/operating_areas', allOperatingArea)
router.get('/delivery-detail', deliveryCode)
router.get('/confirm-delivery', confirmDelivery)
router.get('/vendor-price', vendorPrice)
router.get('/get-banks', banks)
router.post('/get-account-name', fetchAccountName)
