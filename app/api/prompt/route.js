import Prompt from '../../../models/prompt';
export const GET =async()=>{

   
  const prompts= await Prompt.find({})

  return new Response(prompts,{status:200})

}