"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const rateLimitMiddleware_1 = __importDefault(require("./middlewares/rateLimitMiddleware"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const userAuthRoutes_1 = require("./routes/Auths/userAuthRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const riderAuthRoutes_1 = require("./routes/Auths/riderAuthRoutes");
const adminAuthRoutes_1 = require("./routes/Auths/adminAuthRoutes");
const userDeliveryRoutes_1 = require("./routes/Users/userDeliveryRoutes");
const proposalRoutes_1 = require("./routes/Riders/proposalRoutes");
const userProposalRoutes_1 = require("./routes/Users/userProposalRoutes");
const deliverRoutes_1 = require("./routes/Riders/deliverRoutes");
const operatingRoute_1 = require("./routes/Admin/operatingRoute");
const route_1 = require("./routes/route");
const userProfileRoutes_1 = require("./routes/Users/userProfileRoutes");
const riderProfileRoutes_1 = require("./routes/Riders/riderProfileRoutes");
const vendorProfileRoutes_1 = require("./routes/Vendors/vendorProfileRoutes");
const vendorRiderRoutes_1 = require("./routes/Vendors/vendorRiderRoutes");
const userRatingRoute_1 = require("./routes/Users/userRatingRoute");
const activationRoute_1 = require("./routes/Admin/activationRoute");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const vendorAuthRoutes_1 = require("./routes/Auths/vendorAuthRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
app.use(rateLimitMiddleware_1.default);
app.use((0, cors_1.default)({ origin: config_1.Config.corsAllowedOrigin }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer);
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const route = "/api/v1";
// Configure your routes here
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
// Authentication Routes Starts
app.use(route + "/auth", userAuthRoutes_1.userAuthRouter);
app.use(route + "/auth", riderAuthRoutes_1.riderAuthRouter);
app.use(route + "/auth", vendorAuthRoutes_1.vendorAuthRouter);
app.use(route + "/auth", adminAuthRoutes_1.adminAuthRouter);
// Authentication Routes Ends
// User Routes Starts
app.use(route + "/user", userDeliveryRoutes_1.userDeliveryRouter);
app.use(route + "/user", userProfileRoutes_1.userProfileRouter);
app.use(route + "/user", userProposalRoutes_1.userProposalRouter);
app.use(route + "/user", userRatingRoute_1.userRatingRouter);
// User Routes Starts
// Rider Routes Starts
app.use(route + "/rider", proposalRoutes_1.riderProposalRouter);
app.use(route + "/rider", deliverRoutes_1.riderDeliveryRouter);
app.use(route + "/rider", riderProfileRoutes_1.riderProfileRouter);
// Rider Routes Starts
// Vendor Routes Starts
app.use(route + "/vendor", vendorRiderRoutes_1.vendorRiderRouter);
app.use(route + "/vendor", vendorProfileRoutes_1.vendorProfileRouter);
// Vendor Routes Starts
// Admin Routes Starts
app.use(route + "/admin", operatingRoute_1.adminOperatingRouter);
app.use(route + "/admin", activationRoute_1.adminActivateRouter);
// Admin Routes Starts
app.use(route, route_1.router);
app.use(express_1.default.urlencoded({ extended: true }));
exports.default = app;
