import * as express from 'express';

import { User } from '../models/User';
import { userService } from '../services/userService';

export const usersController = {
  index(req, res) {
    res.json(userService.all());
  },

  show(req, res) {
    const userId: number = parseInt(req.params.id, 10);
    const user: User = userService.find(userId);

    res.json(user);
  },

  create(req, res) {
    const user: User = userService.save(req.body);

    res.json(user);
  },

  update(req, res) {
    const data = req.body;
    const userId: number = parseInt(req.params.id, 10);
    const updatedUser: User = userService.update(userId, data);

    res.json(updatedUser);
  }
};
