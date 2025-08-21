import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className=" w-full relative">
        {/* Aurora Dream Diagonal Flow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
              radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
              radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
              radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
              linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
            `,
          }}
        />

        {/* content goes here */}
        <div className="relative z-10 flex flex-col items-center justify-center py-32 md:py-48  text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Hidden Gems Near You</h1>
          <h3 className="text-lg mb-6">
            Explore local shops, unique experiences, and services right in your city.
          </h3>
          <div className="space-x-4">
            <button className="btn border-none bg-gradient-to-r from-indigo-500 to-purple-600 hover:to-purple-700 text-white rounded-md shadow-sm">
              Explore Now
            </button>
            <button className="btn bg-gray-200 rounded-lg shadow">
              Login to Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
