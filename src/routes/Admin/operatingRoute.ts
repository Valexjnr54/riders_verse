// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allOperatingAreas, createOperatingArea, deleteOperatingArea, singleOperatingArea, updateOperatingArea } from '../../controllers/AdminControllers/operatingAreaController';

export const adminOperatingRouter = express.Router();
adminOperatingRouter.post('/create-operating-area', authenticateJWT, createOperatingArea);
adminOperatingRouter.put('/update-operating-area', authenticateJWT, updateOperatingArea);
adminOperatingRouter.get('/all-operating-areas', authenticateJWT, allOperatingAreas);
adminOperatingRouter.get('/single-operating-area', authenticateJWT, singleOperatingArea);
adminOperatingRouter.delete('/delete-operating-area', authenticateJWT, deleteOperatingArea);


// export default authRouter;