import * as express from 'express';

import { usersController } from '../controllers/usersController';

export const userRoutes: express.Router = express.Router();

userRoutes.get('/', usersController.all);
userRoutes.post('/', usersController.create);
userRoutes.get('/:id', usersController.find);
userRoutes.put('/:id', usersController.update);
