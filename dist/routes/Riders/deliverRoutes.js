"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.riderDeliveryRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const deliveryController_1 = require("../../controllers/RiderControllers/deliveryController");
exports.riderDeliveryRouter = express_1.default.Router();
exports.riderDeliveryRouter.get('/pickup-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.pickDelivery);
exports.riderDeliveryRouter.get('/all-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.viewAllDelivery);
exports.riderDeliveryRouter.get('/single-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.viewSingleDelivery);
