"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOperatingArea = exports.singleOperatingArea = exports.allOperatingAreas = exports.updateOperatingArea = exports.createOperatingArea = void 0;
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
async function updateOperatingArea(request, response) {
    const { operating_area } = request.body;
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.operating_area_id, 10);
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
        const updateOperatingArea = await prisma.operating_areas.update({
            where: {
                id
            },
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
        if (!updateOperatingArea) {
            return response.status(403).json({ message: 'Unable to update Operating Area' });
        }
        return response.status(200).json({ message: 'Operation Area updated', data: updateOperatingArea });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateOperatingArea = updateOperatingArea;
async function allOperatingAreas(request, response) {
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
        const allOperatingArea = await prisma.operating_areas.findMany({
            select: {
                id: true,
                name: true,
                status: true,
                createdAt: true,
                updatedAt: true
            },
        });
        if (allOperatingArea.length <= 0) {
            return response.status(404).json({ message: 'No Operating Area(s) Found' });
        }
        return response.status(200).json({ message: 'Operation Area(s) fetched', data: allOperatingArea });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.allOperatingAreas = allOperatingAreas;
async function singleOperatingArea(request, response) {
    const id = parseInt(request.query.operating_area_id, 10);
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
        const singleOperatingArea = await prisma.operating_areas.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                status: true,
                createdAt: true,
                updatedAt: true
            },
        });
        if (!singleOperatingArea) {
            return response.status(404).json({ message: 'No Operating Area Found' });
        }
        return response.status(200).json({ message: 'Operation Area fetched', data: singleOperatingArea });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.singleOperatingArea = singleOperatingArea;
async function deleteOperatingArea(request, response) {
    const id = parseInt(request.query.operating_area_id, 10);
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
        // Create a new delivery entry in the database
        const deleteOperatingArea = await prisma.operating_areas.delete({
            where: {
                id
            },
        });
        if (!deleteOperatingArea) {
            return response.status(403).json({ message: 'Unable to delete Operaing area' });
        }
        return response.status(204).json({ message: 'Operating Area was deleted successfully' });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.deleteOperatingArea = deleteOperatingArea;
