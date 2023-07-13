'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const PromptCard = ({
  key,
  prompt,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="prompt_card">
      <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
        <Image
          src={prompt.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />

        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default PromptCard;
