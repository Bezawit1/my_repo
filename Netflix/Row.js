import React ,{useState,useEffect}from 'react';
import './Row.css'
import axios from '../../axios'
import Youtube from 'react-youtube';
import MovieTrailer from  'movie-trailer'
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {
const[movies,setMovies]=useState([]);
const[trailerUrl,setTrailerUrl]=useState("")
useEffect(()=>{
    async function fetchData(){
        const request=await axios.get(fetchUrl)//we imported axios and we initiated the base url then fetchurl also has its url already defined in the app js
                                               //so the get url sends baseurl +the url in the fetchurl request

//we used async await so we don't have to change it to json file using .then they will take care of it 

        setMovies(request.data.results);
        return request;
    }
    fetchData();
},[fetchUrl] //we put fetch url inside the array so that the use effect can be dependent on the value since the fetch url changes
             //in other words when the fetch url changes the use effect re runs 
  
);
const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,
    },
};


// console.log(movies)
//the movie parameter below is the movies in the array
const handleClick=(movie)=>{
    if(trailerUrl){
        setTrailerUrl("")//if it exists to bring it back to the previous state
        //i.e when clicked if on the trailer video it returns to the original state by exiting from the video
    }
    else{
        MovieTrailer(movie?.title||movie.name||movie.original_name)//this movie trailers works when it gets the movie title it brings back a url with that movie title
        .then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search);// this is to make the url searchable  and to parse out elements in the url (mebetaten)easily
            setTrailerUrl(urlParams.get("v"))//youtube videos have v which is a video id by using get method we can get the id since we parsed the elements by using the above code
                                             //set Trailer url puts it on trailerurl
        })
        .catch((error)=>console.log(error))
    }
}
  return (
    <div className="row">
        <h1>{title}</h1>
      <div className="row__posters">
      {movies.map((movie)=>(
          <img onClick={()=>handleClick(movie)}
          className={`row__poster ${isLargeRow &&"row__posterLarge"}`}//the class name is row poster when when you get large row add the class row poster large
          src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}//we used base url because the poster path is not a full address must be combined with 
                                                 //the base url the base url to fetch the image is defined above
                                                 //if it gets isLargeRow it will go to the poster path else it will go to thumbnail path
          alt={movie.name}
      
      
      />
      ))};
       </div>

       <div style={{padding:"40px"}}>
       {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}/>}

       </div>
    </div>
  );
}

export default Row;
