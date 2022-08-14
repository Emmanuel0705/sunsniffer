import express, { Router } from 'express';

import v1 from './v1/routes/index';

const router: Router = express.Router();

router.use('/v1', v1);

export default router;