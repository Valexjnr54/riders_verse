// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { addOperatingArea, accountDetail, changePassword, changeProfileImage, completeSetup, deleteOperatingArea, profile, updateAccountDetails, updateOperatingArea, updateVendor, viewAllOperatingArea, viewSingleOperatingArea } from '../../controllers/VendorControllers/vendorProfileController';
// import {  completeSetup, updateAccountDetails } from '../../controllers/VendorControllers/vendorProfileController';

export const vendorProfileRouter = express.Router();

// Secure the logout route with authentication middleware
vendorProfileRouter.get('/profile', authenticateJWT, profile);
vendorProfileRouter.put('/update-profile', authenticateJWT, updateVendor);
vendorProfileRouter.put('/update-operating-area', authenticateJWT, updateOperatingArea);
vendorProfileRouter.delete('/delete-operating-area', authenticateJWT, deleteOperatingArea);
vendorProfileRouter.post('/add-operating-area', authenticateJWT, addOperatingArea);
vendorProfileRouter.get('/operating-area', authenticateJWT, viewAllOperatingArea);
vendorProfileRouter.get('/single-operating-area', authenticateJWT, viewSingleOperatingArea);
vendorProfileRouter.put('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
vendorProfileRouter.put('/change-password', authenticateJWT, changePassword);
vendorProfileRouter.post('/complete-setup', authenticateJWT, completeSetup);
vendorProfileRouter.put('/update-account-details', authenticateJWT, updateAccountDetails);
vendorProfileRouter.get('/account-detail', authenticateJWT, accountDetail);
// export default authRouter;
