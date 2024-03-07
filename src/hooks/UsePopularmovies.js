import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addPopularMovies } from '../utils/moviesSlice'

const UsePopularmovies = () => {
    const dispatch =useDispatch()

    const popularmovies=useSelector(store=>store.movies.popularmovies)

    const getPopularMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
       )
       const json=await data.json();
      //  console.log((json.results));
       dispatch(addPopularMovies(json.results))
    }
  
    useEffect(()=>{
       !popularmovies && getPopularMovies()
      
           
    },[])
  
  }
  

export default UsePopularmovies