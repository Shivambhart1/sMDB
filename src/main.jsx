import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import App from "./App.jsx";
import "./index.css";

const setRating = () => {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} size={30} defaultRating={4} /> */}
  </React.StrictMode>
);
