'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const session = useSession()

  const handleSocialLogin = (providerName) => {
    setIsLoading(true)
    signIn(providerName, { callbackUrl: '/' })
  }

  useEffect(() => {
    if (session?.status == 'authenticated') {
      router.push('/')
    }
  }, [session?.status])

  return (
    <div>
      <button
        onClick={() => handleSocialLogin('google')}
        disabled={isLoading}
        className={`flex items-center justify-center w-full px-4 py-3 space-x-3 transition-all duration-300 border border-gray-300 rounded-xl hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm font-medium text-gray-700">Signing in...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-5 h-5">
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default SocialLogin;