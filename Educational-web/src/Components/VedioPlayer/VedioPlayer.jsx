import React from 'react'
import './VedioPlayer.css'

const VedioPlayer = ({palayState, setPlayState}) => {
  return (
    <div className={`vedio-player ${palayState?'':'hide'}`}>
        <video src="vedio.mp4" autoPlay muted controls></video>

    </div>
  )
}

export default VedioPlayer