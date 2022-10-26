import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header";
import Forecast from "./Forecast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div className="Main">
      <Header />
      <Forecast />
    </div>
  </div>
);
