// src/components/Sidebar.js
import React from 'react';
import Profile from "../assets/Profile.svg";
import Verify from "../assets/bitcoin-icons_verify-filled.svg";
import BookMark from "../assets/Bookmark.svg";
import Arrow from "../assets/Round Alt Arrow Right.svg";



const UserProfile = () => {
  return (
    <div className="w-1/4 h-1/4 bg-white p-6 rounded-lg shadow-md mb-6 bg-White">
    <aside>
      <div className="text-center mb-6">
        <img
          src={Profile}
          alt="Profile"
          className="rounded-full w-16 h-16 mx-auto"
        />
        <h2 className="mt-4 text-xl font-semibold">Veeragowriprasath S</h2>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-center">What are you Missing?</h3>
        <ul className="mt-4 space-y-2">
          <div className='flex text-center'>
          <img src={Verify}  alt="Profile" className="rounded-full w-4 h-4 " />
          <li className='text-xs'>Personalized Feed</li>
          </div>
          <div className='flex text-center'>
          <img src={Verify}  alt="Profile" className="rounded-full w-4 h-4 " />
          <li className="text-xs">Job Recommendations</li>
          </div>
          <div className='flex text-center'>
          <img src={Verify}  alt="Profile" className="rounded-full w-4 h-4 " />
          <li className="text-xs">Direct Job from recruiters</li>
          </div>
          <div>
          <button className="px-8 py-1 rounded-lg bg-ButtonColor ">Complete Profile</button>
          </div>
         
        </ul>
      </div>
      <div className='flex mt-6 gap-12'>
        <div className='flex gap-4'>
        <img src={BookMark}  alt="Profile" className="rounded-full w-6 h-6 " />
        <h3 className="text-sm font-semibold">My items</h3>
        </div>
        <div>
        <img src={Arrow}  alt="Profile" className="rounded-full w-6 h-6 " />
        </div>

      

      </div>
     
    </aside>
    </div>
  );
};

export default UserProfile;
