const { ObjectId } = require('mongodb');
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var promptSchema = new mongoose.Schema({
  
    prompt:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true,
        
    },
    userId:{
       type:ObjectId,
       required:true
    },

});

//Export the model
module.exports = mongoose.model('User', userSchema);