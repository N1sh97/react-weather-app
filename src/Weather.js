import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Search for a city..."></input>
        <input
          type="submit"
          value="Search"
          class="tn-secondary btn-sm"
          autoFocus="on"
        ></input>
      </form>
      <h1>London</h1>
      <ul>
        <li>Monday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="weather icon"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation:15%</li>
            <li>Humidity:72%</li>
            <li> Wind:13 Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
