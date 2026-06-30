import React from "react";
import VideoGrid from "../../Component/VideoCall/VideoGrid";
import VideoCard from "../../Component/VideoCall/VideoCard";
import CallControls from "../../Component/VideoCall/CallControls";
import "./VideoCall.css";
function Videocall() {
  return (
    <>
      <div className="videocall-container">
        <VideoGrid>
          <VideoCard name="User 1" /> <VideoCard name="User 2" />
        </VideoGrid>
      </div>

      <div className="controls">
        <CallControls />{" "}
      </div>
    </>
  );
}

export default Videocall;
