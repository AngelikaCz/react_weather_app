import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [temperature, setTemperature] = useState(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=dee9a420d2a7b5a314d3260f8ca83eea&units=metric`;
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  temperature = "Paris";
  axios.get(url).then(showTemperature);
  return (
    <div>
      {" "}
      <div className="city">
        <span id="city">{temperature}</span>,{" "}
        <span id="date">Sunday 14:00</span>
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
