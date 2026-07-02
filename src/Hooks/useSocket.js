import { useEffect, useState } from "react";
import io from "socket.io-client";
const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const NewSocket = io("http://localhost:5000");
    setSocket(NewSocket);

    NewSocket.on("connect", () => {
      console.log("Connected:", NewSocket.id);
    });

    return () => NewSocket.disconnect();
  }, []);
  return socket;
};

export default useSocket;
