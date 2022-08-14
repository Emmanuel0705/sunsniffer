import express, { Router } from 'express';

import VaccineController from '../controllers/vaccine.controller';
import catchAsync from '../../../utils/catchAsync';

const router: Router = express.Router();

const controller = new VaccineController();

router.get('/vaccine-summary', catchAsync(controller.getAllVaccineTrackers));

export default router;