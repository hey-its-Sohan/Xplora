import React from 'react';

const loading = () => {
  return (
    <div className='min-h-screen max-w-screen-xl mx-auto flex items-center justify-center'>
      <span className="loading bg-gradient-to-r from-indigo-400 to-purple-600 w-[150px] loading-infinity "></span>
    </div>
  );
};

export default loading;