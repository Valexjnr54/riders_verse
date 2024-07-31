"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRatingRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const ratingController_1 = require("../../controllers/UserControllers/ratingController");
exports.userRatingRouter = express_1.default.Router();
exports.userRatingRouter.post('/rate', authenticationMiddleware_1.authenticateJWT, ratingController_1.rateRider);
// userProfileRouter.put('/update-profile', authenticateJWT, updateUser);
// userProfileRouter.put('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
// userProfileRouter.put('/change-password', authenticateJWT, changePassword);
