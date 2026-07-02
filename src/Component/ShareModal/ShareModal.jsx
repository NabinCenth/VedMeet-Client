import { useState, useContext } from "react";
import Toast from "../Toast/Toast";
import "./ShareModal.css";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Context/Context";
function ShareModal({ roomId, onJoin }) {
  const ContextValue = useContext(ContextData);
  const [shareLink, setShareLink] = useState(
    `${window.location.origin}/videocall/${ContextValue.RoomId}`,
  );
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Start a Call</h2>
          <p>Share this link with others:</p>

          <input
            type="text"
            value={shareLink}
            readOnly
            className="share-link"
          />

          <button onClick={handleCopy}>Copy Link</button>
          <button onClick={onJoin}>Join Call</button>
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
