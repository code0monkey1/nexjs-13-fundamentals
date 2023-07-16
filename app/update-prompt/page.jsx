'use client';

// The form for filling out the prompt
import axios from 'axios';
import Form from '../../components/Form';

//used to get the current logged in client details
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const UpdatePrompt = () => {
  // we need to get the previous data from the saved prompt
  const { data: session } = useSession();

  // this is how we extract the search params from url in next
  const searchParams = useSearchParams();

  const promptId = searchParams.get('id');

  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  useEffect(() => {}, [promptId]);

  const updatePrompt = async (e) => {
    console.log('update prompt triggered');
    e.preventDefault();

    setSubmitting(true);

    try {
      console.log('Updated Prompt', JSON.stringify(NewPrompt, null, 2));

      const response = await axios.update(`/api/prompt/${promptId}`, NewPrompt);

      if (response.status === 201) {
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
        type="Update"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </>
  );
};

export default UpdatePrompt;
