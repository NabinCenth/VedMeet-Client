import React, { useContext, useState } from "react";
import "./Hero.css";
import useSocket from "../../Hooks/useSocket";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Context/Context";
export default function Hero() {
  const socket = useSocket();
  const navigate = useNavigate();
  const { RoomId, setContextValue } = useContext(ContextData);
  const{ onStart, setOnStart } = useContext(ContextData);

  const handleStart = () => {
    if (socket) {
      socket.emit("createRoom");
      socket.on("room-created", (data) => {
        console.log("Room created with ID:", data.roomId);
        setContextValue(data.roomId);
       setOnStart(true);
      });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Meet Anyone <br /> Anywhere
          </h1>
          <p className="hero-sub">
            Instant video calls. No downloads. Just share a link.
          </p>

          <div className="hero-buttons">
            <button className="Joinbtn">Join a Call</button>
            <button className="Startbtn" onClick={handleStart}>
              Start a Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
