export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  console.log('Updating route', 'prompt', prompt, 'tag', tag);

  try {
    await connectToDb();

    /* `const prompts` is declaring a variable that will store the result of the `Prompt.find()` query.
    The `Prompt.find()` method is used to find all documents in the `Prompt` collection that have a
    `creator` property matching the `params.id` value. The `populate('creator')` method is used to
    populate the `creator` field of each prompt with the corresponding user object. The result of
    the query is then assigned to the `prompts` variable. */
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response('No prompt found', { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (e) {
    return new Response('Failed to update the Prompt : ' + e, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDb();

    /* `const prompts` is declaring a variable that will store the result of the `Prompt.find()` query.
    The `Prompt.find()` method is used to find all documents in the `Prompt` collection that have a
    `creator` property matching the `params.id` value. The `populate('creator')` method is used to
    populate the `creator` field of each prompt with the corresponding user object. The result of
    the query is then assigned to the `prompts` variable. */

    await Prompt.findByIdAndRemove(params.id);

    return new Response('prompt deleted successfully', { status: 200 });
  } catch (e) {
    return new Response('Failed to delete Prompt : ' + e, { status: 500 });
  }
};

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
