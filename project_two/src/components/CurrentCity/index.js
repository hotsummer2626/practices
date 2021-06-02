import React, { Component } from "react";
import "./index.css";

export default class CurrentCity extends Component {
  render() {
    const {
      currentWeather: { name },
    } = this.props;
    return (
      <div className="upper__currentcity">{name ? name : `Loading...`}</div>
    );
  }
}
