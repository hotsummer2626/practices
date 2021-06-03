import React, { Component } from "react";
import axios from "axios";
import "./index.css";

export default class SearchBar extends Component {
  getWeather = () => {
    let cityName = this.cityNameElement.value;
    const defaultUrl = "http://api.openweathermap.org/data/2.5";
    const apiKey = "e81ba22bb4b265a3f48520919ab1e382";
    this.props.updateWeather({ loading: true });
    axios.get(`${defaultUrl}/weather?q=${cityName}&appid=${apiKey}`).then(
      (response) => {
        const data = response.data;
        const newWeather = {
          weatherIcon: data.weather[0].icon,
          description: data.weather[0].description,
          temperature: parseFloat(data.main.temp - 273.15).toFixed(1),
          location: `${data.name} | ${data.sys.country}`,
          min: parseFloat(data.main.temp_min - 273.15).toFixed(1),
          max: parseFloat(data.main.temp_max - 273.15).toFixed(1),
          humidity: data.main.humidity,
          loading: false,
        };
        this.props.updateWeather(newWeather);
      },
      (error) => {
        alert(error.message);
        this.props.updateWeather({ loading: false });
        this.cityNameElement.value = "";
      }
    );
  };

  render() {
    return (
      <div className="form">
        <input
          ref={(c) => (this.cityNameElement = c)}
          type="text"
          name="city"
          placeholder="please enter city name"
        />
        <button onClick={this.getWeather} className="search">
          Search
        </button>
      </div>
    );
  }
}
