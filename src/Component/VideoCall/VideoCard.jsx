import {useRef} from 'react'
import "./VideoCard.css"

function VideoCard({ name , stream = null,videoref = null, remvideoref=null,hasStream}) {

  return (
    <div className="video-card">
      <video 
      ref={videoref?videoref:remvideoref}
        className="video-stream"
        autoPlay 
        playsInline 
        muted
      />
      <div className="video-label">
<div className={`status-indicator ${hasStream ? "online" : "offline"}`} />
        <span>{name}</span>
      </div>
    </div>
  )
}

export default VideoCard