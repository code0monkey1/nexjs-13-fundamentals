import Prompt from '../../../../models/prompt';
import { connectToDb } from "../../../../utils/database";

export async function POST(req,res){
 
   try{

    const{userId,prompt,tag} = await req.json()

    await connectToDb()
     
    const newPrompt = new Prompt({
      creator:userId,
      prompt,
      tag
    })
    
    const savedPrompt=  await newPrompt.save()

    res.status(201).json(savedPrompt)
    
   }
   catch(e){

    res.status(501).send("Error : "+e.message)

   } 
  
     
}