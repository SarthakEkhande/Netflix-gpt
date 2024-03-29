import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainConatainer = () => {
    const movies=useSelector((store)=>store.movies?.NowPlayingMovies)
    if(movies===null){
        return
    }

  

    const mainMovie = movies[0];
    console.log(movies)
    // console.log(mainmovie);
    const {original_title,overview,id}=mainMovie
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainConatainer