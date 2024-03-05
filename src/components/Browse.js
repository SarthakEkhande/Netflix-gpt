import Header from './Header'
import useNowplayingmovies from "../hooks/useNowplayingmovies"
import MainConatainer from './MainConatainer'
import SecondaryConatiner from './SecondaryConatiner'
import UsePopularmovies from '../hooks/UsePopularmovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showgptsearchview=useSelector(store=>store.gpt?.showgptsearch)
  useNowplayingmovies()
  UsePopularmovies()
  
  return (
    <div className=''>
       
       <Header/>
       {
        showgptsearchview ?  ( <GPTSearch/> ) : ( <>
        <MainConatainer/>
       <SecondaryConatiner/>
        </>
      ) }
       
       {/* <h1 className='font-bold align-middle text-red-500 py-24 text-4xl mx-74 items-center'>You are Successfully Sign in</h1> */}
       

       {/* 
          maincontiner
            -video background
            -video title
          secondary container
            -movielist * n
              -card * n


        */}
    </div>
  )
}

export default Browse