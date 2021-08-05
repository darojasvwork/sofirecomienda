import "../assets/styles.css";
import React, { Component } from "react";
import Loader from "../general/loader";
import banner from "../assets/img/eventos/01/full.webp";
import Example from "./emprendimientos";

class Diamadre extends Component {
  renderEmpredimientos() {
    return (
      <div>
        <Example />
      </div>
    );
  }

  renderDiaMadre() {
    if (!this.props) {
      return (
        <section className="page-section bg-light" id="Lugares">
          <div className="container">
            <Loader message="Loading.." />
          </div>
        </section>
      );
    } else {
      document.documentElement.style.setProperty(
        "--imageBackground",
        `url(${banner})`
      );
      return (
        <section className="page-section" id="Lugares">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading ">
                Guía de recomendaciones para el día de la madre
              </h2>
              <hr />
              <p>Publicado el 4 de agosto de 2021</p>

              <div className="ui divider"></div>
              {/* Preview Image */}
              <div className="ui fluid imagenBanner image">
                <div class="ui blue ribbon label">
                  <i class="tasks icon"></i> Guía de recomendaciones
                </div>
              </div>

              {/* Post Content */}
              <h4 class="ui horizontal divider header">
                <i class="heart icon"></i>Día de la madre
              </h4>
              <div class="text-left review">
                <p>
                  Muchos buscamos un regalo o un lugar perfecto para celebrar y
                  pasar un hermoso día. Esos momentos especiales viendo en la
                  cara de nuestra madre una sonrisa, una lágrima de felicidad o
                  asombro de una sorpresa, es inolvidable.{" "}
                </p>
                <p>
                  Aprovecha este mes para hacerle saber a ella cuanto la
                  aprecias y cuan agradecido estás por todo lo que ha hecho por
                  vos. Para ayudarte a buscar una opción perfecta he creado una
                  guía con regalos y lugares que además de ser excelentes
                  opciones te brindan descuentos o algún regalo extra si los
                  eliges.
                </p>
              </div>

              <div class="ui icon teal message">

                
                <i class="bullhorn icon"></i>
                <div class="content">
                  <div class="header">Menciona que lo viste en Sofi Recomienda y recibirás descuentos
                    o algún producto extra gratis.</div>

                </div>
              </div>
              {this.renderEmpredimientos()}
            </div>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div>{this.renderDiaMadre()}</div>;
  }
}
export default Diamadre;
