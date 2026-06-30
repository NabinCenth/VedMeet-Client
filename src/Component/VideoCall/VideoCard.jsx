import React from 'react'
import "./VideoCard.css"

function VideoCard({ name , stream = null }) {
  return (
    <div className="video-card">
      <video 
        className="video-stream"
        autoPlay 
        playsInline 
        muted
        srcObject={stream}
      />
      <div className="video-label">
        <div className="status-indicator"></div>
        <span>{name}</span>
      </div>
    </div>
  )
}

export default VideoCard