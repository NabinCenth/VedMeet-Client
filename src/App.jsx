import { useState, useContext,useEffect} from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Videocall from "./Pages/VideoCallPage/Videocall";
import NavBar from "./Component/NavBar/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,useSearchParams
} from "react-router-dom";
import ShareModal from "./Component/ShareModal/ShareModal";
import { ContextData } from "./Component/Context/Context";
import JoinModal from "./Component/JoinModal/JoinModal";
import {SocketProvider} from "./Component/Context/SocketContext";
function App() {
  const navigate = useNavigate();
  const { RoomId, onStart, setOnStart ,onJoinbtn,setOnJoinbtn,setContextValue} = useContext(ContextData);
  const [searchParams] = useSearchParams();
const roomFromLink = searchParams.get("room");
const [urlRoomId, setUrlRoomId] = useState(null);
useEffect(() => {
  if (roomFromLink) {
    setContextValue(roomFromLink);
    setOnJoinbtn(true);
    setUrlRoomId(roomFromLink);
  }
}, [roomFromLink]);
  return (
    <>
      <div className="hero-glow"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/videocall/:roomId" element={<Videocall />} />
      </Routes>
      {onStart && <ShareModal roomId={RoomId}    message={RoomId?null:"Error Occured while creating new Room" }/>}
     { onJoinbtn && <JoinModal handleUrlRoomID={urlRoomId}/>}
    </>
  );
}

export default App;
