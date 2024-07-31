"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinaryConfig_1 = __importDefault(require("../config/cloudinaryConfig"));
// Function to upload an image to a specific folder and get the URL
async function uploadImage(ImagePath, FolderPath) {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(ImagePath, {
            folder: FolderPath, // Replace with your desired folder name
        });
        const imageUrl = result.secure_url;
        // console.log("Image URL:", imageUrl);
        // Save imageUrl to your database here
        // You should use a database library or framework to save the URL to your database
        return imageUrl; // Return the URL if needed
    }
    catch (error) {
        console.error("Error uploading image:", error);
    }
}
exports.default = uploadImage;
