"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.riderProfileRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const multerMiddleware_1 = require("../../middlewares/multerMiddleware");
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const riderProfileController_1 = require("../../controllers/RiderControllers/riderProfileController");
const multerProfileMiddleware_1 = require("../../middlewares/multerProfileMiddleware");
exports.riderProfileRouter = express_1.default.Router();
exports.riderProfileRouter.get('/profile', authenticationMiddleware_1.authenticateJWT, riderProfileController_1.profile);
exports.riderProfileRouter.put('/update-profile', authenticationMiddleware_1.authenticateJWT, riderProfileController_1.updateRider);
exports.riderProfileRouter.put('/change-profile-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('profile_image'), riderProfileController_1.changeProfileImage);
exports.riderProfileRouter.put('/change-password', authenticationMiddleware_1.authenticateJWT, riderProfileController_1.changePassword);
exports.riderProfileRouter.post('/complete-setup', authenticationMiddleware_1.authenticateJWT, multerProfileMiddleware_1.riderCredentials, riderProfileController_1.completeSetup);
exports.riderProfileRouter.put('/update-account-details', authenticationMiddleware_1.authenticateJWT, riderProfileController_1.updateAccountDetails);
