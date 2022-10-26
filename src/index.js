import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header";
import Forecast from "./Forecast";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="Background">
    <div className="Main">
      <Header />
      <Forecast />
      <Footer />
    </div>
  </div>
);
