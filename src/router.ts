import {Router} from 'express';
import { sendEmailController } from './controller/sendEmailControlller';
import { userController } from './controller/userController';

export const router = Router()

router.get('/users', new userController().handle)
router.get('/email', new sendEmailController().handle)
