import * as express from 'express';

import { usersController } from './controllers/usersController';

export const routes: express.Application = express();

routes.use('/users', usersController);
