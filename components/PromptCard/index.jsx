'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import displayCopied from './displayCopied';

const PromptCard = ({
  key,
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  const [copied, setCopied] = useState('');

  const { data: session } = useSession();

  const pathName = usePathname();

  const handleCopy = () => {
    setCopied(post.prompt);

    // this copies the prompt to the clipboard
    navigator.clipboard.writeText(post.prompt);

    // to change the copied icon back from ticked
    setTimeout(() => setCopied(''), 3000);
  };
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
          <h3 className="font-satoshi font-semibold text-gray-900">
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

      {/* Display Delete or edit button  subjected to the person being validated to edit or delete prompt*/}

      {session?.user.id === post.creator.id && pathName === '/profile' && (
        <EditOrDelete />
      )}
    </div>
  );
};

export default PromptCard;

const EditOrDelete = () => {
  <>
    <h1>Editor Showing</h1>
  </>;
};