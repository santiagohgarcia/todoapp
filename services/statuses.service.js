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
        throw Error('Error while Paginating Status')
    }
}


exports.createStatus = async function(status){
    
    // Creating a new Mongoose Object by using the new keyword
    var newStatus = new Status({
        description: status.description
    })

    try{

        // Saving the Status 
        var savedStatus = await newStatus.save()

        return savedStatus;
    }catch(e){
      
        // return a Error message describing the reason     
        throw Error("Error while Creating Status")
    }
}

exports.updateStatus = async function(status){
    var id = status.id

    try{
        //Find the old Status Object by the Id
        var oldStatus = await Status.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Status")
    }

    // If no old Status Object exists return false
    if(!oldStatus){
        return false;
    }

    console.log(oldStatus)

    //Edit the Status Object
    oldStatus.description = status.description

    console.log(oldStatus)

    try{
        var savedStatus = await oldStatus.save()
        return savedStatus;
    }catch(e){
        throw Error("And Error occured while updating the Status");
    }
}

exports.deleteStatus = async function(id){
    
    // Delete the Status
    try{
        var deleted = await Status.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Status Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Status")
    }
}

exports.getStatus = async function(id){

    try{
        //Find the old Status Object by the Id
        var status = await Status.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Status")
    }

    // If no old Status Object exists return false
    if(!status){
        return false;
    }

    console.log(status)

    return status;

}
