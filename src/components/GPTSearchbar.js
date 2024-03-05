import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/LanguageConstant'

const GPTSearchbar = () => {
    const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[7%] flex justify-center'>
        <form className='bg-black w-1/2  grid grid-cols-12'>
        <input type="text" placeholder={lang[langKey].gptsearchplaceholder} className='p-4 m-4 col-span-9   '></input>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg '>{lang[langKey].search}</button>
      
        </form>
    </div>
  )
}

export default GPTSearchbar