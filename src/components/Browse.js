import Header from './Header'
import useNowplayingmovies from "../hooks/useNowplayingmovies"
import MainConatainer from './MainConatainer'
import SecondaryConatiner from './SecondaryConatiner'
import UsePopularmovies from '../hooks/UsePopularmovies'

const Browse = () => {
  useNowplayingmovies()
  UsePopularmovies()
  
  return (
    <div className=''>
       
       <Header/>
       {/* <h1 className='font-bold align-middle text-red-500 py-24 text-4xl mx-74 items-center'>You are Successfully Sign in</h1> */}
       <MainConatainer/>
       <SecondaryConatiner/>

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