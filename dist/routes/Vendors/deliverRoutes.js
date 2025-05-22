"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorDeliveryRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const deliveryController_1 = require("../../controllers/VendorControllers/deliveryController");
exports.vendorDeliveryRouter = express_1.default.Router();
exports.vendorDeliveryRouter.get('/pickup-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.pickDelivery);
exports.vendorDeliveryRouter.get('/all-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.viewAllDelivery);
exports.vendorDeliveryRouter.get('/single-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.viewSingleDelivery);
exports.vendorDeliveryRouter.put('/accept-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.acceptDelivery);
exports.vendorDeliveryRouter.put('/reject-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.rejectDelivery);
