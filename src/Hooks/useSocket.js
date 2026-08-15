import { useEffect, useState } from "react";
import io from "socket.io-client";
const useSocket = () => {
  const [socket, setSocket] = useState(null);
const socketUrl = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";
  useEffect(() => {
    const NewSocket = io(socketUrl);
    setSocket(NewSocket);

    NewSocket.on("connect", () => {
      console.log("Connected:", NewSocket.id);
    });

    return () => NewSocket.disconnect();
  }, []);
  return socket;
};

export default useSocket;
