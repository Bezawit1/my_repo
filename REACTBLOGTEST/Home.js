import React , {useContext} from 'react';
import PostContext from './context/PostsContext';
import { Link} from 'react-router-dom';

const Home = () => {
     
    const {posts,searchResults}= useContext(PostContext)
  
    const displayPosts = searchResults.length >0 ? searchResults : posts



  return (
    <div className="bg-gray-200 w-full ">
      
      {displayPosts.map(post=>(

        <Link to={`/post/${post.id}`} key={post.id}>
        
        <div key={post.id} className=" border border-b-gray-200 px-4 py-7 m-auto shadow-lg cursor-pointer hover:bg-gray-400"> 
            <h1 className="font-semibold lg:text-xl md:text-md sm:text-sm">{post.title} <span className='lg:text-md sm:text-sm mx-2 italic font-thin'>{post.datetime}</span></h1>
            <p className='lg:text-xl md:text-md sm:text-sm'>{(post.body).length<=25?post.body:`${(post.body).slice(0,25)}...`}</p>

        </div>
        
        </Link>
        
      ))}
    
    </div>
  );
}

export default Home;
