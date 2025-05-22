// src/routes/authRoutes.ts
import express from 'express';
import { registerAdmin, loginAdmin, logoutAdmin } from '../../controllers/AuthControllers/adminAuthController';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';

export const adminAuthRouter = express.Router();

adminAuthRouter.post('/admin-register', upload.single('profile_image'), registerAdmin);
adminAuthRouter.post('/admin-login', loginAdmin);
// Secure the logout route with authentication middleware
adminAuthRouter.post('/admin-logout', authenticateJWT, logoutAdmin);

// export default authRouter;
