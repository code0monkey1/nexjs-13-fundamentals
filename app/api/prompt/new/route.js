import Prompt from '../../../../models/prompt';
import User from "../../../../models/user";
import { connectToDb } from "../../../../utils/database";

export async function POST(req,res){
 
   try{

    const{userId,prompt,tag} = await req.json()

    await connectToDb()
     
    const newUser = await Prompt.create(req.body)

     res.status(201).json(newUser)
    
   }
   catch(e){

    res.status(501).send("Error : "+e.message)

   } 
  
     
}