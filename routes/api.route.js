var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')
var statuses = require('./api/statuses.route')

router.use('/todos', todos);

router.use('/statuses', statuses);

module.exports = router;