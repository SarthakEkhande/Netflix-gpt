import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryConatiner = () => {
  const movies=useSelector((store)=>store.movies)
  // console.log(movies);
  return (
    <div className=' bg-black '>

    
    <div className=' mt-0 md:-mt-72 pl-4 md:pl-12 relative z-20  '>
    <MovieList title={"Now playing"} movies={movies.NowPlayingMovies} />
    <MovieList title={"Trending"} movies={movies.NowPlayingMovies} />
    <MovieList title={"Popular"} movies={movies.popularmovies} />
    <MovieList title={"Upcoming Movies"} movies={movies.NowPlayingMovies} /> 
    </div>
   

      {/* movielist-popular
          multiple movie card

      trending
      nowplaying
      movielist of horror */}
    </div>
  )
}

export default SecondaryConatiner