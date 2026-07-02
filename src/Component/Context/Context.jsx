import { createContext, useState } from "react";
export const ContextData = createContext();

function ContextProvider({ children }) {
  const [RoomId, setContextValue] = useState();
  const [onStart, setOnStart] = useState(false);

  return (
    <ContextData.Provider value={{ RoomId, setContextValue, onStart, setOnStart }}>
      {children}
    </ContextData.Provider>
  );
}

export default ContextProvider;
