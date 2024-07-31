"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApprovedSMS = exports.completeSetupSMS = exports.sendDeliveryCodeSMS = exports.acceptProposalSMS = exports.sendProposalSMS = exports.createDeliverySMS = exports.sendWelcomeSMS = void 0;
const axios_1 = __importDefault(require("axios"));
const termiiApiKey = process.env.TERMII_API_KEY || 'TLQvkk7mJcru5ajmXjD6BuEwrBPead7GNyltdUz9RZHpOEC9zfxlwbA6BqHjpn';
const termiiEndpoint = process.env.TERMII_ENDPOINT || 'https://api.ng.termii.com/api/sms/send';
async function sendWelcomeSMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "Dverse",
            type: "plain",
            channel: "generic"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.sendWelcomeSMS = sendWelcomeSMS;
async function createDeliverySMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "Dverse",
            type: "plain",
            channel: "generic"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.createDeliverySMS = createDeliverySMS;
async function sendProposalSMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "Dverse",
            type: "plain",
            channel: "generic"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.sendProposalSMS = sendProposalSMS;
async function acceptProposalSMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "Dverse",
            type: "plain",
            channel: "generic"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.acceptProposalSMS = acceptProposalSMS;
async function sendDeliveryCodeSMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "N-Alert",
            type: "plain",
            channel: "dnd"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.sendDeliveryCodeSMS = sendDeliveryCodeSMS;
async function completeSetupSMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "Dverse",
            type: "plain",
            channel: "generic"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.completeSetupSMS = completeSetupSMS;
async function setupApprovedSMS(phoneNumber, message) {
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: phoneNumber,
            sms: message,
            from: "Dverse",
            type: "plain",
            channel: "generic"
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error sending SMS:', error.response?.data || error.message);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
exports.setupApprovedSMS = setupApprovedSMS;
