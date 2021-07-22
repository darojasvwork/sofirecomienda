import "../assets/styles.css";
import React, { Component } from "react";
import FotoSofi from "../assets/img/team/Sofi.jpg";

class Contactame extends Component {
  render() {
    return (
      <section className="page-section bg-light" id="contactame">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contactame</h2>
            <h3 className="section-subheading text-muted">
              Contactame a través de los siguientes canales.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={FotoSofi} alt="" />
                <div>
                  <h4>Sofia Solano Aguilar</h4>
                  <br />                 
                </div>
                <div className="card-group">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a
                          className="btn btn-dark btn-social mx-2"
                          href="https://www.instagram.com/sofi.recomienda/"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </h5>
                      <p className="card-text">
                        {" "}
                        <a
                          className="redes"
                          href="https://www.instagram.com/sofi.recomienda/"
                        >
                          @sofi.recomienda
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        <a
                          className="btn btn-dark btn-social  mx-4"
                          href="https://www.facebook.com/sofirecomienda/"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </h5>
                      <p className="card-text">
                        <a
                          className="redes"
                          href="https://www.facebook.com/sofirecomienda/"
                        >
                          @sofirecomienda
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        <a
                          className="btn btn-dark btn-social mx-4"
                          href="https://api.whatsapp.com/send?phone=50687573623&text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20acerca%20de%20los%20servicios%20que%20brinda%20Sofi%20Recomienda"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </h5>
                      <p className="card-text">
                        {" "}
                        <a
                          className="redes"
                          href="https://api.whatsapp.com/send?phone=50687573623&text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20acerca%20de%20los%20servicios%20que%20brinda%20Sofi%20Recomienda"
                        >
                          +506 8757 3623
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                      <a
                    className="btn btn-dark btn-social mx-4"
                    href="mailto:info@sofirecomienda.com"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                      </h5>
                      <p className="card-text">
                  <a className="redes" href="mailto:info@sofirecomienda.com">
                    info@sofirecomienda.com
                  </a>
                      </p>
                    </div>
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
export default Contactame;
