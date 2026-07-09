import {useRef,useEffect} from "react";
import VideoGrid from "../../Component/VideoCall/VideoGrid";
import VideoCard from "../../Component/VideoCall/VideoCard";
import CallControls from "../../Component/VideoCall/CallControls";
import "./VideoCall.css";
import { cameraPreview } from "../../Hooks/useMedia";

function Videocall() {
 const stream = cameraPreview();
  const localvideoRef = useRef(null);

  useEffect(() => {
    if (localvideoRef.current && stream) {
      localvideoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <>
      <div className="videocall-container">
        <VideoGrid>
          <VideoCard name="User 1" videoref={localvideoRef} /> <VideoCard name="User 2"  />
        </VideoGrid>
      </div>

      <div className="controls">
        <CallControls  />
      </div>
    </>
  );
}

export default Videocall;
 