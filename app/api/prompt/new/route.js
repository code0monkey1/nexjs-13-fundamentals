import User from "../../../../models/user";
import { connectToDb } from "../../../../utils/database";

export async function POST(req,res){
 
   try{

     await connectToDb()
     
     const newUser = await User.create(req.body)

     res.status(201).json(newUser)
    
   }
   catch(e){

    res.status(501).send("Error : "+e.message)

   } 
  
     
}