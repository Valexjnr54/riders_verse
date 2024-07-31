// src/routes/authRoutes.ts
import express from 'express';
import { loginRider, logoutRider } from '../../controllers/AuthControllers/riderAuthController';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';

export const riderAuthRouter = express.Router();

// riderAuthRouter.post('/rider-register', upload.single('profile_image'), registerRider);
riderAuthRouter.post('/rider-login', loginRider);
// Secure the logout route with authentication middleware
riderAuthRouter.post('/rider-logout', authenticateJWT, logoutRider);
// export default authRouter;
