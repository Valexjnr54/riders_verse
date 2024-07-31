"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOperatingArea = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function createOperatingArea(request, response) {
    const { operating_area } = request.body;
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
        // Validation rules
        const validationRules = [
            (0, express_validator_1.body)('operating_area').notEmpty().withMessage('Operating Area is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const addOperatingArea = await prisma.operating_areas.create({
            data: {
                name: operating_area,
            },
            select: {
                id: true,
                name: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return response.status(200).json({ message: 'Operating Area created', data: addOperatingArea });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.createOperatingArea = createOperatingArea;
