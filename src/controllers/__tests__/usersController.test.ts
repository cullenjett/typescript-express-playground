import { usersController } from '../usersController';
import { userService } from '../../services/userService';
import { User } from '../../models/User';

jest.mock('../../services/userService');

function setup(newReq: any = {}) {
  const req = {
    ...newReq
  };

  const res = {
    status: jest.fn(() => res),
    json: jest.fn()
  };

  return {
    req,
    res
  };
}

function mockPromise(returnValue) {
  return jest.fn(() => Promise.resolve(returnValue));
}

describe('usersController', () => {
  describe('.index', () => {
    it('returns an array of Users', async () => {
      const { req, res } = setup();
      const allUsers: User[] = [
        { _id: 'abc123', email: 'cullenjett@gmail.com', name: 'Cullen Jett' }
      ];

      userService.all = mockPromise(allUsers);

      await usersController.index(req, res);

      expect(userService.all).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(allUsers);
    });
  });

  describe('.show', () => {
    it('returns a User', async () => {
      const { req, res } = setup({
        params: {
          id: 'abc123'
        }
      });
      const user = {
        _id: 'abc123',
        email: 'cullenjett@gmail.com',
        name: 'Cullen Jett'
      };

      userService.find = mockPromise(user);

      await usersController.show(req, res);

      expect(userService.find).toHaveBeenCalledWith('abc123');
      expect(res.json).toHaveBeenLastCalledWith(user);
    });
  });

  describe('.create', () => {
    it('creates and returns a User', async () => {
      const user = {
        email: 'cullenjett@gmail.com',
        name: 'Cullen Jett'
      };
      const { req, res } = setup({
        body: user
      });

      userService.save = mockPromise(user);

      await usersController.create(req, res);

      expect(userService.save).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(user);
    });
  });

  describe('.update', () => {
    it('updates and returns a User', async () => {
      const { req, res } = setup({
        params: {
          id: 'abc123'
        },
        body: {
          email: 'test@example.com'
        }
      });
      const user = {
        _id: 'abc123',
        email: 'cullenjett@gmail.com',
        name: 'Cullen Jett'
      };

      userService.update = mockPromise(user);

      await usersController.update(req, res);

      expect(userService.update).toHaveBeenCalledWith('abc123', req.body);
      expect(res.json).toHaveBeenCalledWith(user);
    });
  });
});
