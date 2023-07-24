'use client';

// The form for filling out the prompt
import axios from 'axios';
import Form from '../../components/Form';

//used to get the current logged in client details
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const UpdatePrompt = () => {
  // we need to get the previous data from the saved prompt
  // this is how we extract the search params from url in next
  const searchParams = useSearchParams();

  const promptId = searchParams.get('id');

  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  useEffect(() => {
    const retrieveStoredPost = async () => {
      const response = await axios.get(`/api/prompt/${promptId}`);

      const savedPost = await response.data;

      setPost(savedPost);
    };

    retrieveStoredPost();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    if (!promptId) {
      return alert('promptId not found');
    }

    try {
      console.log('Updated Prompt', JSON.stringify(post, null, 2));

      const response = await axios.patch(`/api/prompt/${promptId}`, post);

      if (response.status === 200) {
        router.push('/profile');
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
