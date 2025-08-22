import Details from '@/components/Details';
import React from 'react';

const page = async ({ params }) => {
  const p = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/api/spot/${p.id}`)
  const data = await res.json()
  const spot = {
    ...data,
    _id: data._id.toString(),
  };


  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Details spot={spot} />
    </div>
  );
};

export default page;