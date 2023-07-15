import Prompt from '../../../models/prompt';
import { connectToDb } from '../../../utils/database';

/* `GET` is an asynchronous function that is responsible for fetching prompts from a
database. 

It connects to the database, retrieves all prompts, and populates the
`creator` field of each prompt. 

It then returns a response with the fetched prompts in
JSON format and a status code of 200 if successful. 

If there is an error during the
fetching process, it returns a response with an error message and a status code of 500. */

export const GET = async () => {
  try {
    await connectToDb();

    const prompts = await Prompt.find({}).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch Prompts : ' + e, { status: 500 });
  }
};

export const POST = async () => {};
