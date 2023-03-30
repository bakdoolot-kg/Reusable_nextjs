import Link from 'next/link';
import React from 'react';

const Page404 = () => {
  return (
    <div>
      <h2>This page could not be found</h2>
      go to <Link href="/" className='text-teal-600'>Home</Link>
    </div>
  );
};

export default Page404;