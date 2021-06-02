import React, { Component } from "react";
import EducationContent from '../Education-Content'
import "./index.css";

export default class Education extends Component {
  render() {
    return (
      <section className="education">
        <div className="education__title">
          My&nbsp;
          <span>Education</span>
        </div>
        <div className="education__content">
          <EducationContent/>
          <EducationContent/>
          <EducationContent/>
          <EducationContent/>
          <EducationContent/>
          <EducationContent/>
        </div>
      </section>
    );
  }
}
