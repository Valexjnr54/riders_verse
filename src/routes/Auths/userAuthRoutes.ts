// src/routes/authRoutes.ts
import express from 'express';
import { registerUser, loginUser, logoutUser } from '../../controllers/AuthControllers/userAuthController';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';

export const userAuthRouter = express.Router();

userAuthRouter.post('/user-register', upload.single('profile_image'), registerUser);
userAuthRouter.post('/user-login', loginUser);
// Secure the logout route with authentication middleware
userAuthRouter.post('/user-logout', authenticateJWT, logoutUser);


// export default authRouter;
