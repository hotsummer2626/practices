import React, { Component } from "react";
import "./index.css";

export default class CurrentWeather extends Component {

  render() {
    const {
      currentWeather: { main, wind, weather },
    } = this.props;
    return (
      <div className="upper__currentweather">
        <div className="upper__currentweather__temp">
          {main ? `${parseInt(main.temp)}℃` : `Loading...`}
        </div>
        <div className="upper__currentweather__catagory">
          {weather ? weather[0].main : `Loading...`}
        </div>
        <div className="upper__currentweather__condition">
          <div>
            <span className="catagory">humidity</span>
            <span>{main ? `${main.humidity}%` : `Loading...`}</span>
          </div>
          <div className="line"></div>
          <div>
            <span className="catagory">Wind</span>
            <span>{wind ? `${wind.speed} M/S` : `Loading...`}</span>
          </div>
        </div>
      </div>
    );
  }
}
