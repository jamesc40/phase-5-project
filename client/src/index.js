import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bulma/css/bulma.min.css";
import "bulma-list/css/bulma-list.css";
import "bulma-switch/dist/css/bulma-switch.min.css";
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
