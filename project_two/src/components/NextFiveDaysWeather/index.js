import React, { Component } from 'react';
import './index.css';

export default class NextFiveDaysWeather extends Component {
  render() {
    return (
      <li className="bottom__nextfivedays__day">
        <span className="week">mon</span>
        <span className="temp">13</span>
        <span className="catagory">
          <i className="bi bi-cloud-drizzle"></i>
          <span>rain</span>
        </span>
      </li>
    )
  }
}