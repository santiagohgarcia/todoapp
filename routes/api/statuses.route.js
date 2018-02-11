
var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created
var StatusesController = require('../../controllers/statuses.controller');

// Map each API to the Controller FUnctions

router.get('/', StatusesController.getStatuses)

router.get('/:id',StatusesController.getStatus)

router.post('/', StatusesController.createStatus)

router.put('/', StatusesController.updateStatus)

router.delete('/:id',StatusesController.removeStatus)

// Export the Router
module.exports = router;