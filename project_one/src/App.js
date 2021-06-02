import React, { Component } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="main">
          <Home/>
          <About/>
          <Education/>
          <Portfolio/>
          <Contact/>
        </div>
      </div>
    );
  }
}
