import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { SocketContext } from "../Context/SocketContext";
import { ContextData } from "../Context/Context";
export default function Hero() {
  const { handleStartRoom } = useContext(SocketContext);
  const{setOnJoinbtn,setOnStart,RoomId}=useContext(ContextData);
  const handlejoinBUtton=()=>{
    setOnJoinbtn(true);
  }
  const handleStartButton=()=>{
     
setOnStart(true);
  }
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
            <button className="Joinbtn" onClick={handlejoinBUtton}>
              Join a Call
            </button>
            <button className="Startbtn" onClick={handleStartRoom}>
              Start a Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
