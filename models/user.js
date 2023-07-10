import { Schema, model, models } from "mongoose";


/* `const userSchema` is creating a new instance of the `Schema` class from the Mongoose library. This
schema defines the structure and validation rules for the user data that will be stored in the
database. It specifies the fields `email`, `username`, and `image`, along with their respective data
types and any additional constraints. */

const userSchema = new Schema({
   
   email:{
    type:String,
    unique:[true,'Email already exists'],
    required:[true,'Email is required']
   },
   username:{
     type:String,
     required:[true,'Username is required!'],
    
   },
   image:{
    type:String
   }

})

// we need to do this , as the serverless  architecture of 
// NextJs restarts the model every time , and you need to look into 
// the `models` and see if the User model is already present or not . 
// If it is , retrieve that , else create a model called 
// `User` with the defined `userSchema` and return that .

/* `const User` is a variable that is used to store the Mongoose model for the "User" collection in the
database. It is created by calling the `model` function from the Mongoose library, passing in the
name of the model ("User") and the userSchema that defines the structure and validation rules for
the user data. */
const User = models.User || model('User',userSchema)

export default User