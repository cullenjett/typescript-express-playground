import * as express from 'express';

import { userRoutes } from './userRoutes';

export const routes: express.Router = express.Router();

routes.use('/users', userRoutes);
