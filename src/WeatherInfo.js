import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 together">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>

          <div className="Temp">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit ">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
