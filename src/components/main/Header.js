import "../assets/styles.css";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="masthead transbox">
        <div className="container">
          <div className="masthead-heading">
            ¡Bienvenido a Sofi Recomienda!
          </div>
          <div className="masthead-subheading">
            Descubramos juntos ¿Qué comer? ¿Dondé ir? y ¿Qué nuevo experimentar?
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
