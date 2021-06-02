import React, { Component } from 'react';
import NextFiveDaysWeather from '../NextFiveDaysWeather';
import './index.css';

export default class NextFiveDays extends Component {
  render() {
    return (
      <ul className="bottom__nextfivedays">
        <NextFiveDaysWeather/>
        <NextFiveDaysWeather/>
        <NextFiveDaysWeather/>
        <NextFiveDaysWeather/>
        <NextFiveDaysWeather/>
      </ul>
    )
  }
}