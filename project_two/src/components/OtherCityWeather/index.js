import React, { Component } from "react";
import "./index.css";

export default class OtherCityWeather extends Component {
  render() {
    const {
      currentWeather: { name, main, weather },
    } = this.props;
    let iconId=weather ? weather[0].icon : `03d`;
    return (
      <li className="bottom__othercities__city">
        <span className="cityname">{name ? name : `Loading...`}</span>
        <span className="temp">{main ? `${parseInt(main.temp)}℃` : `Loading...`}</span>
        <img
          src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
          alt="weather_icon"
        />
        <span>{weather ? weather[0].main : `Loading...`}</span>
      </li>
    );
  }
}
