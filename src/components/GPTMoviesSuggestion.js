import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMoviesSuggestion = () => {
  const gpt=useSelector(store=>store.gpt)
  const {movieResults,movieName}=gpt

  if(!movieName){
    return null;
  }
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    <div>
      {/* <h1> {movieName[0]}</h1> */}
      {movieName.map((movieName,index) => (
    <MovieList
        key={movieName}  // Add a unique key for each MovieList
        title={movieName}
        movies={movieResults[index]}
    />
))}

     
      </div>
    </div>
  )
}

export default GPTMoviesSuggestion