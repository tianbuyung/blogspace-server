const Model = require('../../database/models');

const { UserTodoLists } = Model;

class UserRepository {
  async getAllTodoListByUserId(options) {
    let err = null;
    try {
      const data = await UserTodoLists.findAll(options);
      if (data) {
        return [err, data];
      }
      err = {
        message: 'The user is not found',
      };
      return [err, null];
    } catch (error) {
      err = {
        message: error.message,
      };
      return [err, null];
    }
  }
}

module.exports = UserRepository;
