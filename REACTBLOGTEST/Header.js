import React from 'react';
import {FaDesktop,FaMobileAlt,FaTabletAlt} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='bg-cyan-300 p-6 flex items-center justify-between w-full'>
     <h1 className="text-white text-2xl">MY  Blog</h1>
    <div className="hidden lg:block">
        <FaDesktop className="text-3xl" />
      </div>

      {/* Display on medium screens (hidden on large and small screens) */}
      <div className="hidden md:block lg:hidden">
        <FaTabletAlt className="text-3xl" />
      </div>

      {/* Display on small screens (hidden on medium and large screens) */}
      <div className="md:hidden lg:hidden">
        <FaMobileAlt className="text-3xl" />
      </div>
     
    </div>
  );
}

export default Header;
