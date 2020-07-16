import "../assets/styles.css";
import React, { Component } from "react";
import FotoSofi from "../assets/img/team/Sofi.jpg";

class Team extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Redes Sociales</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={FotoSofi} alt="" />
                <div>
                  <h4>Sofia Solano Aguilar</h4>
                  <p className="large text-muted">
                    Sigueme en Instagram como{" "}
                    <a
                      className="redes"
                      href="https://www.instagram.com/sofi.recomienda/"
                    >
                      @sofi.recomienda
                    </a>{" "}
                    o escribeme a mi correo{" "}
                    <a className="redes" href="mailto:info@sofirecomienda.com">
                      info@sofirecomienda.com
                    </a>
                    .
                  </p>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="https://www.instagram.com/sofi.recomienda/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="mailto:info@sofirecomienda.com"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Team;
