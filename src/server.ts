/** source/server.ts */
import * as dotenv from "dotenv";
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

import intructionRoutes from './routes/instructions.routes';
import userRoutes from './routes/user.routes';

import { errorHandler } from "./middlewares/error.middleware";

const router: Express = express();
dotenv.config();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** Routes */
router.use('/', intructionRoutes);
router.use('/user', userRoutes);

router.use(errorHandler);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

if (!process.env.PORT) {
    process.exit(1);
 }
 
/** Server */
const httpServer = http.createServer(router);
const PORT: number = parseInt(process.env.PORT as string, 10);

httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));