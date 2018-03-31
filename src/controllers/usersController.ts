import * as express from 'express';

import { User } from '../models/User';

export const usersController: express.Router = express.Router();
let usersDb: User[] = [];

usersController.get(
  '/',
  async (req: express.Request, res: express.Response) => {
    res.json(usersDb);
  }
);

usersController.post(
  '/',
  async (req: express.Request, res: express.Response) => {
    const user: User = new User(req.body);
    usersDb.push(user);
    res.json(user);
  }
);

usersController.get(
  '/:id',
  async (req: express.Request, res: express.Response) => {
    const userId: number = parseInt(req.params.id, 10);
    const user: User | null = usersDb.find(u => u.id === userId);

    if (!user) {
      res.status(404);
    }

    res.json(user);
  }
);

usersController.put(
  '/:id',
  async (req: express.Request, res: express.Response) => {
    const reqUser: User = req.body;
    const userId: number = parseInt(req.params.id, 10);
    const user: User | undefined = usersDb.find(u => u.id === userId);

    if (user === undefined) {
      res.status(404).send(`User ${userId} not found`);
    }

    const updatedUser: User = {
      ...user,
      ...reqUser
    };

    usersDb = usersDb.map(u => {
      if (u.id !== userId) {
        return u;
      }

      return updatedUser;
    });

    res.json(updatedUser);
  }
);
