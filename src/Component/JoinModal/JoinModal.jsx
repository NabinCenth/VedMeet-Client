import { useState,useContext } from "react";
import "./JoinModal.css";
import "../ShareModal/ShareModal.css";
import {ContextData} from "../Context/Context";
import { SocketContext } from "../Context/SocketContext";
import {useNavigate} from "react-router-dom";

function JoinModal({ onJoin }) {
  const { onJoinbtn, setOnJoinbtn } = useContext(ContextData);
  const { setInputRoomId,setInputName ,handleJoinRoom} = useContext(SocketContext);
  const [name, setName] = useState("");
  const [roomLink, setRoomLink] = useState("");
const navigate =useNavigate();
  const handleJoin = () => {
    if (!roomLink && !name) {
      return;
    }
    if (!name.trim() || !roomLink.trim()) return;
    setInputRoomId(roomExtract(roomLink));
  
    setInputName(name);
    // console.log("Extractedroom",roomExtract(roomLink));
    handleJoinRoom(name,roomExtract(roomLink));
    
  };
  const roomExtract=(roomLink)=>{try{ const url = new URL(roomLink);
    const pathseg=url.pathname.split('/').filter(Boolean);
    return pathseg[pathseg.length-1]; }
   catch{
    return roomLink.trim();
   }
  
  }
 const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    setOnJoinbtn(false);
  }
};

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <h2>Join a Call</h2>

        <input
          type="text"
          className="name-input"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="link-input"
          placeholder="Paste room link or ID"
          value={roomLink}
          onChange={(e) => setRoomLink(e.target.value)}
        />

        <button className="join-btn" onClick={handleJoin}>
          Start Call
        </button>
      </div>
    </div>
  );
}

export default JoinModal;