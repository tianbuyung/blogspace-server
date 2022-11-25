const express = require('express');

const router = express.Router();
const TodoListController = require('../controllers/todoListController');

const { getAllTodoListByUserId, createTodoList } = new TodoListController();
const { requireSignIn } = require('../middleware/restrict');

router.get('/', requireSignIn, getAllTodoListByUserId);
router.post('/', requireSignIn, createTodoList);

module.exports = router;
