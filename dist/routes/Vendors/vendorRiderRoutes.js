"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorRiderRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const vendorRiderController_1 = require("../../controllers/VendorControllers/vendorRiderController");
const multerProfileMiddleware_1 = require("../../middlewares/multerProfileMiddleware");
exports.vendorRiderRouter = express_1.default.Router();
// Secure the logout route with authentication middleware
exports.vendorRiderRouter.post('/vendor-create-rider', authenticationMiddleware_1.authenticateJWT, multerProfileMiddleware_1.riderCredentials, vendorRiderController_1.registerRider);
// export default authRouter;
