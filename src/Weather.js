import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Search for a city..."></input>
        <input type="submit" value="Search" class="tn-secondary btn-sm"></input>
      </form>
      <h1>London, England</h1>
      <ul>
        <li>Monday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="weather icon"
          />
          6 °
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
