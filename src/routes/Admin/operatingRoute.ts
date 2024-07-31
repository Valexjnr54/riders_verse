// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { createOperatingArea } from '../../controllers/AdminControllers/operatingAreaController';

export const adminOperatingRouter = express.Router();
adminOperatingRouter.post('/create-operating-area', authenticateJWT, createOperatingArea);


// export default authRouter;