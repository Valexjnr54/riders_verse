"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.riderAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const riderAuthController_1 = require("../../controllers/AuthControllers/riderAuthController");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
exports.riderAuthRouter = express_1.default.Router();
exports.riderAuthRouter.post('/rider-register', multerMiddleware_1.upload.single('profile_image'), riderAuthController_1.registerRider);
exports.riderAuthRouter.post('/rider-login', riderAuthController_1.loginRider);
// Secure the logout route with authentication middleware
exports.riderAuthRouter.post('/rider-logout', authenticationMiddleware_1.authenticateJWT, riderAuthController_1.logoutRider);
// export default authRouter;
