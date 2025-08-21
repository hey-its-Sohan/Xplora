import Details from '@/components/Details';
import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({ params }) => {
  const { id } = params
  const data = await dbConnect('spotCollection').findOne({ _id: new ObjectId(id) });
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