import "../assets/styles.css";
import React, { Component } from "react";
import { HashLink } from 'react-router-hash-link';

class Header extends Component {
  render() {
    return (
      <header className="masthead transbox">
        <div className="container">
          <div className="masthead-heading">
            ¡Día de la madre en Sofi Recomienda!
          </div>
          <div className="masthead-subheading">            
            En este mes de agosto preparamos una guía de recomendaciones para el día de la madre
          </div>
          <HashLink className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" smooth to="/mama">Mírala acá</HashLink>
        </div>
      </header>
    );
  }
}
export default Header;
