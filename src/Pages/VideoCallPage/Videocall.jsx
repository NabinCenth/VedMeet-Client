import {useRef,useEffect, useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import VideoGrid from "../../Component/VideoCall/VideoGrid";
import VideoCard from "../../Component/VideoCall/VideoCard";
import CallControls from "../../Component/VideoCall/CallControls";
import "./VideoCall.css";
import { cameraPreview } from "../../Hooks/useMedia";
import { ContextData } from "../../Component/Context/Context";
import { SocketContext } from "../../Component/Context/SocketContext";
import { useWebrtc } from "../../Hooks/useWebrtc";
function Videocall() {
  const navigate = useNavigate();
  const{localname,remotename}=useContext(SocketContext)
  const{remoteStream}=useContext(ContextData);
  const [callHasStarted, setCallHasStarted] = useState(false);
 const stream = cameraPreview();
  const localvideoRef = useRef(null);
  const remotevideoRef=useRef(null);
  useWebrtc(stream);
const [hasStream,sethasStream]=useState(false);
  useEffect(() => {
    if (localvideoRef.current && stream) {
      localvideoRef.current.srcObject = stream;
    }
  }, [stream]);

   useEffect(() => {
    if (remotevideoRef.current && remoteStream) {
      remotevideoRef.current.srcObject = remoteStream;
    }
    if (remoteStream) {setCallHasStarted(true);}
  if (callHasStarted && remoteStream === null) {
    console.log("Remote stream is null, navigating to home page.");
    navigate("/");}
    
  }, [remoteStream]);

  return (
    <>
      <div className="videocall-container">
        <VideoGrid>
          <VideoCard name={localname||"User 1"} videoref={localvideoRef} hasStream={!!stream} />
           <VideoCard remvideoref={remotevideoRef} hasStream={!!remoteStream}name={remotename||"User 2"}  />
        </VideoGrid>
      </div>

      <div className="controls">
        <CallControls  />
      </div>
    </>
  );
}

export default Videocall;
 