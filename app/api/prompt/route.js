import Prompt from '../../../models/prompt';
export const GET =async()=>{

   
  const prompts= awaitPrompt.find({})

  return new Response(JSON.stringify(prompts),{status:200})

}