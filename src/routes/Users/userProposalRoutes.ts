// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { acceptRider, viewAllProposal } from '../../controllers/UserControllers/userProposalController';

export const userProposalRouter = express.Router();

// userRouter.put('/profile', authenticateJWT, updateUserProfile);
userProposalRouter.get('/view-all-proposal', authenticateJWT, viewAllProposal);
userProposalRouter.put('/accept-proposal', authenticateJWT, acceptRider);
// export default userRouter;
