import React, { Component } from 'react';
import OtherCityWeather from '../OtherCityWeather';
import './index.css';

export default class OtherCities extends Component {
  render() {
    return (
      <ul className="bottom__othercities">
        <h2 className="bottom__othercities__title">Other Cities</h2>
        <OtherCityWeather {...this.props}/>
        <OtherCityWeather {...this.props}/>
        <OtherCityWeather {...this.props}/>
      </ul>
    )
  }
}