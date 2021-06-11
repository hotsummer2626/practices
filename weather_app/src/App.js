import React, { Component } from "react";
import LoadingElement from "./components/LoadingElement";
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
          <LoadingElement loading={this.state.loading} />
        ) : (
          <WeatherResult {...this.state} />
        )}
      </div>
    );
  }
}
