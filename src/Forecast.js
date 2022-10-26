import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      {" "}
      <div className="city">
        <span id="city">Warsaw</span>, <span id="date">Sunday 14:00</span>
      </div>
      <div id="description">Cloudy</div>
      <div className="temperature">
        <span id="temperature">☀19</span>°<span className="units">C</span>
      </div>
      <div className="last_section">
        Humidity <span id="humidity">60</span>% Wind
        <span id="wind"> 4</span>km/h
        <hr />
      </div>
      <div className="forecast" id="forecast"></div>
    </div>
  );
}
