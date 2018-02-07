// Gettign the Newly created Mongoose Model we just created 
var Status = require('../models/status.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.getStatuses = async function(){
    // Try Catch the awaited promise to handle the error 
    try {
        var statuses = await Status.find({});
        
        // Return the todod list that was retured by the mongoose promise
        return statuses;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Error while Paginating Todos')
    }
}
