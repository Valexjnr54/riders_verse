// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { activateRider } from '../../controllers/AdminControllers/activateController';

export const adminActivateRouter = express.Router();
adminActivateRouter.get('/activate-rider', authenticateJWT, activateRider);


// export default authRouter;