import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import { ContextProvider } from "./context/Context";
// axios.defaults.baseURL = "http://localhost:8800/api/";
axios.defaults.baseURL = "https://opezeebackendmain.onrender.com/api/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
