import Prompt from '../../../models/prompt';
export const GET =async()=>{

   
  const prompts= await Prompt.find({})

  return new Response(JSON.stringify(prompts),{status:200})

}