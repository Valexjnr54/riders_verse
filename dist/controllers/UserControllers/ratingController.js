"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRider = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function rateRider(request, res) {
    const { rider_id, star, review } = request.body;
    const user_id = request.user.userId;
    try {
        const validationRules = [
            (0, express_validator_1.body)('rider_id').notEmpty().withMessage('Rider ID is required'),
            (0, express_validator_1.body)('star').notEmpty().withMessage('Number of rating star is required'),
            (0, express_validator_1.body)('review').notEmpty().withMessage('Review comment is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingUser = await prisma.user.findUnique({ where: { id: user_id } });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not Found' });
        }
        const hasRated = await prisma.rider_rating.findFirst({
            where: {
                user_id,
                rider_id
            }
        });
        if (hasRated) {
            return res.status(400).json({ message: 'User have rated this rider' });
        }
        // Create a new user in the database
        const newRating = await prisma.rider_rating.create({
            data: {
                rider_id,
                user_id,
                rating: star,
                review
            },
            select: {
                id: true,
                rider_id: true,
                user_id: true,
                rating: true,
                review: true
            }
        });
        const aggregations = await prisma.rider_rating.aggregate({
            _avg: {
                rating: true,
            },
            where: {
                rider_id
            }
        });
        const updateRider = await prisma.rider.update({
            where: {
                id: rider_id
            },
            data: {
                avg_rating: aggregations._avg.rating ?? 0
            }
        });
        return res.status(201).json({ newRating });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.rateRider = rateRider;
