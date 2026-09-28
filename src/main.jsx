import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { CarProvider } from "./context/CarContext";

import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarProvider>
        <App/>
      </CarProvider>
    </BrowserRouter>
  </React.StrictMode>
);