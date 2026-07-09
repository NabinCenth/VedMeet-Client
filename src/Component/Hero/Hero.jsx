import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { SocketContext } from "../Context/SocketContext";
export default function Hero() {
  const { handleStart, handleJoin } = useContext(SocketContext);
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
            <button className="Joinbtn" onClick={handleJoin}>
              Join a Call
            </button>
            <button className="Startbtn" onClick={handleStart}>
              Start a Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
