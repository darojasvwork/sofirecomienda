import "../assets/styles.css";
import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contáctame</h2>
            <h3 className="section-subheading text-muted">
              Puedes contactarme a través de los siguientes canales.
            </h3>
          </div>
          <form id="contactForm" name="sentMessage" noValidate="V">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Nombre *"
                    required="required"
                    data-validation-required-message="Por favor ingresa tu nombre."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Correo electrónico *"
                    required="required"
                    data-validation-required-message="Por favor ingresa tu dirección de correo electrónico."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group mb-md-0">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Teléfono *"
                    required="required"
                    data-validation-required-message="Por favor ingresa tu teléfono."
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Mensaje *"
                    required="required"
                    data-validation-required-message="Por favor ingresa un mensaje."
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default Contact;
