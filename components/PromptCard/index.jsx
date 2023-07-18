'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import EditOrDelete from './EditOrDelete';
import Prompt from './Prompt';
import Tag from './Tag';
import UserDetails from './UserDetails';
import displayCopied from './displayCopied';
import { isEditable } from './isEditable';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');

  // to get logged in user credentials
  const { data: session } = useSession();
  const router = useRouter();
  // to get the current path
  const pathName = usePathname();

  const handleCopy = () => {
    setCopied(post.prompt);

    // this copies the prompt to the clipboard
    navigator.clipboard.writeText(post.prompt);

    // to change the copied icon back from ticked
    setTimeout(() => setCopied(''), 3000);
  };

  const isCardEditable = isEditable({ session, post, pathName });

  return (
    <div className="prompt_card ">
      <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
        <UserDetails post={post} router={router} />
        <CopyPrompt copied={copied} handleCopy={handleCopy} />
      </div>

      <Prompt post={post} />

      <Tag handleTagClick={handleTagClick} post={post} />

      {isCardEditable && (
        <EditOrDelete handleEdit={handleEdit} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default PromptCard;
