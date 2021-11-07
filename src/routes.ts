import {Router} from 'express';
import { userController } from './controller/userController';

export const routes = Router()

routes.get('/users', new userController().handle)
