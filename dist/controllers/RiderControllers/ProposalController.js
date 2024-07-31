"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectedProposal = exports.approvedProposal = exports.pendingProposal = exports.deleteProposal = exports.createProposal = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const emailSender_1 = require("../../utils/emailSender");
const sendSMS_1 = require("../../utils/sendSMS");
const prisma = new models_1.PrismaClient();
async function createProposal(request, response) {
    const { delivery_id } = request.body;
    const rider_id = request.user.riderId;
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
        // Validation rules
        const validationRules = [
            (0, express_validator_1.body)('delivery_id').notEmpty().withMessage('Delivery Id is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            response.status(400).json({ errors: errors.array() });
            return;
        }
        const check_exist = await prisma.proposal.findFirst({
            where: {
                delivery_id,
                rider_id
            }
        });
        if (check_exist) {
            return response.status(400).json({ message: "Proposal Already Exist" });
        }
        const newProposal = await prisma.proposal.create({
            data: {
                delivery_id,
                rider_id
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
            }
        });
        const rider = await prisma.rider.findUnique({
            where: {
                id: rider_id
            }
        });
        const rider_name = rider?.fullname;
        const url = `${process.env.ROOT_URL}/user/order-details/${newProposal.deliver.id}`;
        const message = `Dear ${newProposal.deliver.user.fullname}, a delivery proposal has been sent to you regarding your delivery by a rider named ${rider_name}, Login to view more details ${url}. Powered By RiderVerse.net
        `;
        (0, emailSender_1.sendProposal)(newProposal.deliver.user.email, newProposal);
        (0, sendSMS_1.sendProposalSMS)(newProposal.deliver.user.phone_number, message);
        // Fetch the existing proposal_sent array
        const existingDelivery = await prisma.delivery.findUnique({
            where: { id: delivery_id },
            select: { sent_proposal_rider_id: true },
        });
        // Extract the existing rider IDs or initialize an empty array
        const existingRiderIds = existingDelivery?.sent_proposal_rider_id || [];
        // Add the new rider ID to the array
        const updatedRiderIds = [...existingRiderIds, rider_id];
        // Update the delivery with the updated proposal_sent array
        const updatedDelivery = await prisma.delivery.update({
            where: { id: delivery_id },
            data: {
                sent_proposal_rider_id: updatedRiderIds,
            },
        });
        const proposalDetail = await prisma.proposal.findFirst({
            where: {
                rider_id,
                delivery_id
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
                        sent_proposal_rider_id: true,
                        is_delivered: true,
                        is_pickedup: true,
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
            }
        });
        return response.status(200).json({ message: 'Proposal Request created', data: proposalDetail });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}
exports.createProposal = createProposal;
async function deleteProposal(request, response) {
    const id = parseInt(request.query.id, 10);
    const delivery_id = parseInt(request.query.delivery_id, 10);
    const rider_id = request.user.riderId;
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
        }
        const deleteProposal = await prisma.proposal.delete({
            where: {
                id,
                delivery_id,
                rider_id
            },
        });
        response.status(204).json({ message: 'Proposal Request delete', data: deleteProposal });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: error });
    }
}
exports.deleteProposal = deleteProposal;
async function pendingProposal(request, response) {
    const id = parseInt(request.query.id, 10);
    const delivery_id = parseInt(request.query.delivery_id, 10);
    const rider_id = request.user.riderId;
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
        }
        const pendingProposal = await prisma.proposal.findMany({
            where: {
                rider_id,
                status: 'Pending'
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
            }
        });
        if (pendingProposal.length <= 0) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        response.status(200).json({ message: 'Pending Proposals', data: pendingProposal });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: error });
    }
}
exports.pendingProposal = pendingProposal;
async function approvedProposal(request, response) {
    const id = parseInt(request.query.id, 10);
    const delivery_id = parseInt(request.query.delivery_id, 10);
    const rider_id = request.user.riderId;
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
        }
        const approvedProposal = await prisma.proposal.findMany({
            where: {
                rider_id,
                status: 'Approved'
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
            }
        });
        if (approvedProposal.length <= 0) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        response.status(200).json({ message: 'Approved Proposals', data: approvedProposal });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: error });
    }
}
exports.approvedProposal = approvedProposal;
async function rejectedProposal(request, response) {
    const id = parseInt(request.query.id, 10);
    const delivery_id = parseInt(request.query.delivery_id, 10);
    const rider_id = request.user.riderId;
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
        }
        const rejectedProposal = await prisma.proposal.findMany({
            where: {
                rider_id,
                status: 'Rejected'
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
                        rider_id: true,
                        sent_proposal_rider_id: true,
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
        if (rejectedProposal.length <= 0) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        response.status(200).json({ message: 'Rejected Proposals', data: rejectedProposal });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: error });
    }
}
exports.rejectedProposal = rejectedProposal;
