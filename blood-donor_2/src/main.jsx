import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { AppContextProvider } from "./shared/App.contex.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <AppContext.Provider value={["asad", "ani"]}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // </AppContext.Provider>

);
