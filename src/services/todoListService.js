const { Op } = require('sequelize');
const TodoListRepository = require('../repositories/todoListRepository');

const todoListRepository = new TodoListRepository();

class TodoListService {
  async createTodoList(payload) {
    const { userId, todo } = payload;
    const options = { userId, todo };
    const [error, created] = await todoListRepository.createTodoList(options);
    if (error) {
      return [error, null];
    }
    return [error, created];
  }

  async getAllTodoListByUserId(userId) {
    const options = { where: { userId } };
    const [error, todoList] = await todoListRepository.getAllTodoListByUserId(options);
    if (error) {
      return [error, null];
    }
    return [error, todoList];
  }

  async editTodoListById(payload) {
    const { id, todo, userId } = payload;
    const data = { todo };
    const options = { where: { [Op.and]: [{ id }, { userId }] } };
    const [error, editedTodoList] = await todoListRepository.updateTodoListById(data, options);
    if (error) {
      return [error, null];
    }
    return [error, editedTodoList];
  }

  async deleteTodoListById(payload) {
    const { id, userId } = payload;
    const options = { where: { [Op.and]: [{ id }, { userId }] } };
    const [error, editedTodoList] = await todoListRepository.deleteTodoListById(options);
    if (error) {
      return [error, null];
    }
    return [error, editedTodoList];
  }
}

module.exports = TodoListService;
