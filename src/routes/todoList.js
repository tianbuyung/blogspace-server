const express = require('express');

const router = express.Router();
const TodoListController = require('../controllers/todoListController');

// eslint-disable-next-line operator-linebreak
const { getAllTodoListByUserId, createTodoList, editTodoListById, deleteTodoListById } =
  new TodoListController();
const { requireSignIn } = require('../middleware/restrict');

router.post('/', requireSignIn, createTodoList);
router.get('/', requireSignIn, getAllTodoListByUserId);
router.put('/:id', requireSignIn, editTodoListById);
router.delete('/:id', requireSignIn, deleteTodoListById);

module.exports = router;
