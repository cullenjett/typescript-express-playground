import * as express from 'express';

import { User } from '../models/User';
let usersDb: User[] = [];

export const usersController = {
  all(req: express.Request, res: express.Response) {
    res.json(usersDb);
  },

  find(req: express.Request, res: express.Response) {
    const userId: number = parseInt(req.params.id, 10);
    const user: User | null = usersDb.find(u => u.id === userId);

    if (!user) {
      res.status(404);
    }

    res.json(user);
  },

  create(req: express.Request, res: express.Response) {
    const user: User = new User(req.body);
    usersDb.push(user);
    res.json(user);
  },

  update(req: express.Request, res: express.Response) {
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
};
