import React from 'react'
import "./VIdeoGrid.css"
function VideoGrid({children}) {
  return (
      <>
     <div className="video-grid">
        {children}
      </div>
       </>
  )
}

export default VideoGrid