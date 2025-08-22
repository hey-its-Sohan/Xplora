import Link from 'next/link';
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-5 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative pb-2">
            How It Works
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-green-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover hidden gems in your city with just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-6 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore Local Spots</h3>
            <p className="text-gray-600 mb-4">
              Browse through unique locations shared by our community of local explorers. Filter by category, distance, or popularity.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add Your Discoveries</h3>
            <p className="text-gray-600 mb-4">
              Found a hidden gem? Share it with the community! Add photos, descriptions, and tips for other explorers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect & Share</h3>
            <p className="text-gray-600 mb-4">
              Save your favorite spots, follow other explorers, and build your personal guide to the city's hidden treasures.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={'/signup'}>
            <button className="btn btn-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-5 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;