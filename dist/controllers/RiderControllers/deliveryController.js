"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickDelivery = exports.viewSingleDelivery = exports.viewAllDelivery = void 0;
const models_1 = require("../../models");
const sendSMS_1 = require("../../utils/sendSMS");
const prisma = new models_1.PrismaClient();
async function viewAllDelivery(request, response) {
    const rider_id = request.user.riderId;
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the rider by rider_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'rider'
        if (role !== 'Rider') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allDelivery = await prisma.delivery.findMany({
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status: true,
                sent_proposal_rider_id: true,
                rider_id: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                        avg_rating: true,
                        bank_details: true,
                    }
                }
            },
        });
        if (allDelivery.length <= 0) {
            return response.status(404).json({ message: 'No Delivery Found' });
        }
        return response.status(200).json({ data: allDelivery });
    }
    catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.viewAllDelivery = viewAllDelivery;
async function viewSingleDelivery(request, response) {
    const rider_id = request.user.riderId;
    const id = parseInt(request.query.id, 10);
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the rider by rider_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'rider'
        if (role !== 'Rider') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleDelivery = await prisma.delivery.findUnique({
            where: {
                id: id,
            }, select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status: true,
                sent_proposal_rider_id: true,
                rider_id: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                        avg_rating: true,
                        bank_details: true,
                    }
                }
            },
        });
        if (!singleDelivery) {
            return response.status(404).json({ message: 'No Delivery Found' });
        }
        return response.status(200).json({ data: singleDelivery });
    }
    catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.viewSingleDelivery = viewSingleDelivery;
async function pickDelivery(request, response) {
    const rider_id = request.user.riderId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by user_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const check_exist = await prisma.delivery.findUnique({
            where: {
                id: delivery_id,
            }
        });
        const riderId = check_exist?.rider_id;
        if (riderId != rider_id) {
            return response.status(404).json({ message: "Rider not assigned this delivery" });
        }
        const updatePickup = await prisma.delivery.update({
            where: {
                id: delivery_id,
                rider_id: rider_id,
            },
            data: {
                is_pickedup: true,
                status: 'Pending'
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status: true,
                sent_proposal_rider_id: true,
                rider_id: true,
                delivery_code: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                }
            }
        });
        const url = `${process.env.ROOT_URL}/confirm-delivery`;
        const message = `Dear User, a delivery Package is on its way to you now, please use this delivery code ${updatePickup.delivery_code} to confirm your delivery. When the Package gets to you, click on the link ${url} and input the delivery code to confirm delivery. 
        Powered by RidersVerse.net`;
        (0, sendSMS_1.sendDeliveryCodeSMS)(updatePickup.phone_number, message);
        return response.status(200).json({ message: "Package Picked", data: updatePickup });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.pickDelivery = pickDelivery;
