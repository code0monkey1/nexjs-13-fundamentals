'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Profile from '../../components/Profile';

/* `const MyProfile` is a functional component in JavaScript React. It is responsible for rendering
the user's profile page. It uses various hooks and functions to fetch and display the user's posts,
handle editing and deleting of posts, and pass the necessary data and functions to the `Profile`
component for rendering. */
const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // We search for posts by the specific user logged in

      const response = await axios.get(`/api/users/${session?.user.id}/posts`);
      const data = response.data;

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  /* The `handleDelete` function is responsible for deleting a post. It first prompts the user to
 confirm if they want to delete the post. If the user confirms, it sends a DELETE request to the
 server to delete the post using the post's ID. After successfully deleting the post, it filters out
 the deleted post from the `myPosts` array and updates the state with the filtered array. */
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this prompt?'
    );

    if (hasConfirmed) {
      try {
        await axios.delete(`/api/prompt/${post._id.toString()}`);

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
