import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Mengidentifikasi elemen root pada index.html
const rootElement = document.getElementById("root");

// Membuat root React DOM dan merender komponen utama
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
