import React, { Component } from "react";
import "./index.css";

export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact__title">
          Contact&nbsp;
          <span>Me</span>
        </div>
        <div className="contact__content">
          <div className="contact__content__left">
            <h3>contact info</h3>
            <p>
              <i className="bi bi-envelope-fill"></i>&nbsp;
              <span>hotsummer2626@gmail.com</span>
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i>&nbsp;
              <span>123123123</span>
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i>&nbsp;
              <span>123123123</span>
            </p>
            <p>
              <i className="bi bi-geo-alt-fill"></i>&nbsp;
              <span>151 Phillip St Waterloo, NSW 2017</span>
            </p>
          </div>
          <div className="contact__content__right">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Project Name" />
              <textarea
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button>
                Send
                <i className="bi bi-forward-fill"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
