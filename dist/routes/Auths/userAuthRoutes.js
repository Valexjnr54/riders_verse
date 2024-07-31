"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const userAuthController_1 = require("../../controllers/AuthControllers/userAuthController");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
exports.userAuthRouter = express_1.default.Router();
exports.userAuthRouter.post('/user-register', multerMiddleware_1.upload.single('profile_image'), userAuthController_1.registerUser);
exports.userAuthRouter.post('/user-login', userAuthController_1.loginUser);
// Secure the logout route with authentication middleware
exports.userAuthRouter.post('/user-logout', authenticationMiddleware_1.authenticateJWT, userAuthController_1.logoutUser);
// export default authRouter;
