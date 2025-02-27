import Image from 'next/image';
import React, { useState } from 'react';
import { FaHeartCircleBolt } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import Link from 'next/link';
import Search from '../Search/Search';

const Newbar = () => {
  const [showSearch, setShowSearch] = useState(false);


  return (
    <div className='flex items-center justify-between'>
      {/* Logo Section */}
      <Link href={"/"} className='items-center gap-2 font-bold hidden md:flex'>
        <div className='w-10 h-10'>
          <Image height={500} width={500} src={"/logo.png"} alt='footer' />
        </div>
        <div className="text-xl">Foodtravel</div>
      </Link>
      <Link href={"/"} className={`${showSearch ? "hidden" : "items-center gap-2 font-bold flex md:hidden px-4"}`}>
        <div className='w-10 h-10'>
          <Image height={500} width={500} src={"/logo.png"} alt='footer' />
        </div>
        <div className="text-xl">Food</div>
      </Link>

      {/* Right Section (e.g., Cart or Profile) */}
      <div className="text-lg font-bold flex gap-2 md:gap-5">
        {/* Search Box with Smooth Transition */}

        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        {/* Wishlist Icon and Badge */}
        <div className='flex items-center space-x-1 relative'>
          <p className='md:flex hidden'>Wishlist</p>
          <FaHeartCircleBolt size={40} />
          <div className='absolute top-0 right-0 bg-red-900 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center'>
            0
          </div>
        </div>
        {/* Cart Icon and Badge */}
        <div className='flex items-center space-x-1 relative'>
          <p className='md:flex hidden'>Cart</p>
          <BsCartFill size={40} />
          <div className='absolute bg-red-900 text-white top-0 right-0  rounded-full text-xs w-4 h-4 flex items-center justify-center'>
            0
          </div>
        </div>
      </div>

    </div>
  );
}

export default Newbar;
