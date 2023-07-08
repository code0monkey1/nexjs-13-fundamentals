import mongoose from "mongoose";

let isConnected  = false;


export const connectToDb =async()=>{

  mongoose.set('strictQuery',true)

  // defensive programming
  if(isConnected){

    console.log('MongoDb is already connected')

    return;
  }
  
  try{

  }catch(error){

    
  }


}

