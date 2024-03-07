import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/moviesSlice'


const useNowplayingmovies=()=>{

    //fetch data from tmdb api and update the store
  const dispatch =useDispatch()

  const nowplayingmovies=useSelector(store=>store.movies.NowPlayingMovies )

  const gerNowplayingmovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
     )
     const json=await data.json();
    //  console.log((json.results));
     dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    if(!nowplayingmovies){
      gerNowplayingmovies()
    }
  
    
         
  },[])

}

export default useNowplayingmovies;