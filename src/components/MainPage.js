// src/components/MainContent.js
import React from 'react';
import Post from './Post';
import Post_Author from "../assets/Post/Post_Author.svg";
import Post_Pic from "../assets/Post/Post_Pic.svg";
import DateLogo from "../assets/Post/DateLogo.svg";
import Profile from "../assets/Profile.svg";
import Photo from "../assets/Search_Icon/Gallery.svg";
import Video from "../assets/Search_Icon/Clapperboard Play.svg";
import Article from "../assets/Search_Icon/Bill List.svg";
import Event from "../assets/Search_Icon/Calendar.svg";

const posts = [
  {
    author: 'Vipshal WG',
    authorImage: Post_Author,
    title: 'Doctor | Medical Officer',
    content: 'I’m elated to share that I have been promoted as Clinical Data Coordinator at ABC Med Corp promoted as Clinical Data Coordinator at ABC Med Corp promoted as Clinical Data Coordinator at ABC Med Corp...more',
    Date:'1w.',
    Logo:DateLogo,
    image: Post_Pic,
    Like:'100 Likes'
  },
  {
    author: 'Vipshal WG',
    authorImage: Post_Author,
    title: 'Doctor | Medical Officer',
    content: 'I’m elated to share that I have been promoted as Clinical Data Coordinator at ABC Med Corp',
    Date:'1w.',
    Logo:DateLogo,
    image: Post_Pic,
    Like:'100 Likes'
  },
  
];

const MainPage = () => {
  return (
    <main className="w-2/3 p-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
        <img src={Profile} alt="Profile" />
        </div>
        <input
          type="text"
          placeholder="Start a post"
          className="flex-grow p-2 bg-gray-100 border-2 border-slate-400 rounded-lg"
        />
      </div>

      <div className="mt-4 flex justify-between ml-16">
        <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
        <img src={Photo} alt="Profile" />
          <span>Photo</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
        <img src={Video} alt="Profile" />
          <span>Video</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
        <img src={Article} alt="Profile" />
          <span>Article</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
        <img src={Event} alt="Profile" />
          <span>Event</span>
        </div>
      </div>
    </div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </main>
  );
};

export default MainPage;
