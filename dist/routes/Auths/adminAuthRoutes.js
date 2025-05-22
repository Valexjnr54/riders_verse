"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const adminAuthController_1 = require("../../controllers/AuthControllers/adminAuthController");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
exports.adminAuthRouter = express_1.default.Router();
exports.adminAuthRouter.post('/admin-register', multerMiddleware_1.upload.single('profile_image'), adminAuthController_1.registerAdmin);
exports.adminAuthRouter.post('/admin-login', adminAuthController_1.loginAdmin);
// Secure the logout route with authentication middleware
exports.adminAuthRouter.post('/admin-logout', authenticationMiddleware_1.authenticateJWT, adminAuthController_1.logoutAdmin);
// export default authRouter;
