import React,{useState,useEffect} from 'react';
import './Banner.css';
import axios from '../../axios';
import requests from '../../requests'
import { truncate } from 'fs';

function Banner() {
const [movie,setMovie]=useState([])
useEffect(()=>{
async function fetchData(){
    const request=await axios.get(requests.fetchNetflixOriginal)

    setMovie(
        request?.data.results[
        Math.floor(Math.random()*request.data.results.length)
]
);//"'?' is called optional chaining when used with function calls it returns undefined if the function doesn't exist"

return request;
    
}
fetchData()

},[]);//we put an empty array because we want to render it only once i.e the url doesn't change);
function truncate(str,number){
    return str?.length>number?str.substr(0,number-1)+"...":str;
}

return (
   <header
   className="banner"
   style={{
       backgroundSize:"cover",
       backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
       backgroundPosition:"center center",

   }}

   >
   <div className="banner__contents">
   <h1 className="banner__title">
   {movie?.title||movie?.name||movie?.original_name}
   </h1>

   <div className="banner__buttons">
   <button className="banner__button">Play</button>
   <button className="banner__button">MyList</button>

   </div>


{<  h1 className="banner__description">{truncate(movie?.overview,150)}</h1> }
</ div>
<div className="banner__fadeBottom"></div>
</header>
  );
}


export default Banner;
