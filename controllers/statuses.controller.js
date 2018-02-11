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

exports.createStatus = async function(req, res, next){

    // Req.Body contains the form submit values.
    var status = {
        description: req.body.description
    }

    try{
        // Calling the Service function with the new object from the Request Body
        var createdStatus = await StatusesService.createStatus(status)
        return res.status(201).json({status: 201, data: createdStatus, message: "Succesfully Created Status"})
    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Status Creation was Unsuccesfull"})
    }
}

exports.updateStatus = async function(req, res, next){

    // Id is necessary for the update
    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var status = {
        id,
        description: req.body.description ? req.body.description : null
    }

    try{
        var updatedStatus = await StatusesService.updateStatus(status)
        return res.status(200).json({status: 200, data: updatedStatus, message: "Succesfully Updated Status"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeStatus = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await StatusesService.deleteStatus(id)
        return res.status(204).json({status:204, message: "Succesfully Status Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

exports.getStatus = async function(req, res, next){

    var id = req.params.id;

    try{
    
        var status = await StatusesService.getStatus(id)
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: status, message: "Succesfully Status Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
        
    }
}