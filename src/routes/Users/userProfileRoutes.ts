// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../middlewares/multerMiddleware';
import { changePassword, changeProfileImage, profile, updateUser } from '../../controllers/UserControllers/userProfileController';

export const userProfileRouter = express.Router();
userProfileRouter.get('/profile', authenticateJWT, profile);
userProfileRouter.put('/update-profile', authenticateJWT, updateUser);
userProfileRouter.put('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
userProfileRouter.put('/change-password', authenticateJWT, changePassword);