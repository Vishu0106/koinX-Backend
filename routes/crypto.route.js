import { Router } from 'express';
import { getStats, getDeviation } from '../controllers/crypto.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('This is the crypto API. Endpoints are /stats and /deviation');
});

router.get('/stats', getStats);

router.get('/deviation', getDeviation);


export default router;