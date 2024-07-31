"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDeliveryRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const deliveryController_1 = require("../../controllers/UserControllers/deliveryController");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
exports.userDeliveryRouter = express_1.default.Router();
// userRouter.put('/profile', authenticateJWT, updateUserProfile);
exports.userDeliveryRouter.post('/create-delivery', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('package_image'), deliveryController_1.createDeliveryRequest);
exports.userDeliveryRouter.get('/view-all-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.viewAllDelivery);
exports.userDeliveryRouter.get('/view-single-delivery/:id', authenticationMiddleware_1.authenticateJWT, deliveryController_1.viewSingleDelivery);
exports.userDeliveryRouter.put('/update-delivery/:id', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('package_image'), deliveryController_1.updateDelivery);
exports.userDeliveryRouter.delete('/delete-delivery/:id', authenticationMiddleware_1.authenticateJWT, deliveryController_1.deleteDelivery);
exports.userDeliveryRouter.put('/confirm-delivery', authenticationMiddleware_1.authenticateJWT, deliveryController_1.confirmDelivery);
// export default userRouter;
