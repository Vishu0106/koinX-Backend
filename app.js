import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { scheduleCryptoJob } from './jobs/fetchCrypto.job.js';
import cryptoRoutes from './routes/crypto.route.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());


scheduleCryptoJob();   // Schedule the job to run every 2 hours

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use('/',cryptoRoutes);  // Mount the routes


// Error handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});


export default app;