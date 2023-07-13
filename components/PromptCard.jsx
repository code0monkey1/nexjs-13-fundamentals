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
      <h1>Hello</h1>
    </div>
  );
};

export default PromptCard;
