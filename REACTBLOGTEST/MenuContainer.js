import React ,{useState} from 'react';
import { FcMenu } from 'react-icons/fc';
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Search  from './Search';
const MenuContainer = () => {
const [isMenu , setIsMenu] = useState(false)

const displayMenu = ()=>{
setIsMenu(!isMenu)
}




  return (
    <div className="bg-black px-3 py-5 flex items-center w-full relative">
       {/* desktop and tablet view */}
       <Search/>
     
    <div className="  ml-auto items-center gap-8 hidden lg:block  "> 
<ul className="flex items-center justify-evenly px-3 py-5 text-md text-white gap-10">
   <Link to='/'><li className="cursor-pointer hover:text-blue-300">Home</li></Link> 
   <Link to='/post'><li className="cursor-pointer hover:text-blue-300">New Post</li></Link> 
   <Link to='/about'><li className="cursor-pointer hover:text-blue-300">About</li></Link> 
    
    
   </ul>
</div>


{/* mobile view */}
      <div className='lg:hidden  ml-auto cursor-pointer px-3 py-2 w-auto'>
            <FcMenu onClick={displayMenu} className="text-3xl"/>
        </div>
{isMenu &&
        <div className="w-full opacity-100 bg-gray-100 shadow-xl rounded-sm flex flex-col  absolute top-19 right-0 transition-all duration-200 ease-in-out"> 
        <AiOutlineClose
        onClick={()=>setIsMenu(false)} 
        className="absolute top-1 right-5 "/>
<ul className="flex flex-col items-center justify-evenly px-3 py-2 text-sm text-black gap-2 ">
   <Link to='/'>    <li onClick={()=>setIsMenu(false)}  className="cursor-pointer hover:text-blue-300">Home</li></Link>
   <Link to='/post'> <li  onClick={()=>setIsMenu(false)} className="cursor-pointer hover:text-blue-300">New Post</li></Link>
   <Link to='/about'>
   <li  onClick={()=>setIsMenu(false)} className="cursor-pointer hover:text-blue-300">About</li>
   </Link>
 </ul>
</div>
}
    </div>
  );
}

export default MenuContainer;
