const express = require('express');

const router = express.Router();
const TodoListController = require('../controllers/todoListController');

const { getAllTodoListByUserId } = new TodoListController();
const { requireSignIn } = require('../middleware/restrict');

router.get('/', requireSignIn, getAllTodoListByUserId);

module.exports = router;
