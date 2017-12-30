var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserSchema = new mongoose.Schema({
    user: String,
    password: String,
    name: String,
    email: String
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;