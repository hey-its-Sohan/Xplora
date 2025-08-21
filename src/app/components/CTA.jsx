import { ArrowRight } from 'lucide-react';
import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Discover Your City's Hidden Gems?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands of explorers finding unique spots and supporting local businesses
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">1000+ Hidden Spots</p>
                  <p className="text-blue-100 text-sm">Discover places you never knew existed</p>
                </div>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Updated Daily</p>
                  <p className="text-blue-100 text-sm">Fresh recommendations every day</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
              <button
                className="w-full flex gap-2 justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Xplore Now <ArrowRight className='h-5 w-5' />
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By signing up, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;