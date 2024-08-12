import React from 'react';
import Logo from '../assets/Jobs_Nav/Logo.svg';
import Search_Icon from "../assets/Jobs_Nav/iconamoon_search-light.svg";
import Bell from "../assets/Jobs_Nav/Bell.svg";
import CaseRound2 from "../assets/Jobs_Nav/Case Round2.svg";
import HomeAngle2 from "../assets/Jobs_Nav/Home Angle 2.svg";
import LetterUnread from "../assets/Letter Unread.svg";
import Profile from "../assets/Profile.svg";


const HomeNav = () => {
  return (
   
    <nav  className="flex items-center justify-between  px-10 py-2 h-20 bg-customGray shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>
      
        {/* Search Section */}
       

      {/* Icons Section */}
      <div className="flex items-center space-x-6">

      <div className="flex  bg-Search_Bg p-2 h-10 ml-24 w-80  rounded-2xl">
        <img src={Search_Icon} alt="Search Icon" className="h-6 w-10" />
        <input
          type="text"
          placeholder="Search Jobs"
          className="ml-2 w-64 h-6 bg-Search_Bg text-gray-300 placeholder-gray-500 rounded-xl focus:outline-none"
        />


      </div>
      
      
      <img src={HomeAngle2} alt="Home Angle" className="h-6 w-6" />
        {/* Home Link */}
        <div className='flex items-center space-x-1 text-gray-300 border-2 rounded-xl border-none border-transparent px-3 py-1 bg-White hover:text-white cursor-pointer'>
        <img src={ CaseRound2} alt="Case Round" className="h-5 w-5 cursor-pointer hover:text-white" />
          <p className='text-xs'>Jobs</p>
        </div>
        {/* Other Icons */}
        
        <img src={LetterUnread} alt="Letter Unread" className="h-5 w-5 cursor-pointer hover:text-white" />
        <img src={Bell} alt="Bell" className="h-5 w-5 cursor-pointer hover:text-white" />
        <img src={Profile} alt="Profile" className="h-8 w-8 cursor-pointer hover:text-white rounded-full" />
      </div>
    </nav>
  
  );
};

export default HomeNav;
