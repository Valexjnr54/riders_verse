// src/routes/userRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allUsers, deleteUser, singleUser } from '../../controllers/AdminControllers/userController';

export const adminUserRouter = express.Router();
adminUserRouter.get('/all-users', authenticateJWT, allUsers);
adminUserRouter.get('/single-user', authenticateJWT, singleUser);
adminUserRouter.delete('/delete-user', authenticateJWT, deleteUser);