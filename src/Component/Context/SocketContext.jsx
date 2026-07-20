import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import useSocket from "../../Hooks/useSocket";
import { ContextData } from "./Context";
export const SocketContext = createContext();
export const SocketProvider = ({ children }) => {
  const [inputRoomId, setInputRoomId] = useState(null);
  const [inputName, setInputName] = useState(null);
  const [isOfferer, setisOfferer] = useState(null);//To distinguish who is Remote and Local
  const socket = useSocket();
  const { RoomId, setContextValue } = useContext(ContextData);
  const { onStart, setOnStart } = useContext(ContextData);
  const { onJoinbtn, setOnJoinbtn } = useContext(ContextData);
  const navigate=useNavigate();
  const handleJoinRoom = (name,roomIdExtract) => {
    setOnJoinbtn(false);
    const data = {
      name: name,
      roomId: roomIdExtract,
    };
    if (!name || !roomIdExtract) {
      return;
    } else {
      socket?.emit("joinRoom", data);
      setContextValue(data.roomId);
      setisOfferer(false);
      navigate(`/videocall/${roomIdExtract}`);
    }
  };

  useEffect(() => {
    const handleRoomCreated = (data) => {
      console.log("Room created with ID:", data.roomId);
      setContextValue(data.roomId);
      setOnStart(true);
    };
    socket?.once("room-created", handleRoomCreated);
    return () => {
      socket?.off("room-created", handleRoomCreated);
      console.log("socket off");
    };
  }, [socket]);
  const handleStartRoom = () => {
  
        if (RoomId) {
      setOnStart(true); // reopen modal with existing room
      return;
    }

    socket?.emit("createRoom");
    setisOfferer(true);
  };
  return (
    <SocketContext.Provider
      value={{
       handleStartRoom,
        handleJoinRoom,
        setInputRoomId,
        setInputName,
        isOfferer,socket
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
