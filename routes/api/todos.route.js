
var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var ToDoController = require('../../controllers/todos.controller');
var StatusesController = require('../../controllers/statuses.controller');

// Map each API to the Controller FUnctions

router.get('/', ToDoController.getTodos)

router.get('/:id',ToDoController.getTodo)

router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.delete('/:id',ToDoController.removeTodo)

router.get('/statuses', StatusesController.getStatuses)


// Export the Router

module.exports = router;