import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdMic, MdMicOff, MdVideocam, MdVideocamOff, MdCall } from 'react-icons/md'
import './CallControls.css'

function CallControls() {
  const [isMuted, setIsMuted] = React.useState(false)
  const [isCameraOff, setIsCameraOff] = React.useState(false)
  const navigate =useNavigate();
 const handleEnd=()=>{
navigate("/");
 }
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
      
      <button className="control-btn hang-up-btn" onClick={handleEnd}>
        <MdCall size={24} />
      </button>
    </div>
  )
}

export default CallControls