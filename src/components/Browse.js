import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import Header from './Header'

const Browse = () => {

  const gerNowplayingmovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
     )
     const json=await data.json();
     console.log((json.results));
  }

  useEffect(()=>{
    gerNowplayingmovies()
    
         
  },[])
  return (
    <div>
       
       <Header/>
       <h1 className='font-bold align-middle text-red-500 py-24 text-4xl mx-74 items-center'>You are Successfully Sign in</h1>
    </div>
  )
}

export default Browse