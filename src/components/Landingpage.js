import React from 'react'
import video from '../assets/video.mp4'
import Vector_1 from '../assets/Vector_1.png'

const Landingpage = () => {
  return (
    <>
      <video src={video} autoPlay loop className=' w-screen object-cover'/>
      <div>
        <nav className='absolute top-0 my-10 mx-20 flex'>
            <img src={Vector_1} alt="" className='w-3/5'/>
          <div className='text-2xl text-white'>
            5ire
          </div>
        </nav>
      </div>
      
    </>
  )
}

export default Landingpage
