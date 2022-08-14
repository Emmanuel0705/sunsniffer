import express, { Router } from 'express';

import vaccineRoute from './vaccine.route';

const router: Router = express.Router();

router.use('/vaccines', vaccineRoute);

export default router;