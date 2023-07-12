import Prompt from '../../../models/prompt';
import { connectToDb } from '../../../utils/database';
export const GET =async()=>{
  
  try{
     
  await connectToDb()

  const prompts= await Prompt.find({}).populate('creator')

  return new Response(JSON.stringify(prompts),{status:200})

  }catch(e){
    console.error("Error"+e)
  }

}