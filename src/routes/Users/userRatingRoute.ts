// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../middlewares/multerMiddleware';
import { rateRider } from '../../controllers/UserControllers/ratingController';

export const userRatingRouter = express.Router();
userRatingRouter.post('/rate', authenticateJWT, rateRider);
// userProfileRouter.put('/update-profile', authenticateJWT, updateUser);
// userProfileRouter.put('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
// userProfileRouter.put('/change-password', authenticateJWT, changePassword);