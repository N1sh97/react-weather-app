import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./Weatherinfo";
import axios from "axios";

export default function Weather() {
  const [weatherData, SetWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
  function search() {
    const apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search for a city..."></input>
          <input
            type="submit"
            value="Search"
            class="tn-secondary btn-sm"
            autoFocus="on"
            onChange={handleCityChange}
          ></input>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
