import "./App.css";
import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 className="weather-app-h1">Weather App</h1>
      <Weather defaultCity="London" />
      <footer>
        <p>
          This project was created by Yuliia Ukrainets and it is<span> </span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Julyuk/react-weather-app"
          >
            open-sourced on Github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
