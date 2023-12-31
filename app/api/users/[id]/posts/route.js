import Prompt from '../../../../../models/prompt';

import { connectToDb } from '../../../../../utils/database';

export const GET = async (req, { params }) => {
  // the params will have the `id` property , as this object has all the optional params we pass in a url

  try {
    await connectToDb();

    /* `const prompts` is declaring a variable that will store the result of the `Prompt.find()` query.
    The `Prompt.find()` method is used to find all documents in the `Prompt` collection that have a
    `creator` property matching the `params.id` value. The `populate('creator')` method is used to
    populate the `creator` field of each prompt with the corresponding user object. The result of
    the query is then assigned to the `prompts` variable. */

    const prompts = await Prompt.find({ creator: params.id }).populate(
      'creator'
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch Prompts : ' + e, { status: 500 });
  }
};
