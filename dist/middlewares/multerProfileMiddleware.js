"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.riderCredentials = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads/'); // Set the destination folder for uploads
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname); // Set the filename
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });
exports.riderCredentials = exports.upload.fields([
    { name: 'nin_image', maxCount: 1 },
    { name: 'driver_license_image', maxCount: 1 },
    { name: 'vehicle_image', maxCount: 1 },
]);
//   module.exports = upload;
