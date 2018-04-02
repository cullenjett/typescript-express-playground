import { db } from '../utils/db';
import { User } from '../models/User';

const collection = db.get('users');

export const userService = {
  async all(): Promise<User[]> {
    return await collection.find();
  },

  async find(id: string): Promise<User> {
    return await collection.findOne({ _id: id });
  },

  async save(user: User): Promise<User> {
    return await collection.insert(user);
  },

  async update(id: string, attrs: any): Promise<User> {
    return await collection.findOneAndUpdate({ _id: id }, { $set: attrs });
  }
};
