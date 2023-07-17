'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import displayCopied from './displayCopied';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');

  // to get logged in user credentials
  const { data: session } = useSession();

  // to get the current path
  const pathName = usePathname();

  const handleCopy = () => {
    setCopied(post.prompt);

    // this copies the prompt to the clipboard
    navigator.clipboard.writeText(post.prompt);

    // to change the copied icon back from ticked
    setTimeout(() => setCopied(''), 3000);
  };

  const isUserOnProfilePage =
    session?.user.id === post.creator._id && pathName === '/profile';

  return (
    <div className="prompt_card ">
      <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
        <Image
          src={post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />

        <div className="flex flex-col">
          <h3
            onClick={() =>
              handleTagClick && handleTagClick(post.creator.username)
            }
            className="font-satoshi font-semibold text-gray-900"
          >
            {post.creator.username}
          </h3>
          <p className="font-inter text-sm text-gray-500">
            {post.creator.email}
          </p>
        </div>
        <div className=" copy_btn" onClick={handleCopy}>
          <Image
            width={20}
            height={20}
            alt="copy_image"
            src={displayCopied({ copied, prompt: post.prompt })}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700 "> {post.prompt}</p>
      <p
        onClick={() => handleTagClick && handleTagClick(post.tag)}
        className="font-inter text-sm blue_gradient cursor-pointer"
      >
        #{post.tag}
      </p>

      {/* Display Delete or edit button
        subjected to the person being validated 
        to edit or delete prompt*/}

      {isUserOnProfilePage ? (
        <EditOrDelete handleEdit={handleEdit} handleDelete={handleDelete} />
      ) : (
        ''
      )}
    </div>
  );
};

export default PromptCard;

const EditOrDelete = ({ handleEdit, handleDelete }) => {
  return (
    <div className="mt-5 flex-center gap-4  border-t border-gray-100 pt-3">
      <p
        className="font-inter text-sm green_gradient cursor-pointer"
        onClick={handleEdit}
      >
        Edit
      </p>
      <p
        className="font-inter text-sm orange_gradient cursor-pointer"
        onClick={handleDelete}
      >
        Delete
      </p>
    </div>
  );
};
