import React, { Component } from "react";
import { Link } from "react-scroll";
import Profile_photo from "./img/profile_photo.jpeg";
import "./index.css";

export default class Nav extends Component {
  render() {
    const pageElements = ["home", "about", "education", "portfolio", "contact"];
    return (
      <div className="nav1">
        <div className="nav1__img">
          <img src={Profile_photo} alt="photo" />
        </div>
        <h1>JUNQI SU</h1>
        <h2>Front End Developer</h2>
        <ul className="nav1__menu">
          {pageElements.map((pageElement) => {
            return (
              <Link
                activeClass="active"
                to={pageElement}
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="nav1__menu__item"
              >
                {pageElement}
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
