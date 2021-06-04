import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import "./App.css";

export default class App extends Component {
  state = {
    weatherIcon: undefined,
    description: undefined,
    temperature: undefined,
    location: undefined,
    min: undefined,
    max: undefined,
    humidity: undefined,
    loading: false,
    initial: true,
  };

  updateWeather = (newWeatherObj) => {
    this.setState({ ...newWeatherObj });
  };

  render() {
    const override = `
    display: block;
    margin: 0 auto;
    border-color: black;
    `;

    return (
      <div
        className={this.state.temperature > 16 ? "container warm" : "container"}
      >
        {/* <div className="title">
          <i className="fa fa-cloud"></i>Weather App
        </div> */}
        <SearchBar updateWeather={this.updateWeather} />
        {/* <div className="subtitle">Live weather condition</div> */}
        {this.state.initial ? (
          <h1></h1>
        ) : this.state.loading ? (
          <div className="loader-container">
            <ScaleLoader
              css={override}
              size={200}
              color={"#fff"}
              loading={this.state.loading}
            />
          </div>
        ) : (
          <WeatherResult {...this.state} />
        )}
      </div>
    );
  }
}
