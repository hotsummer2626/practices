import React, { Component } from "react";
import "./index.css";

export default class About extends Component {
  render() {
    const personalInfos = [
      { key: "Name", value: "JUNQI SU" },
      { key: "Age", value: "29" },
      { key: "Qualification", value: "BMS" },
      { key: "Post", value: "Front End Developer" },
      { key: "Language", value: "Chinese" },
    ];

    return (
      <section className="about">
        <div className="about__title">
          About&nbsp;
          <span>Me</span>
        </div>
        <div className="about__content">
          <div className="about__content__left">
            {personalInfos.map((personalInfo) => {
              return (
                <p>
                  {personalInfo.key}:&nbsp;
                  <span>{personalInfo.value}</span>
                </p>
              );
            })}
            <a href="#">
              Download CV&nbsp;<i className="bi bi-download"></i>
            </a>
          </div>
          <div className="about__content__right">
            <div className="about__content__right__info">
              <p>2+</p>
              <span>Years Of</span>
              <span>Experience</span>
            </div>
            <div className="about__content__right__info">
              <p>100+</p>
              <span>Projects</span>
              <span>Completed</span>
            </div>
            <div className="about__content__right__info">
              <p>140+</p>
              <span>Happy</span>
              <span>Customers</span>
            </div>
            <div className="about__content__right__info">
              <p>10+</p>
              <span>Awards Won</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
