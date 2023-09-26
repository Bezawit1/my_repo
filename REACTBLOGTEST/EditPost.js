import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostContext from './context/PostsContext';

const EditPost = () => {
  const {
    posts,
    msg,
    editPostBody,
    setEditPostBody,
    editPostTitle,
    setEditPostTitle,
    handleEditForm
  } = useContext(PostContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  useEffect(() => {
    if (post) {
      setEditPostBody(post.body);
      setEditPostTitle(post.title);
    }
  }, [post]);

  return (
    <div className='w-full min-h-[600px] bg-gray-300'>
      <form
        className="px-4 py-2 flex w-[80%] items-center flex-col bg-gray-100 justify-center m-auto h-auto border border-gray-200 text-left"
        onSubmit={()=>handleEditForm(post.id)}
        
      >
        <h1 className="text-2xl py-3 text-center">Edit Post</h1>
{msg &&
        <p className="bg-green-700 px-2 py-1 text-white text-sm w-full text-center ">{msg}</p>
}

        <div className="flex flex-col px-4 py-2 w-full">
          <label htmlFor='title' className='text-xl px-2 py-2 '> Title : </label>
          <input
            type="text"
            name='title'
            className="px-2 py-2 border-none outline-none text-base text-textColor rounded-md"
            placeholder='Enter your title'
            value={editPostTitle}
            onChange={(e) => setEditPostTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col px-4 py-2 w-full">
          <label htmlFor='title' className='text-xl px-2 py-2'> Post : </label>
          <textarea
            placeholder="What's on your mind today"
            className='min-h-[200px] outline-none border-none rounded-md px-2 py-2 text-textColor text-base'
            value={editPostBody}
            onChange={(e) => setEditPostBody(e.target.value)}
          ></textarea>
        </div>

        <button 
        type="submit"
        className='px-2 py-2 border-none rounded-md outline-none bg-blue-400 m-2 text-white hover:bg-blue-600'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPost;
