import { Router } from 'express';
import register from '../modules/register/register.routes';

const router = Router();

router.use('/', register)

export default router;
