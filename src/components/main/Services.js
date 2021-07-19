import "../assets/styles.css";
import React, { Component } from "react";
import Rosa from "../assets/img/Iconos/Rosa.svg";

class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Servicios</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-star fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Lo nuevo</h4>
              <p className="text-muted">
                Sección donde damos a conocer productos de diversos emprendimientos.
              </p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-spa fa-stack-1x fa-inverse"></i>                
              </span>
              <h4 className="my-3">Inspecciones</h4>
              <p className="text-muted">
                Vamos a restaurantes, alojamientos y lugares turísticos y hacemos una inspección desde el punto de vista de una directora de empresas.
              </p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-heart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Historias que inspiran</h4>
              <p className="text-muted">
              	Damos a conocer las historias que hay detrás de los emprendimientos.
              </p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-dove fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Noticias</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
