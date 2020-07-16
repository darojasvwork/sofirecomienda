import "../assets/styles.css";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="masthead transbox">
        <div className="container">
          <div className="masthead-subheading">
            Bienvenido a Sofi Recomienda!
          </div>
          <div className="masthead-heading text-uppercase">
            Es un gusto conocerte
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Conocer más
          </a>
        </div>
      </header>
    );
  }
}
export default Header;
