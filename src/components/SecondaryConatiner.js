import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryConatiner = () => {
  const movies=useSelector((store)=>store.movies)
  console.log(movies);
  return (
    <div className='-mt-80 relative z-20 bg-black '>

    
    <div className='-mt-52 relative z-20  '>
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