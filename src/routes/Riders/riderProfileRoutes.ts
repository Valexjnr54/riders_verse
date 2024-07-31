// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { changePassword, changeProfileImage, completeSetup, profile, updateRider } from '../../controllers/RiderControllers/riderProfileController';
import { riderCredentials } from '../../middlewares/multerProfileMiddleware';

export const riderProfileRouter = express.Router();

riderProfileRouter.get('/profile', authenticateJWT, profile);
riderProfileRouter.put('/update-profile', authenticateJWT, updateRider);
riderProfileRouter.put('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
riderProfileRouter.put('/change-password', authenticateJWT, changePassword);
riderProfileRouter.post('/complete-setup', authenticateJWT, completeSetup);