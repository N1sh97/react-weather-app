import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather() {
  const [weatherData, SetWeatherData] = useState({ ready: false });
  function handleResponce(response) {
    console.log(response.data);
    SetWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li> Wind:{weatherData.wind}Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);

    return "Loading...";
  }
}
