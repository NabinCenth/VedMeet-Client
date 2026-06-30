import { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Videocall from "./Pages/VideoCallPage/Videocall";
import NavBar from "./Component/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="hero-glow"></div>
      <NavBar />
      {/* <Landing/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/videocall" element={<Videocall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
