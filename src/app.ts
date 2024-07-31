// src/app.ts
import express, { Request, Response } from 'express';
import { PrismaClient } from './models';
import rateLimiter from './middlewares/rateLimitMiddleware';
import cors from 'cors';
import { Config } from './config/config';
import { userAuthRouter } from './routes/Auths/userAuthRoutes';
import bodyParser from 'body-parser';
import { riderAuthRouter } from './routes/Auths/riderAuthRoutes';
import { adminAuthRouter } from './routes/Auths/adminAuthRoutes';
import { userDeliveryRouter } from './routes/Users/userDeliveryRoutes';
import { riderProposalRouter } from './routes/Riders/proposalRoutes';
import { userProposalRouter } from './routes/Users/userProposalRoutes';
import { riderDeliveryRouter } from './routes/Riders/deliverRoutes';
import { adminOperatingRouter } from './routes/Admin/operatingRoute';
import { router } from './routes/route';
import { userProfileRouter } from './routes/Users/userProfileRoutes';
import { riderProfileRouter } from './routes/Riders/riderProfileRoutes';
import { vendorProfileRouter } from './routes/Vendors/vendorProfileRoutes';
import { vendorRiderRouter } from './routes/Vendors/vendorRiderRoutes';
import { userRatingRouter } from './routes/Users/userRatingRoute';
import { adminActivateRouter } from './routes/Admin/activationRoute';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { vendorAuthRouter } from './routes/Auths/vendorAuthRoutes';


const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(rateLimiter);
app.use(cors({ origin: Config.corsAllowedOrigin }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const httpServer = createServer(app);
const io = new SocketIOServer(httpServer);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


const route = "/api/v1"

// Configure your routes here

app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
  })

// Authentication Routes Starts
app.use(route+"/auth",userAuthRouter)
app.use(route+"/auth",riderAuthRouter)
app.use(route+"/auth",vendorAuthRouter)
app.use(route+"/auth",adminAuthRouter)
// Authentication Routes Ends

// User Routes Starts
app.use(route+"/user",userDeliveryRouter)
app.use(route+"/user",userProfileRouter)
app.use(route+"/user",userProposalRouter)
app.use(route+"/user",userRatingRouter)
// User Routes Starts

// Rider Routes Starts
app.use(route+"/rider",riderProposalRouter)
app.use(route+"/rider",riderDeliveryRouter)
app.use(route+"/rider",riderProfileRouter)
// Rider Routes Starts

// Vendor Routes Starts
app.use(route+"/vendor",vendorRiderRouter)
app.use(route+"/vendor",vendorProfileRouter)
// Vendor Routes Starts

// Admin Routes Starts
app.use(route+"/admin",adminOperatingRouter)
app.use(route+"/admin",adminActivateRouter)
// Admin Routes Starts

app.use(route, router)
app.use(express.urlencoded({ extended: true }));

export default app;
