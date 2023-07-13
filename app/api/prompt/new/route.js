import Prompt from '../../../../models/prompt';
import { connectToDb } from '../../../../utils/database';

export async function POST(req) {
  try {
    const { userId, prompt, tag } = await req.json();

    await connectToDb();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    const savedPrompt = await newPrompt.save();

    return new Response(JSON.stringify(savedPrompt, null, 2), { status: 201 });
  } catch (e) {
    return new Response('Failed to create a new prompt', { status: 500 });
  }
}
