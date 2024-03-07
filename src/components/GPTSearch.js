import React from 'react'
import { background_URL } from '../utils/constants'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import GPTSearchbar from './GPTSearchbar'

const GPTSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img className='h-screen object-cover md:h-full' src={background_URL} alt='backgroundimage'/>
        </div>
    <div className=''>
     
     <GPTSearchbar/>
     <GPTMoviesSuggestion/>

    </div>
    </>
  )
}

export default GPTSearch