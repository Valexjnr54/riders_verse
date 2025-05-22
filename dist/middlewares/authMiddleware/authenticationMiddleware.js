"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config/config");
function authenticateJWT(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token missing' });
    }
    jsonwebtoken_1.default.verify(token.replace('Bearer ', ''), config_1.Config.secret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
        req.user = user;
        next();
    });
}
exports.authenticateJWT = authenticateJWT;
// export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });
//   jwt.verify(token, Config.secret, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Forbidden' });
//     req.user = user;
//     next();
//   });
// }
