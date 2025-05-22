"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProposalRouter = void 0;
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const userProposalController_1 = require("../../controllers/UserControllers/userProposalController");
exports.userProposalRouter = express_1.default.Router();
// userRouter.put('/profile', authenticateJWT, updateUserProfile);
exports.userProposalRouter.get('/view-all-proposal', authenticationMiddleware_1.authenticateJWT, userProposalController_1.viewAllProposal);
exports.userProposalRouter.put('/accept-proposal', authenticationMiddleware_1.authenticateJWT, userProposalController_1.acceptRider);
// export default userRouter;
