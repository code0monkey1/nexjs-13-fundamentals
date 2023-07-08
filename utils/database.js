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

    await mongoose.connect(process.env.MONGODB_URI,{
       dbName:"",
       useNewUrlParser:true,
       useUnifiedTopology:true
    })

    isConnected=true
   console.log("MongoDb connected!")
  }catch(error){
   
    console.log('error connecting to MongoDb')

  }


}

