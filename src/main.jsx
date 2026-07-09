import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./Component/Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import {SocketProvider} from "./Component/Context/SocketContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
