import Prompt from '../../../../../models/prompt';

import { connectToDb } from '../../../../../utils/database';

export const GET = async (request, { params }) => {
  // the params will have the `id` property , as this object has all the optional params we pass in a url
  try {
    await connectToDb();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      'creator'
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch Prompts : ' + e, { status: 500 });
  }
};
