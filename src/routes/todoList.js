const express = require('express');

const router = express.Router();
const TodoListController = require('../controllers/todoListController');

const todoListController = new TodoListController();

router.post('/', todoListController.getAllTodoListByUserId);

module.exports = router;
