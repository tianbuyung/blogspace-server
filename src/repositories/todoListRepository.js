const Model = require('../../database/models');

const { UserTodoLists } = Model;

class UserRepository {
  async createTodoList(options) {
    let err = null;
    try {
      const created = await UserTodoLists.create(options);
      return [err, created];
    } catch (error) {
      err = {
        message: error.message,
      };
      return [err, null];
    }
  }

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

  async getTodoListById(options) {
    let err = null;
    try {
      const data = await UserTodoLists.findOne(options);
      if (data) {
        return [err, data];
      }
      err = {
        message: 'The todo list is not found',
      };
      return [err, null];
    } catch (error) {
      err = {
        message: error.message,
      };
      return [err, null];
    }
  }

  async updateTodoListById(data, options) {
    let err = null;
    try {
      let response = await UserTodoLists.update(data, options);
      if (response[0] === 1) {
        response = {
          message: 'Your data has been updated',
        };
        return [err, response];
      }
      err = {
        message: 'The todo list cant update',
      };
      return [err, null];
    } catch (error) {
      err = {
        message: error.message,
      };
      return [err, null];
    }
  }

  async deleteTodoListById(options) {
    let err = null;
    try {
      let response = await UserTodoLists.destroy(options);
      if (response) {
        response = {
          message: 'Your data has been deleted',
        };
        return [err, response];
      }
      err = {
        message: 'The todo list cant delete',
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
