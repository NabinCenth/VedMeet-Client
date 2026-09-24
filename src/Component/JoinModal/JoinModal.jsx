import { useState,useContext } from "react";
import "./JoinModal.css";
import "../ShareModal/ShareModal.css";
import {ContextData} from "../Context/Context";
import { SocketContext } from "../Context/SocketContext";
import {useNavigate} from "react-router-dom";
import IconBadge from "../Icon Badge/IconBadge";
import { FiUsers } from "react-icons/fi";

function JoinModal({ onJoin, handleUrlRoomID }) {
  const { onJoinbtn, setOnJoinbtn } = useContext(ContextData);
  const { setInputRoomId,setInputName ,handleJoinRoom} = useContext(SocketContext);
  const [name, setName] = useState("");
  const [roomLink, setRoomLink] = useState("");
  const roomValue = handleUrlRoomID || roomLink;

  const handleJoin = () => {
    if (!roomValue && !name) {
      return;
    }
    if (!name.trim() || !roomValue.trim()) return;
    setInputRoomId(roomExtract(roomValue));
  
    setInputName(name);
    // console.log("Extractedroom",roomExtract(roomLink));
    handleJoinRoom(name,roomExtract(roomValue));
    
  };
 const roomExtract = (input) => {
  const text = input.trim();
  try {
    const url = new URL(text, window.location.origin);
    const fromQuery = url.searchParams.get("room");
    if (fromQuery) return fromQuery;
    const seg = url.pathname.split("/").filter(Boolean);
    return seg[seg.length - 1] ?? "";
  } catch {
    return text;
  }
};
 const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    setOnJoinbtn(false);
  }
};

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
       <IconBadge> <FiUsers size={40}  /></IconBadge>
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
          value={roomValue}
          onChange={(e)=>{ setRoomLink(e.target.value);}}
          readOnly={Boolean(handleUrlRoomID)}
        />

        <button className="join-btn" onClick={handleJoin}>
          Start Call
        </button>
      </div>
    </div>
  );
}

export default JoinModal;