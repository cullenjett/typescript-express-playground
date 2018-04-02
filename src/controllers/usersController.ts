import { User } from '../models/User';
import { userService } from '../services/userService';

export const usersController = {
  async index(req, res) {
    const users: User[] = await userService.all();

    res.json(users);
  },

  async show(req, res) {
    const id: string = req.params.id;
    const user: User = await userService.find(id);

    res.json(user);
  },

  async create(req, res) {
    const user: User = await userService.save(req.body);

    res.status(201).json(user);
  },

  async update(req, res) {
    const data = req.body;
    const userId: string = req.params.id;
    const updatedUser: User = await userService.update(userId, data);

    res.json(updatedUser);
  }
};
