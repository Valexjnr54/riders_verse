"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const userProfileController_1 = require("../../controllers/UserControllers/userProfileController");
exports.userProfileRouter = express_1.default.Router();
exports.userProfileRouter.get('/profile', authenticationMiddleware_1.authenticateJWT, userProfileController_1.profile);
exports.userProfileRouter.put('/update-profile', authenticationMiddleware_1.authenticateJWT, userProfileController_1.updateUser);
exports.userProfileRouter.put('/change-profile-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('profile_image'), userProfileController_1.changeProfileImage);
exports.userProfileRouter.put('/change-password', authenticationMiddleware_1.authenticateJWT, userProfileController_1.changePassword);
