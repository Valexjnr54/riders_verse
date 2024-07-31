"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateRider = void 0;
const models_1 = require("../../models");
const sendSMS_1 = require("../../utils/sendSMS");
const prisma = new models_1.PrismaClient();
async function activateRider(request, response) {
    const rider_id = parseInt(request.params.rider_id, 10);
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const rider = await prisma.rider.update({
            where: {
                id: rider_id
            },
            data: {
                status: "Active",
                is_verified: true,
            },
            select: {
                id: true,
                fullname: true,
                email: true,
                username: true,
                phone_number: true,
                operating_areas: true,
                profile_image: true,
                avg_rating: true,
                role: true,
                status: true,
                is_verified: true
            }
        });
        const url = `${process.env.ROOT_URL}/login`;
        const message = `Dear ${rider.fullname}, this is to inform you tha you account with us has been activated, you can now receive delivery request. Click to login with your email and password ${url} Powered by RiderVerse.net`;
        (0, sendSMS_1.setupApprovedSMS)(rider.phone_number, message);
        return response.status(200).json({ message: 'Rider Has been Activated', data: rider });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.activateRider = activateRider;
