"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmDelivery = exports.deliveryCode = exports.allOperatingArea = void 0;
const models_1 = require("../models");
const prisma = new models_1.PrismaClient();
async function allOperatingArea(request, response) {
    try {
        const allOperatingArea = await prisma.operating_areas.findMany({
            select: {
                id: true,
                name: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (allOperatingArea.length <= 0) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        return response.status(200).json({ message: 'All Operating Areas', data: allOperatingArea });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.allOperatingArea = allOperatingArea;
async function deliveryCode(request, response) {
    const delivery_code = parseInt(request.query.delivery_code, 10);
    try {
        const delivery = await prisma.delivery.findUnique({
            where: {
                delivery_code
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                delivery_code: true,
                landmark: true,
                package_image: true,
                is_delivered: true,
                is_pickedup: true,
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
                        bank_details: true
                    }
                }
            },
        });
        if (!delivery) {
            return response.status(404).json({ message: 'Delivery Does not Exist' });
        }
        return response.status(200).json({ message: 'Delivery Details', data: delivery });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.deliveryCode = deliveryCode;
async function confirmDelivery(request, response) {
    const delivery_code = parseInt(request.query.delivery_code, 10);
    try {
        const delivery = await prisma.delivery.update({
            data: {
                is_delivered: true,
                status: 'Delivered'
            },
            where: {
                delivery_code
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                delivery_code: true,
                landmark: true,
                package_image: true,
                is_delivered: true,
                is_pickedup: true,
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
        if (!delivery) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        return response.status(200).json({ message: 'Delivery Details', data: delivery });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.confirmDelivery = confirmDelivery;
