import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [temperature, setTemperature] = useState(null);
  let [icon, setIcon] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=dee9a420d2a7b5a314d3260f8ca83eea&units=metric`;
  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].description.toUpperCase());
    setHumidity();
    setWind();
  }
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let city = "Paris";
  axios.get(url).then(showWeather);
  return (
    <div>
      <form className="Header">
        <div className="form">
          <div>
            <input
              type="text"
              className="searchInput"
              placeholder="Type your city here"
              id="city-name"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Search"
              className="searchButton"
              id="search_button"
            />
          </div>
        </div>
      </form>{" "}
      <div className="city">
        <span id="city">{city}</span>, <span id="date">Sunday 14:00</span>
      </div>
      <div id="description">{description}</div>
      <div className="temperature">
        <span id="temperature">{temperature}</span>°
        <span className="units">C</span>
        <br></br>
        <img src={iconUrl} />
      </div>
      <div className="last_section">
        Humidity <span id="humidity">60</span>% Wind
        <span id="wind"> 4</span>km/h
        <hr />
      </div>
      <div className="forecastContainer">
        <div className="days">Friday</div>
        <div className="days">Saturday</div>
        <div className="days">Sunday</div>
        <div className="days">Monday</div>
        <div className="days">Tuesday</div>
        <div className="days">Wednesday</div>
      </div>
    </div>
  );
}
