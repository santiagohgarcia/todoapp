// Accessing the Service that we just created
var StatusesService = require('../services/statuses.service')

// Saving the context of this module inside the _the variable
_this = this

// Async Controller function to get the To do List
exports.getStatuses = async function(req, res, next){

    try{
  
        var statuses = await StatusesService.getStatuses()
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: statuses, message: "Succesfully Statuses Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
        
    }
}