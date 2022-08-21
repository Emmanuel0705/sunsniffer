import express, { Router } from "express";

import VaccineController from "../controllers/vaccine.controller";
import catchAsync from "../../../utils/catchAsync";
import ValidateRequstParams from "../../../middlewares/requestValidator";

const router: Router = express.Router();

const controller = new VaccineController();

router.get(
    "/vaccine-summary",
    ValidateRequstParams,
    catchAsync(controller.getAllVaccineTrackers)
);

export default router;
