"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractReferenceFromRequest = exports.verifyPayment = exports.initializePayment = void 0;
// paystack.ts
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const config_1 = require("../config/config");
const PAYSTACK_SECRET_KEY = config_1.Config.paystackSecret;
const PAYSTACK_BASE_URL = config_1.Config.paystackBaseURL;
async function initializePayment(package_name, phone_number, user_id, pickup_location, delivery_location, delivery_code, price, imageUrl, landmark, callback_url, email, vendor_id) {
    try {
        const response = await axios_1.default.post(PAYSTACK_BASE_URL + '/initialize', {
            amount: price,
            email,
            callback_url,
            metadata: {
                package_name,
                email,
                phone_number,
                user_id,
                pickup_location,
                delivery_location,
                delivery_code,
                amount: price,
                imageUrl,
                landmark,
                vendor_id
            }
        }, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return response.data.data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
        // throw new Error(error.response.data.message);
    }
}
exports.initializePayment = initializePayment;
async function verifyPayment(reference) {
    try {
        const response = await axios_1.default.get(PAYSTACK_BASE_URL + `/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return response.data.data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.verifyPayment = verifyPayment;
function extractReferenceFromRequest(req) {
    const reference = req.query.reference;
    return reference;
}
exports.extractReferenceFromRequest = extractReferenceFromRequest;
