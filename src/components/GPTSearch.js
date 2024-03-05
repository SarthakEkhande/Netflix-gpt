import React from 'react'
import { background_URL } from '../utils/constants'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import GPTSearchbar from './GPTSearchbar'

const GPTSearch = () => {
  return (
    <div>
     <div className='absolute -z-10'>
        <img src={background_URL} alt='backgroundimage'/>
        </div>
     <GPTSearchbar/>
     <GPTMoviesSuggestion/>

    </div>
  )
}

export default GPTSearch