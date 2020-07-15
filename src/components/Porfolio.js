import "../components/styles.css";
import React, { Component } from "react";

class Porfolio extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Lugares visitados
            </h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/01-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Orosi</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Visita a Orosi
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/02-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Chirripó</div>
                  <div className="portfolio-caption-subheading text-muted">
                    El Chirripó
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/03-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Playa Danta</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Visita a Playa Danta
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/04-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Prusia</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Visita a Prusia
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/05-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Torruguero</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Visita a Tortuguero
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/06-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Monteverde</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Visita a Monteverde
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Porfolio;
