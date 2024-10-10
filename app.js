import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { scheduleCryptoJob } from './jobs/fetchCrypto.job.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());


scheduleCryptoJob();

app.get('/test', (req, res) => {
    res.send('Hello World!');
});


export default app;