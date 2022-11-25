const TodoListRepository = require('../repositories/todoListRepository');

const todoListRepository = new TodoListRepository();

class TodoListService {
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
