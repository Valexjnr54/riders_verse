"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const vendorAuthController_1 = require("../../controllers/AuthControllers/vendorAuthController");
exports.vendorAuthRouter = express_1.default.Router();
exports.vendorAuthRouter.post('/vendor-register', multerMiddleware_1.upload.single('profile_image'), vendorAuthController_1.registerVendor);
exports.vendorAuthRouter.post('/vendor-login', vendorAuthController_1.loginVendor);
// Secure the logout route with authentication middleware
exports.vendorAuthRouter.post('/vendor-logout', authenticationMiddleware_1.authenticateJWT, vendorAuthController_1.logoutVendor);
// export default authRouter;
