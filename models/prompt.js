
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const promptSchema = new mongoose.Schema({

    prompt:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true,
        
    },
    creator:{
       type:mongoose.Schema.Types.ObjectId, 
       ref:'User'
    },

});

//Export the model
const Prompt= mongoose.models.Prompt || model('Prompt',promptSchema)

export default Prompt