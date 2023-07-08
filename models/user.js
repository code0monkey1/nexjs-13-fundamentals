import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
   
   email:{
    type:String,
    unique:[true,'Email already exists'],
    required:[true,'Email is required']
   },
   userName:{
     type:String,
     
   }


})