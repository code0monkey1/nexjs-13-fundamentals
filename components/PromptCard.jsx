'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const PromptCard = ({
  key,
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="prompt_card">
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
        <div className=" copy_btn" onClick={() => {}}>
          <Image
            src={
              copied === post.prompt
                ? '/assets/icons/tick.svg'
                : 'assets/icons/copy.svg'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
