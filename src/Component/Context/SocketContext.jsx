import { createContext,useState } from "react";
import { useContext, useEffect } from "react";
import useSocket  from "../../Hooks/useSocket";
import { ContextData } from "./Context";
export const SocketContext = createContext();
export const SocketProvider = ({ children}) => {
  const [inputRoomId,setInputRoomId]=useState(null);
  const[inputName,setInputName]=useState(null);
   const socket = useSocket();
  const { RoomId, setContextValue } = useContext(ContextData);
  const{ onStart, setOnStart } = useContext(ContextData);
const{ onJoinbtn, setOnJoinbtn } = useContext(ContextData);
const handleJoin = () => {
  setOnJoinbtn(true);
  const data ={
    name:inputName,
    roomId:inputRoomId
  }
  if(!inputRoomId || !inputName){

    return;
  }
  else{

 
socket?.emit("joinRoom",data);

 }
}

useEffect(() => {
const handleRoomCreated = (data) => {
   console.log("Room created with ID:", data.roomId);
        setContextValue(data.roomId);
       setOnStart(true);
}
      socket?.once("room-created", handleRoomCreated);
      return ()=> {socket?.off("room-created", handleRoomCreated);
        console.log("socket off")};
    }
,[socket]);
 const handleStart = () => {
     if (RoomId) {
    setOnStart(true); // reopen modal with existing room
    return;
  }
      socket?.emit("createRoom");
    }
return(
    <SocketContext.Provider value={{ handleStart, handleJoin,setInputRoomId,setInputName }}>
      {children}
    </SocketContext.Provider>
  );

}
