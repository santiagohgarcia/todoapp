var mongoose = require('mongoose')

var StatusSchema = new mongoose.Schema({
    description: String
},
{ collection : 'statuses' })

const Status = mongoose.model('Status', StatusSchema)

module.exports = Status;