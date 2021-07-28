import "../assets/styles.css";
import React, { Component } from "react";
import { HashLink } from 'react-router-hash-link';

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
          <HashLink className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" smooth to="/#portfolio">Conocer más</HashLink>
        </div>
      </header>
    );
  }
}
export default Header;
