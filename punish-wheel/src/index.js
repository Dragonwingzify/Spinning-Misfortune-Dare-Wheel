import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SpinsContextProvider } from "./context/SpinContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SpinsContextProvider>
      <App />
    </SpinsContextProvider>
  </React.StrictMode>
);
