
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const promptSchema = new mongoose.Schema({

    creator:{
      type:mongoose.Schema.Types.ObjectId, 
      ref:'User'
    },
    prompt:{
        type:String,
        required:[true,"Prompt is required"] ,
    },
    tag:{
        type:String,
        required:[true,"Tag is required"],
        
    }

});

//Export the model
const Prompt= mongoose.models.Prompt || model('Prompt',promptSchema)

export default Prompt