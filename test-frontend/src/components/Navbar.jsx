import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
         <span className='text-blue-400'> News</span>Portal
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex  space-x-4">
          <a href="#" className="text-white hover:bg-blue-400 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="text-white hover:bg-blue-400 px-3 py-2 rounded-md">World</a>
          <a href="#" className="text-white hover:bg-blue-400 px-3 py-2 rounded-md">Politics</a>
          <a href="#" className="text-white hover:bg-blue-400 px-3 py-2 rounded-md">Sports</a>
          <a href="#" className="text-white hover:bg-blue-400 px-3 py-2 rounded-md">Entertainment</a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 flex flex-col items-center justify-center space-y-4 h-screen mt-5">
          <a href="#" className="text-white hover:bg-blue-400 px-4 py-2">Home</a>
          <a href="#" className="text-white hover:bg-blue-400 px-4 py-2">World</a>
          <a href="#" className="text-white hover:bg-blue-400 px-4 py-2">Politics</a>
          <a href="#" className="text-white hover:bg-blue-400 px-4 py-2">Sports</a>
          <a href="#" className="text-white hover:bg-blue-400 px-4 py-2">Entertainment</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
