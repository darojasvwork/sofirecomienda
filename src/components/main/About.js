import "../assets/styles.css";
import React, { Component } from "react";
import Nombre from "../assets/img/Nombre.svg";

class About extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">¿Quién soy?</h2>
            <h3 className="section-subheading text-muted">
              Mi nombre es Sofia Solano, pero mis amigas y amigos me
              llaman
            </h3>
            <div>
                <img className="nombre" alt="Sofi" src={Nombre} />
              </div>
          </div>          
        </div>
      </section>
    );
  }
}
export default About;