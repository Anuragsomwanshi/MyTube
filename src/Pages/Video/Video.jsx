import React from 'react'
import './Video.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recommanded from '../../Components/Recommended/Recommended'

const Video = () => {
  return (
    <div className='play-container'>
      <Playvideo/>
      <Recommanded/>

    </div>
  )
}

export default Video