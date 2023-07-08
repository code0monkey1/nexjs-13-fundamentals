import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
   
   email:{
    type:String,
    unique:[true,'Email already exists'],
    required:[true,'Email is required']
   },
   userName:{
     type:String,
     required:[true,'Username is required!'],
   },
   image:string

})

// we need to do this , as the serverless  architecture of  NextJs restarts the model every time , and you need to look into the `models` and see if the User model is already present or not . If it is , retrieve that , else create a model called `User` with the defined `userSchema` and return that .

const User = models.User || model('User',userSchema)

export default User