import React, { Component } from "react";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="home__content">
          <div className="home__content__subtitle">hi there!</div>
          <div className="home__content__title">
            I'M
            <span>JUNQI SU</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            molestias iusto pariatur reprehenderit ut nihil? Non, quas assumenda
            natus corporis harum consequatur tempora voluptates eius esse
            architecto dolorum ullam repellat.
          </p>
          <a href="#">
            About Me&nbsp;
            <i className="bi bi-person-fill"></i>
          </a>
        </div>
      </section>
    );
  }
}
