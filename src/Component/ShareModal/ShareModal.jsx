import { useState, useContext } from "react";
import Toast from "../Toast/Toast";
import "./ShareModal.css";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Context/Context";
import { SocketContext } from "../Context/SocketContext";
import { useWebrtc } from "../../Hooks/useWebrtc";
function ShareModal({ roomId, message }) {


  const { handleStartRoom } = useContext(SocketContext);
  const { RoomId, setOnStart } = useContext(ContextData);
  
  const [shareLink, setShareLink] = useState(
    `${window.location.origin}/videocall/${RoomId}`,
  );
const navigate=useNavigate();
  const [copied, setCopied] = useState(false);
//handle SOcket ROom
const handleStart=()=>{
  setOnStart(false);
navigate(`/videocall/${RoomId}`)
}
  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setOnStart(false);
    }
  };
  return (
    <>
      <div className="modal-overlay" onClick={handleBackdropClick}>
        <div className="modal-content">
          <h2>Start a Call</h2>
          <p>Share this link with others:</p>

          <input
            type="text"
            value={!message ? shareLink : message}
            readOnly
            className="share-link"
          />

          <button onClick={handleCopy}>Copy Link</button>
          <button onClick={handleStart}>Start Call</button>
        </div>
      </div>
      {copied && (
        <Toast
          message="Link copied to clipboard!"
          type="success"
          duration={3000}
        />
      )}
    </>
  );
}

export default ShareModal;
