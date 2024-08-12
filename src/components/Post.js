// src/components/Post.js
import React from 'react';
import Like from "../assets/Post/Like.svg";
import ChatCircleText from "../assets/Post/ChatCircleText.svg";
import BookMarkSimple from "../assets/Post/BookmarkSimple.svg";
import Share from"../assets/Post/Plain 2.svg";
import Plus from "../assets/Post/Plus.svg";


const Post = ({ post }) => {
  return (

    
    <div className="bg-white p-4 border-1 border-SecondText shadow-lg rounded-xl mt-5">
      <div className="flex items-center mb-2">
        <div>
        <img
          src={post.authorImage}
          alt={post.author}
          className="rounded-full w-10 h-10 mr-4"
        />
        </div>
       
        <div>
          <h4 className="text-lg font-semibold">{post.author}</h4>
          <p className="text-SecondText">{post.title}</p>
          <div className='flex'>
          <h4 className='text-SecondText'>{post.Date}</h4>
         <img src={post.Logo} alt={"Logo"}className='rounded w-4' />
        </div>
        </div>

        <div className='flex justify-end  border-1 rounded-md border-transparent px-3 py-2 gap-2 bg-Btn_Follow  ml-64'>
            <img src={Plus} alt="Like" className="w-4 h-4" />
            <label className='text-xs'>Follow</label>
        </div>
       
       

      </div>
      
      <p className="mb-4">{post.content}</p>
      <img src={post.image} alt="Post" className="rounded-lg w-full" />
      <p className="text-SecondText">{post.Like}</p>


      <div className="flex justify-between mt-4">
        <div className='flex'>
        <img src={Like} alt="Post" className="rounded w-full text-White" />
        <h3>Like</h3>
        </div>
        <div className='flex'>
        <img src={ChatCircleText} alt="Post" className="rounded w-full" />
        <h3>Comment</h3>
        </div>
        <div className='flex'>
        <img src={Share} alt="Post" className="rounded w-full" />
        <h3>Share</h3>
        </div>
        <div className='flex'>
        <img src={ BookMarkSimple} alt="Post" className="rounded w-full" />
        <h3>Saved</h3>
        </div>
     
      </div>


    </div>
  );
};

export default Post;
