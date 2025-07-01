import React from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const Playvideo = () => {
  return (
    <div className='playvideo'>
        <video src={video1} controls autoPlay muted></video>
        <h3>best video to larn tech</h3>
        <div className="play-video-info">
            <p>1525 views  &bull: 2days ago</p>

            <div>
                <span> <img src={like} alt="" />125</span>
                <span> <img src={dislike} alt="" />12</span>
                <span> <img src={share} alt="" />share</span>
                <span> <img src={save} alt="" />save</span>
            </div>
        </div>

        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>ASTech</p>
                <span>1M subscribers</span>
            </div>
            <button>subscribe </button>
            <div> </div>
        </div>

        <div className="vid-disc">
            <p>this makes learning easy</p>
            <p>subscribe to this channel to learn informative tech stacks</p>
            <hr />
            <h4>130 comments</h4>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span> 1 day ago </span> </h3>
                    <p>this video that help me a lot</p>

                    <div className="commet-action">
                        <img src={like} alt="" />
                        <span>233</span>
                        <img src={dislike} alt="" />
                          
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Playvideo