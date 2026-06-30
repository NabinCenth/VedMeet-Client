import React from "react";
import "./Hero.css";
export default function Hero() {
  const handleStart = () => {};
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
