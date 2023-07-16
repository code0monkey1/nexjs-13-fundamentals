'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();

  console.log('query', router.query);

  return <div>Edit</div>;
};

export default page;
