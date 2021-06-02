import React, { Component } from "react";
import axios from "axios";
import CurrentWeather from "./components/CurrentWeather";
import CurrentCity from "./components/CurrentCity";
import OtherCities from "./components/OtherCities";
import NextFiveDays from "./components/NextFiveDays";
import "./App.css";

export default class App extends Component {
  state = { currentWeather: {}, nextFiveDays: {} };

  componentDidMount() {
    const defaultUrl = "http://api.openweathermap.org/data/2.5";
    const apiKey = "e81ba22bb4b265a3f48520919ab1e382";
    const apiKey1='c6b62e270cc66f15079796009f3c3769';

    axios
      .get(`${defaultUrl}/weather?id=2147714&units=metric&appid=${apiKey}`)
      .then(
        (response) => {
          this.setState({ currentWeather: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
      axios
      .get(`http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=${apiKey1}`)
      .then(
        (response) => {
          this.setState({ nextFiveDays: response.data });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className="container">
        <div className="upper">
          <CurrentWeather {...this.state} />
          <CurrentCity {...this.state} />
        </div>
        <div className="bottom">
          <OtherCities {...this.state} />
          <div className="line"></div>
          <NextFiveDays />
        </div>
      </div>
    );
  }
}
