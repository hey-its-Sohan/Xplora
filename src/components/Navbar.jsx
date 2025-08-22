"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className=' shadow-sm bg-white/80 backdrop-blur-md fixed z-50 top-0 w-full'>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0 navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='text-lg'><Link href={'/'}>Home</Link></li>
              <li className='text-lg'><Link href={'/allspots'}>All Places</Link></li>
              <li className='text-lg'><Link href={'/addplace'}>Add New Xplore</Link></li>
            </ul>
          </div>
          <h1 className='text-2xl font-bold'>Xplore</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-5 menu-horizontal px-1">
            <li className='text-lg'><Link href={'/'}>Home</Link></li>
            <li className='text-lg'><Link href={'/allspots'}>All Places</Link></li>
            <li className='text-lg'><Link href={'/addplace'}>Add New Xplore</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {mounted && (
            status === 'authenticated' ? (
              <div className='flex items-center gap-3'>
                <p className='hidden text-lg md:block'>{session?.user?.name}</p>
                <button
                  onClick={() => signOut()}
                  className='btn mr-3 border-none px-5 rounded-lg hover:shadow-md hover:to-purple-700 bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href={'/login'}>
                  <button className='btn mr-3 border-none px-5 rounded-lg hover:shadow-md hover:to-purple-700 bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
                    Login
                  </button>
                </Link>
                <Link href={'/signup'}>
                  <button className='btn btn-outline btn-primary rounded-lg'>
                    Sign Up
                  </button>
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;