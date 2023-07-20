'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Profile from '../../../components/Profile/index';

/* `const MyProfile` is a functional component in JavaScript React. It is responsible for rendering
the user's profile page. It uses various hooks and functions to fetch and display the user's posts,
handle editing and deleting of posts, and pass the necessary data and functions to the `Profile`
component for rendering. */
const UserProfile = () => {
  const params = useParams();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // We search for posts by the specific user with given id
      try {
        const response = await axios.get(`/api/users/${params.id}/posts`);
        const data = response.data;

        console.log('Data is ', JSON.stringify(data, null, 2));

        setMyPosts(data);
      } catch (e) {
        console.error('Invalid User Id');
      }
    };

    if (params.id) fetchPosts();
  }, [params.id]);

  const firstName = myPosts.length ? myPosts[0].creator.username : '';

  console.log('first name is ', firstName);

  return (
    <>
      {/* This is the reusable profile component that will dynamically render the current users profile info*/}
      <Profile
        name={firstName}
        desc={`Welcome to ${firstName}'s personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination`}
        data={myPosts}
      />
    </>
  );
};

export default UserProfile;
