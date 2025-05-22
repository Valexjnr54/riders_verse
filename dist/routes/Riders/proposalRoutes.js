"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.riderProposalRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const ProposalController_1 = require("../../controllers/RiderControllers/ProposalController");
exports.riderProposalRouter = express_1.default.Router();
exports.riderProposalRouter.post('/send-proposal', authenticationMiddleware_1.authenticateJWT, ProposalController_1.createProposal);
exports.riderProposalRouter.delete('/cancel-proposal', authenticationMiddleware_1.authenticateJWT, ProposalController_1.deleteProposal);
exports.riderProposalRouter.get('/pending-proposal', authenticationMiddleware_1.authenticateJWT, ProposalController_1.pendingProposal);
exports.riderProposalRouter.get('/approved-proposal', authenticationMiddleware_1.authenticateJWT, ProposalController_1.approvedProposal);
exports.riderProposalRouter.get('/rejected-proposal', authenticationMiddleware_1.authenticateJWT, ProposalController_1.rejectedProposal);
