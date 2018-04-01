import { User } from '../models/User';

let usersDb: User[] = [];

export const userService = {
  all(): User[] {
    return usersDb;
  },

  find(id: number): User {
    return usersDb.find(u => u.id === id);
  },

  save({ email, name }): User {
    const user = new User({ email, name });
    usersDb.push(user);
    return user;
  },

  update(id: number, attrs: any): User {
    const existingUser = usersDb.find(u => u.id === id) || {};
    const updatedUser = new User({
      ...existingUser,
      ...attrs
    });

    usersDb = usersDb.map(u => {
      if (u.id === id) {
        return updatedUser;
      } else {
        return u;
      }
    });

    return updatedUser;
  }
};
