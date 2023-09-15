import React from 'react'
import "./HomeBanner.scss"
// import videoTag from "../../../../Assets/video/osira-video.mp4"
import { Player, ControlBar, BigPlayButton } from 'video-react';
import WelcomeImg from "../../../../Assets/Images/Welcome-Osira.jpg"

const HomeBanner = () => {
  return (
    <>
      <div className='homeBanner'>
        {/* <video muted autoPlay={"autoplay"} preLoad="auto" loop >
          <source src={videoTag} type="video/mp4" />
        </video> */}
        <Player poster={WelcomeImg} src="https://osira.network/wp-content/uploads/2022/08/osira-digital-earth-video-enhanced.mp4">
          <ControlBar autoHide={false} className="my-class" />
          <BigPlayButton position="center" />
        </Player>
      </div>
    </>
  )
}

export default HomeBanner
