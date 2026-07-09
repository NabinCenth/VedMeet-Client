import { createContext, useState } from "react";
export const ContextData = createContext();

function ContextProvider({ children }) {
  const [remoteStream, setRemoteStream] = useState(null);
  const [RoomId, setContextValue] = useState();
  const [onStart, setOnStart] = useState(false);
const [onJoinbtn,setOnJoinbtn] = useState(false);
  return (
    <ContextData.Provider value={{ RoomId, setContextValue, onStart, setOnStart, onJoinbtn, setOnJoinbtn,remoteStream,setRemoteStream }}>
      {children}
    </ContextData.Provider>
  );
}

export default ContextProvider;
