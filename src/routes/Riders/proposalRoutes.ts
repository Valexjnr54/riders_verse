// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../middlewares/multerMiddleware';
import { approvedProposal, createProposal, deleteProposal, pendingProposal, rejectedProposal } from '../../controllers/RiderControllers/ProposalController';

export const riderProposalRouter = express.Router();

riderProposalRouter.post('/send-proposal', authenticateJWT, createProposal);
riderProposalRouter.delete('/cancel-proposal', authenticateJWT, deleteProposal);
riderProposalRouter.get('/pending-proposal', authenticateJWT, pendingProposal);
riderProposalRouter.get('/approved-proposal', authenticateJWT, approvedProposal);
riderProposalRouter.get('/rejected-proposal', authenticateJWT, rejectedProposal);