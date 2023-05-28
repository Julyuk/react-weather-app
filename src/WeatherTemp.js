import React, { useState } from "react";
export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit ">°C</span>
        <span className="unit "> | </span>
        <span className="unit ">
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{farenheit()}</span>
        <span className="unit ">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
        <span className="unit "> | </span> <span className="unit ">°F</span>
      </div>
    );
  }
}
