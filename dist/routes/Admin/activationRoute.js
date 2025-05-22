"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminActivateRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../middlewares/authMiddleware/authenticationMiddleware");
const activateController_1 = require("../../controllers/AdminControllers/activateController");
exports.adminActivateRouter = express_1.default.Router();
exports.adminActivateRouter.get('/activate-rider', authenticationMiddleware_1.authenticateJWT, activateController_1.activateRider);
// export default authRouter;
