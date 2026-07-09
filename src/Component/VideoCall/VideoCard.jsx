import {useRef} from 'react'
import "./VideoCard.css"

function VideoCard({ name , stream = null,videoref = null}) {

  return (
    <div className="video-card">
      <video 
      ref={videoref}
        className="video-stream"
        autoPlay 
        playsInline 
        muted
      />
      <div className="video-label">
      <div className={`status-indicator ${videoref ? "online" : "offline"}`} />
        <span>{name}</span>
      </div>
    </div>
  )
}

export default VideoCard