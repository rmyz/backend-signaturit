import express from 'express';
import { calculateContracts } from '../handlers';

const router = new express.Router();

router.route('/contracts').post(calculateContracts);

export default router;
