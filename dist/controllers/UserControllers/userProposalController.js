"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptRider = exports.viewAllProposal = void 0;
const models_1 = require("../../models");
const emailSender_1 = require("../../utils/emailSender");
const sendSMS_1 = require("../../utils/sendSMS");
const prisma = new models_1.PrismaClient();
async function viewAllProposal(request, response) {
    const user_id = request.user.userId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    // Check if user_id is not present or undefined
    if (!user_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const allProposal = await prisma.proposal.findMany({
            where: {
                delivery_id: delivery_id
            },
            select: {
                deliver: {
                    select: {
                        id: true,
                        package_name: true,
                        phone_number: true,
                        pickup_location: true,
                        delivery_location: true,
                        estimated_delivery_price: true,
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
                        }
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
        if (allProposal.length <= 0) {
            response.status(404).json({ message: "No Record out Found" });
            return;
        }
        response.status(200).json({ data: allProposal });
        return;
    }
    catch (error) {
        response.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}
exports.viewAllProposal = viewAllProposal;
async function acceptRider(request, response) {
    const user_id = request.user.userId;
    const rider_id = parseInt(request.query.rider_id, 10);
    const delivery_id = parseInt(request.query.delivery_id, 10);
    // Check if user_id is not present or undefined
    if (!user_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const updateDeliveryRecord = await prisma.delivery.update({
            where: {
                id: delivery_id
            },
            data: {
                rider_id: rider_id
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_delivered: true,
                is_pickedup: true,
                sent_proposal_rider_id: true,
                status: true,
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
            }
        });
        if (updateDeliveryRecord) {
            const updateApprovedRider = await prisma.proposal.updateMany({
                where: {
                    // id: proposal_id,
                    delivery_id: delivery_id,
                    rider_id: rider_id,
                },
                data: {
                    status: 'Approved'
                }
            });
            if (updateDeliveryRecord.rider?.email) {
                (0, emailSender_1.sendApproval)(updateDeliveryRecord.rider.email, updateDeliveryRecord);
            }
            else {
                console.log("E-mail Undefined");
            }
            if (updateApprovedRider) {
                const updateUnapprovedRiders = await prisma.proposal.updateMany({
                    where: {
                        delivery_id: delivery_id,
                        rider_id: {
                            not: rider_id
                        }
                    },
                    data: {
                        status: 'Rejected'
                    }
                });
                const unApprovedRiders = await prisma.proposal.findMany({
                    where: {
                        delivery_id: delivery_id,
                        rider_id: {
                            not: rider_id
                        }
                    },
                    select: {
                        id: true,
                        rider_id: true,
                        delivery_id: true,
                        deliver: {
                            select: {
                                id: true,
                                package_name: true,
                                phone_number: true,
                                pickup_location: true,
                                delivery_location: true,
                                estimated_delivery_price: true,
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
                            },
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
                    }
                });
                unApprovedRiders.forEach(unApprovedRider => {
                    (0, emailSender_1.sendReject)(unApprovedRider.rider.email, updateDeliveryRecord);
                });
                if (!updateUnapprovedRiders) {
                    return response.status(400).json({ message: 'Request Failed' });
                }
            }
            else {
                return response.status(400).json({ message: 'Request Failed' });
            }
        }
        else {
            return response.status(400).json({ message: 'Request Failed' });
        }
        const rider = await prisma.rider.findUnique({
            where: {
                id: rider_id
            }
        });
        const rider_name = rider?.fullname;
        const rider_phone = rider?.phone_number;
        const url = `${process.env.ROOT_URL}/rider/order/${delivery_id}`;
        const message = `Dear ${rider_name}, You have been choosen to delivery this package ${updateDeliveryRecord.package_name}. for more details click ${url}. Powered by RiderVerse.net`;
        if (updateDeliveryRecord.rider?.phone_number) {
            (0, sendSMS_1.acceptProposalSMS)(updateDeliveryRecord.rider.phone_number, message);
        }
        else {
            console.log("SMS Undefined");
        }
        return response.status(200).json({ message: 'Delivery Request updated', data: updateDeliveryRecord });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.acceptRider = acceptRider;
