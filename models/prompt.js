const { ObjectId } = require('mongodb');
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
       type:ObjectId,
       required:true
    },

});

//Export the model
const Prompt= mongoose.models.Prompt || model('Prompt',promptSchema)

export default Prompt