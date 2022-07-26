import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherText, setWeatherTet] = useState("");
  const [weatherIcon, setWeatherIcon] = useState();
  const [temp, setTemp] = useState();
  const [wind, setWind] = useState();
  const [cloud, setCloud] = useState();
  const [humidity, setHumidity] = useState();

  const fetchWeatherData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data.location.name);
        setWeatherTet(data.current.condition.text);
        setWeatherIcon(data.current.condition.icon);
        setTemp(data.current.temp_f);
        setWind(data.current.wind_mph);
        setCloud(data.current.cloud);
        setHumidity(data.current.humidity);
      });
  };

  useEffect(() => {
    fetchWeatherData(
      "http://api.weatherapi.com/v1/current.json?key=43fa591463bd4c9aa75152802222607&q=Jacksonville&aqi=no"
    );
  }, []);

  return (
    <div className="city-text">
      <h3>{city} area</h3>
      <div className="weather-container">
        <div className="weather-text-container">
          <p>Temp: {temp} ℉ </p>
          <p>Wind: {wind} mph</p>
          <p>Cloud: {cloud} %</p>
          <p>Humidity: {humidity} %</p>
        </div>
        <div className="weather-icon-container">
          <p>{weatherText}</p>
          <img src={weatherIcon} alt="" id="weather-icon" />
        </div>
      </div>
    </div>
  );
};

export default Weather;
