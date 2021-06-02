import React, { Component } from "react";
import PortfolioContent from "../Portfolio-Content";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <section className="portfolio">
        <div className="portfolio__title">
          My&nbsp;
          <span>Portfolio</span>
        </div>
        <div className="portfolio__content">
          <PortfolioContent/>
          <PortfolioContent/>
          <PortfolioContent/>
          <PortfolioContent/>
          <PortfolioContent/>
          <PortfolioContent/>
        </div>
      </section>
    );
  }
}
