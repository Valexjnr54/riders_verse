// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { loginVendor, logoutVendor, registerVendor } from '../../controllers/AuthControllers/vendorAuthController';

export const vendorAuthRouter = express.Router();

vendorAuthRouter.post('/vendor-register', upload.single('profile_image'), registerVendor);
vendorAuthRouter.post('/vendor-login', loginVendor);
// Secure the logout route with authentication middleware
vendorAuthRouter.post('/vendor-logout', authenticateJWT, logoutVendor);
// export default authRouter;
