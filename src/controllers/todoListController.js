const TodoListService = require('../services/todoListService');

const todoListService = new TodoListService();

class TodoListController {
  async createTodoList(req, res) {
    try {
      const { userId } = req.user[1];
      const { todo } = req.body;
      const payload = { userId, todo };
      const [error, created] = await todoListService.createTodoList(payload);
      if (error) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          errors: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: 'OK',
          data: created,
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
        errors: error.message,
      });
    }
  }

  async getAllTodoListByUserId(req, res) {
    try {
      const { userId } = req.user[1];
      const [error, todoList] = await todoListService.getAllTodoListByUserId(userId);
      if (error) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          errors: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: 'OK',
          data: todoList,
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
        errors: error.message,
      });
    }
  }

  async editTodoListById(req, res) {
    try {
      const { userId } = req.user[1];
      const { id } = req.params;
      const { todo } = req.body;
      const payload = { userId, id, todo };
      const [error, editedTodoList] = await todoListService.editTodoListById(payload);
      if (error) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          errors: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: 'OK',
          data: editedTodoList,
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
        errors: error.message,
      });
    }
  }

  async deleteTodoListById(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.user[1];
      const payload = { userId, id };
      const [error, deleteTodoList] = await todoListService.deleteTodoListById(payload);
      if (error) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          errors: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: 'OK',
          data: deleteTodoList,
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
        errors: error.message,
      });
    }
  }
}

module.exports = TodoListController;
