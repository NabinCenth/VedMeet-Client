import React from 'react'
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdCall } from 'react-icons/md'
import './CallControls.css'

function CallControls() {
  const [isMuted, setIsMuted] = React.useState(false)
  const [isCameraOff, setIsCameraOff] = React.useState(false)

  return (
    <div className="call-controls">
      <button 
        className="control-btn mute-btn"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? <MdMicOff size={24} /> : <MdMic size={24} />}
      </button>
      
      <button 
        className="control-btn camera-btn"
        onClick={() => setIsCameraOff(!isCameraOff)}
      >
        {isCameraOff ? <MdVideocamOff size={24} /> : <MdVideocam size={24} />}
      </button>
      
      <button className="control-btn hang-up-btn">
        <MdCall size={24} />
      </button>
    </div>
  )
}

export default CallControls