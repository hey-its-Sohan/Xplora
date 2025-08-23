
import Link from 'next/link';
import { Star, ExternalLink, MapPin } from "lucide-react";
import React from 'react';
import dbConnect from '@/lib/dbConnect';
export const dynamic = "force-dynamic";
const AllSpots = async () => {
  // const spots = await dbConnect("spotCollection").find().toArray();
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/api/allplaces`)
  const spots = await res.json()


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black opacity-10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black opacity-10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Hidden Gems
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Explore unique spots shared by our community of local explorers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/addplace" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                Share a Spot
              </Link>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Explore Map
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
          <svg className="animate-bounce w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 ">
        <div className=" max-w-screen-xl mx-auto px-5 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              Recently Discovered Spots
            </h2>

          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spots.map((spot) => (
              <div key={spot._id} className="group">
                <div className="bg-white  rounded-2xl overflow-hidden shadow-sm hover:shadow-purple-200 hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
                  {/* Image + Rating */}
                  <div className="relative overflow-hidden">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{spot.rating}</span>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-block bg-indigo-50 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {spot.category}
                      </span>
                    </div>

                    {/* Spot Name */}
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">
                      {spot.name}
                    </h3>

                    <p className='flex text-sm items-center gap-1 mb-2 text-gray-600'>
                      <MapPin className='h-4 w-4' />{spot.location}
                    </p>

                    {/* short description */}
                    <p className='mb-4'>{spot.description}</p>


                    {/* View Details Button */}
                    <Link href={`/spot/${spot._id}`}>
                      <button
                        className="w-full btn rounded-lg group-hover:bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:text-white"
                      >
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default AllSpots;