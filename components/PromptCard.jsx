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
    <>
      <h1>Hello</h1>
    </>
  );
};

export default PromptCard;
