import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from "../utils/constants"
import { addTrailerVideos } from "../utils/moviesSlice";


const UseMovieTrailer=(movieId)=>{
    
  const dispatch=useDispatch()

const trailervideos=useSelector(store=>store.movies.trailerVideos)
  //fetch trailer videos and updating the store with trailer videos data
  
  

  const getMoviesVideos=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS)
    const json=await data.json();
    // console.log(json);
    const filterData=json.results.filter(video=>video.type==='Trailer')
    const trailer=filterData.length===0 ? filterData[1] : json.results[1]
    // console.log(trailer);
    // settrailerid(trailer.key)
    dispatch(addTrailerVideos(trailer))



  }

  useEffect(()=>{
   !trailervideos && getMoviesVideos()
  },[])


}

export default UseMovieTrailer