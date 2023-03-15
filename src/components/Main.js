import React from 'react'
import video from '../asset/video.mp4'


function Main() {
  return (
    <div>
        <video src={video} className='bg-video'autoPlay loop muted w-100/>
        <div className='content'>
            <h1>
                <strong>
                ULTIMATE EXPERTS IN USER EXPERIENCE
                </strong>
            </h1>
           <p className='para1'>ULTIMATE EXPERTS IN USER EXPERIENCE</p>
           <p className='para'>Mobile App Development. Web Development. Web Design</p>
           <p className='para '>Dev Ops And Much More..</p>
        </div>
    </div>
  )
}

export default Main