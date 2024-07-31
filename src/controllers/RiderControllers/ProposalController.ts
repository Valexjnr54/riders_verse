import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";
import { sendProposal } from '../../utils/emailSender';
import { sendProposalSMS } from '../../utils/sendSMS';

const prisma = new PrismaClient();

export async function createProposal(request:Request, response:Response) {
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
            body('delivery_id').notEmpty().withMessage('Delivery Id is required'),
        ];
    
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
    
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(400).json({ errors: errors.array() });
            return;
        }

        const check_exist = await prisma.proposal.findFirst({
            where:{
                delivery_id,
                rider_id
            }
        });
        if(check_exist){
            return response.status(400).json({message: "Proposal Already Exist"})
        }

        const newProposal = await prisma.proposal.create({
            data:{
                delivery_id,
                rider_id
            },
            select:{
                deliver:{
                    select:{
                        id:true,
                        package_name: true,
                        phone_number: true,
                        pickup_location: true,
                        delivery_location: true,
                        estimated_delivery_price: true,
                        package_image: true,
                        is_delivered:true,
                        is_pickedup:true,
                        status:true,
                        sent_proposal_rider_id:true,
                        rider_id:true,
                        user:{
                            select: {
                              id:true,
                              fullname:true,
                              username:true,
                              email:true,
                              phone_number:true,
                              profile_image:true,
                            }
                        }
                    }
                },
                rider:{
                    select:{
                        id:true,
                        fullname:true,
                        username:true,
                        email:true,
                        phone_number:true,
                        profile_image:true,
                        avg_rating:true,
                    }
                }
            }
        })

        const rider = await prisma.rider.findUnique({
            where:{
                id:rider_id
            }
        })
        const rider_name = rider?.fullname
        const url = `${process.env.ROOT_URL}/user/order-details/${newProposal.deliver.id}`

        const message = `Dear ${newProposal.deliver.user.fullname}, a delivery proposal has been sent to you regarding your delivery by a rider named ${rider_name}, Login to view more details ${url}. Powered By RiderVerse.net
        `
        sendProposal(newProposal.deliver.user.email, newProposal)
        sendProposalSMS(newProposal.deliver.user.phone_number,message)
        // Fetch the existing proposal_sent array
        const existingDelivery = await prisma.delivery.findUnique({
            where: { id: delivery_id },
            select: { sent_proposal_rider_id: true },
        });

        // Extract the existing rider IDs or initialize an empty array
        const existingRiderIds: number[] = (existingDelivery?.sent_proposal_rider_id as number[]) || [];

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
            where:{
                rider_id,
                delivery_id
            },
            select:{
                deliver:{
                    select:{
                        id:true,
                        package_name: true,
                        phone_number: true,
                        pickup_location: true,
                        delivery_location: true,
                        estimated_delivery_price: true,
                        package_image: true,
                        sent_proposal_rider_id:true,
                        is_delivered:true,
                        is_pickedup:true,
                        status:true,
                        rider_id:true,
                        user:{
                            select: {
                              id:true,
                              fullname:true,
                              username:true,
                              email:true,
                              phone_number:true,
                              profile_image:true,
                            }
                        }
                    }
                },
                rider:{
                    select:{
                        id:true,
                        fullname:true,
                        username:true,
                        email:true,
                        phone_number:true,
                        profile_image:true,
                        avg_rating:true,
                    }
                }
            }
        })
        return response.status(200).json({ message: 'Proposal Request created', data:  proposalDetail });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Internal Server Error' });
      return;
    }
}

export async function deleteProposal(request:Request, response:Response) {
    const id= parseInt(request.query.id as string, 10);
    const delivery_id = parseInt(request.query.delivery_id as string, 10);
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
            where:{
                id,
                delivery_id,
                rider_id
            },
        })
        response.status(204).json({ message: 'Proposal Request delete', data: deleteProposal });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: error });
    }
}

export async function pendingProposal(request:Request, response:Response) {
    const id= parseInt(request.query.id as string, 10);
    const delivery_id = parseInt(request.query.delivery_id as string, 10);
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
            where:{
                rider_id,
                status: 'Pending'
            },
            select:{
                deliver:{
                    select:{
                        id:true,
                        package_name: true,
                        phone_number: true,
                        pickup_location: true,
                        delivery_location: true,
                        estimated_delivery_price: true,
                        package_image: true,
                        is_delivered:true,
                        is_pickedup:true,
                        status:true,
                        sent_proposal_rider_id:true,
                        rider_id:true,
                        user:{
                            select: {
                              id:true,
                              fullname:true,
                              username:true,
                              email:true,
                              phone_number:true,
                              profile_image:true,
                            }
                        }
                    }
                },
                rider:{
                    select:{
                        id:true,
                        fullname:true,
                        username:true,
                        email:true,
                        phone_number:true,
                        profile_image:true,
                        avg_rating:true,
                    }
                }
            }
        })
        if (pendingProposal.length <= 0) {
            return response.status(404).json({ message: 'No Record Found'})
        }
        response.status(200).json({ message: 'Pending Proposals', data: pendingProposal });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: error });
    }
}

export async function approvedProposal(request:Request, response:Response) {
    const id= parseInt(request.query.id as string, 10);
    const delivery_id = parseInt(request.query.delivery_id as string, 10);
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
            where:{
                rider_id,
                status: 'Approved'
            },
            select:{
                deliver:{
                    select:{
                        id:true,
                        package_name: true,
                        phone_number: true,
                        pickup_location: true,
                        delivery_location: true,
                        estimated_delivery_price: true,
                        package_image: true,
                        is_delivered:true,
                        is_pickedup:true,
                        status:true,
                        sent_proposal_rider_id:true,
                        rider_id:true,
                        user:{
                            select: {
                              id:true,
                              fullname:true,
                              username:true,
                              email:true,
                              phone_number:true,
                              profile_image:true,
                            }
                        }
                    }
                },
                rider:{
                    select:{
                        id:true,
                        fullname:true,
                        username:true,
                        email:true,
                        phone_number:true,
                        profile_image:true,
                        avg_rating:true,
                    }
                }
            }
        })
        if (approvedProposal.length <= 0) {
            return response.status(404).json({ message: 'No Record Found'})
        }
        response.status(200).json({ message: 'Approved Proposals', data: approvedProposal });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: error });
    }
}

export async function rejectedProposal(request:Request, response:Response) {
    const id= parseInt(request.query.id as string, 10);
    const delivery_id = parseInt(request.query.delivery_id as string, 10);
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
            where:{
                rider_id,
                status: 'Rejected'
            },
            select:{
                deliver:{
                    select:{
                        id:true,
                        package_name: true,
                        phone_number: true,
                        pickup_location: true,
                        delivery_location: true,
                        estimated_delivery_price: true,
                        package_image: true,
                        is_delivered:true,
                        is_pickedup:true,
                        status:true,
                        rider_id:true,
                        sent_proposal_rider_id:true,
                        user:{
                            select: {
                              id:true,
                              fullname:true,
                              username:true,
                              email:true,
                              phone_number:true,
                              profile_image:true,
                            }
                        }
                    }
                },
                rider:{
                    select:{
                      fullname:true,
                      username:true,
                      email:true,
                      phone_number:true,
                      profile_image:true,
                      avg_rating:true,
                    }
                }
            }
        })
        if (rejectedProposal.length <= 0) {
            return response.status(404).json({ message: 'No Record Found'})
        }
        response.status(200).json({ message: 'Rejected Proposals', data: rejectedProposal });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: error });
    }
}