import React from 'react';
import Logo from '../assets/Jobs_Nav/Logo.svg';
import Search_Icon from "../assets/Search_Icon.svg";
import Bell from "../assets/Jobs_Nav/Bell.svg";
import CaseRound from "../assets/Jobs_Nav/Case Round.svg";
import HomeAngle from "../assets/Home Angle.svg";
import LetterUnread from "../assets/Letter Unread.svg";
import Profile from "../assets/Profile.svg";

const HomeNav = () => {
  return (
   
    <nav  className="flex items-center justify-between px-10 py-2 h-20 bg-customGray shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>
      
    
      

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
          {/* Search Section */}
      <div className="flex items-center  h-10  bg-DarkGray p-2 rounded-xl">
        <img src={Search_Icon} alt="Search Icon" className="h-7 w-10" />
        <input
          type="text"
          placeholder="Search Jobs"
          className="ml-2 text-sm bg-DarkGray text-gray-300 placeholder-gray-500 rounded-xl focus:outline-none"
        />
      </div>
        {/* Home Link */}
        <div className='flex items-center space-x-1 text-gray-300 border-2 rounded-xl border-none border-transparent px-3 py-1 bg-White hover:text-white cursor-pointer'>
          <img src={HomeAngle} alt="Home Angle" className="h-4 w-4" />
          <p className='text-xs'>Home</p>
        </div>
        {/* Other Icons */}
        <img src={CaseRound} alt="Case Round" className="h-5 w-5 cursor-pointer hover:text-white" />
        <img src={LetterUnread} alt="Letter Unread" className="h-5 w-5 cursor-pointer hover:text-white" />
        <img src={Bell} alt="Bell" className="h-5 w-5 cursor-pointer hover:text-white" />
        <img src={Profile} alt="Profile" className="h-8 w-8 cursor-pointer hover:text-white rounded-full" />
      </div>
    </nav>
  
  );
};

export default HomeNav;
