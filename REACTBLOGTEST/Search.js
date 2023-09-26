import React ,{useContext} from 'react';
import PostContext  from './context/PostsContext';

const Search = () => {
const {search , setSearch} = useContext(PostContext)






  return (
    <div className="">
      <form onSubmit={(e)=>e.preventDefault()}>
      <label className="relative block">
  <span className="sr-only">Search</span>
  
  <input 
  className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md  py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-2  w-[200px] md:w-[300px] lg:w-[400px] lg:px-3 lg:py-2 
 md:placeholder-md sm:placeholder-sm lg:placeholder-lg"   placeholder="Search for a post..." 
  type="text" 
  name="search"
  value = {search}
  onChange={(e)=>setSearch(e.target.value)}
  />
</label>
</form>
    </div>
  );
}

export default Search;
