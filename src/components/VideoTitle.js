import React from 'react'

import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
    // console.log(title);
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1  className="text-2xl md:text-6xl font-bold">{title}</h1>
            <h1 className='py-6 w-1/3 text-lg'>{overview}</h1>
            <div className='flex flex-row'>
                <button className='flex bg-white font-bold text-xl text-black p-4 px-12 rounded-lg hover:bg-opacity-80' > ▶️ Play</button>
                <button className='flex gap-2 mx-2 bg-gray-500 text-xl text-white p-4 px-12 rounded-lg bg-opacity-50'><IoIosInformationCircleOutline />  More Info</button>
            </div>
    </div>

  )
}

export default VideoTitle