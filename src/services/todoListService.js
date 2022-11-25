const TodoListRepository = require('../repositories/todoListRepository');

const todoListRepository = new TodoListRepository();

class TodoListService {
  async createTodoList(payload) {
    const { userId, todo } = payload;
    const options = { userId, todo };
    const [err, created] = await todoListRepository.createTodoList(options);
    return [err, created];
  }

  async getAllTodoListByUserId(userId) {
    const options = { where: { userId } };
    const [error, todoList] = await todoListRepository.getAllTodoListByUserId(options);
    if (error) {
      return [error, null];
    }
    return [error, todoList];
  }
}

module.exports = TodoListService;
