import React ,{useContext} from 'react';
import PostContext from './context/PostsContext';
import { useParams , Link } from 'react-router-dom';
const PostPage = () => {
  const {posts,handleDelete, dialogue,handleDeleteDialogue , handleCancelDialogue} = useContext(PostContext)
  const {id} = useParams()
  const post = posts.find(post=>(post.id) == id)
  console.log(post)
  return (
    <div className="bg-gray-200 w-full flex flex-col relative ">
     {post &&
     <div className="px-2 py-2 min-h-[200px] flex flex-col justify-center">
     <h1 className="font-semibold lg:text-2xl md:text-md sm:text-sm p-2">{post.title} <span  className='lg:text-xl sm:text-sm mx-2 italic font-thin'>{post.datetime}</span></h1>
     
     <p className='lg:text-xl md:text-md sm:text-sm p-2 '>{post.body}</p>
     </div>
     
     }
     <div className="flex justify-between items-center m-auto px-2 py-2 w-[40%] ">
     <Link to={`/post/${post.id}/edit`}>

     <button 
     className="bg-cyan-500 px-6 py-2 rounded-lg w-[auto] text-white lg:text-lg md:text-md sm:text-sm hover:bg-cyan-700">Edit</button>
     </Link>
    
     
     <button 
     onClick={handleDelete}
     className="bg-red-500 px-6 py-2 rounded-lg w-[auto] text-white lg:text-lg md:text-md sm:text-sm hover:bg-red-700">Delete</button>
     </div>
     
{dialogue &&

 <div class="flex justify-center m-5"> 

<div 
 id="deleteModal"
 tabIndex="-1"  
 class=" overflow-y-auto overflow-x-hidden absolute top-50 pt-12 left-90 z-50 justify-center items-center w-[50%] m-auto md:inset-0 h-modal md:h-full "> 
 <div class="relative p-4 w-full max-w-md h-full md:h-auto ">
 <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"> 


 <button 
 type="button" 
 onClick={handleCancelDialogue}
 class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal"> 

 <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
    </path>

    </svg> 

    </button>
    <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>

    <p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this post?</p> 
    <div class="flex justify-center items-center space-x-4"> 

    <button 
    data-modal-toggle="deleteModal" 
    type="button" 
    onClick = {handleCancelDialogue}
    class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"> 
    No, cancel 
    </button> 
    
    
    <button
     type="submit" 
     onClick={()=>handleDeleteDialogue(post.id)}
     class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
     
     
     >
       Yes, I'm sure 
      </button> 
      </div> 
      </div> 
      </div> 
      </div>


    </div>

    
}





    </div>
  );
}

export default PostPage;
