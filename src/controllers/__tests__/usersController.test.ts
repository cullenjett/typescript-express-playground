import { usersController } from '../usersController';
import { userService } from '../../services/userService';

jest.mock('../../services/userService');

function setup() {
  const req = {};

  const res = {
    json: jest.fn()
  };

  return {
    req,
    res
  };
}

describe('usersController', () => {
  describe('.index', () => {
    it('returns an array of Users', () => {
      const { req, res } = setup();
      const allUsers = [
        { id: 123, email: 'cullenjett@gmail.com', name: 'Cullen Jett' }
      ];

      userService.all = jest.fn(() => allUsers);

      usersController.index(req, res);

      expect(res.json).toHaveBeenCalledWith(allUsers);
    });
  });
});
