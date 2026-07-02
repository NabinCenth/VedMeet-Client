import { useState, useContext } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Videocall from "./Pages/VideoCallPage/Videocall";
import NavBar from "./Component/NavBar/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ShareModal from "./Component/ShareModal/ShareModal";
import ContextProvider from "./Component/Context/Context";
import { ContextData } from "./Component/Context/Context";
function App() {
  const navigate = useNavigate();
  const { RoomId, onStart, setOnStart } = useContext(ContextData);
  const onJoin = () => {
    navigate(`/videocall/${RoomId}`);
    setOnStart(false);
  };

  return (
    <>
      <div className="hero-glow"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/videocall/:roomId" element={<Videocall />} />
      </Routes>
      {onStart && <ShareModal roomId={RoomId} onJoin={onJoin} />}
    </>
  );
}

export default App;
