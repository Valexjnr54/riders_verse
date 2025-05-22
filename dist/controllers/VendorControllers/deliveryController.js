"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectDelivery = exports.acceptDelivery = exports.pickDelivery = exports.viewSingleDelivery = exports.viewAllDelivery = void 0;
const models_1 = require("../../models");
const sendSMS_1 = require("../../utils/sendSMS");
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function viewAllDelivery(request, response) {
    const vendor_id = request.user.vendorId;
    // Check if vendor_id is not present or undefined
    if (!vendor_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the vendor by vendor_id
        const check_vendor = await prisma.vendor.findUnique({ where: { id: vendor_id } });
        const role = check_vendor?.role;
        // Check if the role is not 'vendor'
        if (role !== 'Vendor') {
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
                vendor_id: true,
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
                vendor: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
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
    const vendor_id = request.user.vendorId;
    const id = parseInt(request.query.id, 10);
    // Check if vendor_id is not present or undefined
    if (!vendor_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the vendor by vendor_id
        const check_vendor = await prisma.vendor.findUnique({ where: { id: vendor_id } });
        const role = check_vendor?.role;
        // Check if the role is not 'vendor'
        if (role !== 'Vendor') {
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
                vendor_id: true,
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
                vendor: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
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
    const vendor_id = request.user.vendorId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    console.log(request.user);
    // Check if vendor_id is not present or undefined
    if (!vendor_id) {
        response.status(403).json({ message: 'Unauthorized User!' });
        return;
    }
    try {
        // Retrieve the user by user_id
        const check_vendor = await prisma.vendor.findUnique({ where: { id: vendor_id } });
        const role = check_vendor?.role;
        // Check if the role is not 'User'
        if (role !== 'Vendor') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const check_exist = await prisma.delivery.findUnique({
            where: {
                id: delivery_id,
            }
        });
        const vendorId = check_exist?.vendor_id;
        if (vendorId != vendor_id) {
            return response.status(404).json({ message: "Vendor not assigned this delivery" });
        }
        const updatePickup = await prisma.delivery.update({
            where: {
                id: delivery_id,
                vendor_id: vendor_id,
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
                vendor_id: true,
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
async function acceptDelivery(request, response) {
    const vendor_id = request.user.vendorId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    // Check if vendor_id is not present or undefined
    if (!vendor_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by vendor_id
        const check_user = await prisma.vendor.findUnique({ where: { id: vendor_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'Vendor') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const updateDeliveryRecord = await prisma.delivery.update({
            where: {
                id: delivery_id
            },
            data: {
                vendor_id: vendor_id
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                delivery_code: true,
                estimated_delivery_price: true,
                package_image: true,
                is_delivered: true,
                is_pickedup: true,
                status: true,
                vendor_id: true,
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
                vendor: {
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
        if (updateDeliveryRecord) {
            // const url = `${process.env.ROOT_URL}/vendor/order/${delivery_id}`
            (0, emailSender_1.sendApproval)(updateDeliveryRecord.user.email, updateDeliveryRecord);
            const message = `Dear ${updateDeliveryRecord.user.fullname}, a rider is on his way to pickup your package ${updateDeliveryRecord.package_name}. . Powered by RiderVerse.net`;
            // if(updateDeliveryRecord.user.device_token !== null)
            // {
            //   const delivery_id = updateDeliveryRecord.id
            //   sendDeliveryPushNotification(updateDeliveryRecord.user.device_token,"Delivery request accepted", message, delivery_id)
            // }else {
            //   console.error('Device token is null. Push notification cannot be sent.');
            // }
        }
        else {
            return response.status(400).json({ message: 'Request Failed' });
        }
        return response.status(200).json({ message: 'Delivery Request updated', data: updateDeliveryRecord });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.acceptDelivery = acceptDelivery;
async function rejectDelivery(request, response) {
    const vendor_id = request.user.vendorId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    // Check if vendor_id is not present or undefined
    if (!vendor_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by vendor_id
        const check_user = await prisma.vendor.findUnique({ where: { id: vendor_id } });
        const role = check_user?.role;
        // Check if the role is not 'vendor'
        if (role !== 'Vendor') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const vendors = await prisma.vendor.findMany({
            where: {
                id: {
                    not: vendor_id,
                },
            }
        });
        const delivery = await prisma.delivery.findUnique({
            where: {
                id: delivery_id
            }
        });
        if (!delivery) {
            response.status(404).json({ message: 'Delivery not found' });
            return;
        }
        let newvendor = vendors.length > 0 ? vendors[0] : null;
        if (!newvendor) {
            response.status(404).json({ message: 'No vendors available' });
            return;
        }
        const url = `${process.env.ROOT_URL}/vendor/order/${delivery.id}`;
        const message = `Dear ${newvendor.fullname}, there's a new order waiting for you on Riderverse. A user in ${delivery.pickup_location} needs your expertise to deliver ${delivery.package_name} to ${delivery.delivery_location}.

    Visit ${url} for more details

    Powered by RiderVerse.net
    `;
        (0, emailSender_1.sendDeliveryRequest)(newvendor.email, newvendor, delivery);
        (0, sendSMS_1.createDeliverySMS)(newvendor.phone_number, message);
        response.status(200).json({ message: 'Delivery reassigned successfully', data: newvendor });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.rejectDelivery = rejectDelivery;
