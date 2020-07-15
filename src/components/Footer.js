import "../components/styles.css";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-left">
              Copyright © Sofi Comunica 2020
            </div>
            <div className="col-lg-6 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
