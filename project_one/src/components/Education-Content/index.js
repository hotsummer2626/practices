import React, { Component } from "react";
import "./index.css";

export default class EducationContent extends Component {
  render() {
    return (
      <div className="education__content__info">
        <div className="icon">
          <i className="bi bi-book"></i>
        </div>
        <div className="line"></div>
        <div className="year">2016</div>
        <h3>Front End Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sint, qui mollitia sed pariatur velit quisquam aliquid
        </p>
      </div>
    );
  }
}
