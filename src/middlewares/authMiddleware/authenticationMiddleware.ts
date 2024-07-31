// src/middlewares/authenticationMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Config } from '../../config/config';

// Define a custom type for the Request object that includes the 'user' property
declare global {
    namespace Express {
      interface Request {
        user: any; // Replace 'any' with the actual user data type
      }
    }
  }

  export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Token missing' });
    }
  
    jwt.verify(token.replace('Bearer ', ''), Config.secret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }
  
      req.user = user;
      next();
    });
  }

// export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
//   const token = req.header('Authorization');

//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   jwt.verify(token, Config.secret, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Forbidden' });

//     req.user = user;
//     next();
//   });
// }
