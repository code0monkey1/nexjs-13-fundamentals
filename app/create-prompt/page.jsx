'use client';

// The form for filling out the prompt
import axios from 'axios';
import Form from '../../components/Form';

//used to get the current logged in client details
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/* The `CreatePrompt` component is a React component that is responsible for rendering a form for
filling out a prompt. It uses the `useState` hook to manage the state of the form inputs
(`prompt` and `tag`). It also uses the `useSession` hook from the `next-auth/react` library to
get the current logged in client details. The `CreatePrompt` function is currently empty and
needs to be implemented to handle the form submission. */

const CreatePrompt = () => {
  // you get the data object, but you rename it to session to use in your app
  const { data: session } = useSession();

  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  /* The `createPrompt` function is an asynchronous function that is triggered when the form is
  submitted. 
  
  It prevents the default form submission behavior, sets the `submitting` state to
  `true`, and then tries to create a new prompt by making a POST request to the
  `/api/prompt/new` endpoint with the `NewPrompt` object as the request body. */

  const createPrompt = async (e) => {
    console.log('create prompt triggered');
    e.preventDefault();

    setSubmitting(true);

    try {
      const NewPrompt = {
        prompt: post.prompt,
        tag: post.tag,
        userId: session?.user.id,
      };

      console.log('New Prompt', JSON.stringify(NewPrompt, null, 2));

      const response = await axios.post('/api/prompt/new', NewPrompt);

      if (response.status === 200) {
        router.push('/');
      }
    } catch (e) {
      console.error('Error: ' + e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </>
  );
};

export default CreatePrompt;
