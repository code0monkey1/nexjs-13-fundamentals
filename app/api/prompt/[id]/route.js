export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDb();

    /* `const prompts` is declaring a variable that will store the result of the `Prompt.find()` query.
    The `Prompt.find()` method is used to find all documents in the `Prompt` collection that have a
    `creator` property matching the `params.id` value. The `populate('creator')` method is used to
    populate the `creator` field of each prompt with the corresponding user object. The result of
    the query is then assigned to the `prompts` variable. */
    const promptToUpdate = await Prompt.findById(params.id);

    if (!promptToUpdate) {
      return new Response('No prompt found', { status: 404 });
    }

    promptToUpdate.prompt = prompt;
    promptToUpdate.tag = tag;

    const updatedPrompt = await promptToUpdate.save();

    return new Response(JSON.stringify(updatedPrompt), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch Prompts : ' + e, { status: 500 });
  }
};

const DELETE = (req) => {};

import Prompt from '../../../../models/prompt';

import { connectToDb } from '../../../../utils/database';

export const GET = async (req, { params }) => {
  // the params will have the `id` property , as this object has all the optional params we pass in a url

  try {
    await connectToDb();

    /* `const prompts` is declaring a variable that will store the result of the `Prompt.find()` query.
    The `Prompt.find()` method is used to find all documents in the `Prompt` collection that have a
    `creator` property matching the `params.id` value. The `populate('creator')` method is used to
    populate the `creator` field of each prompt with the corresponding user object. The result of
    the query is then assigned to the `prompts` variable. */

    const prompt = await Prompt.findById(params.id);

    if (!prompt) {
      return new Response('No prompt found', { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (e) {
    return new Response('Failed to fetch Prompts : ' + e, { status: 500 });
  }
};
