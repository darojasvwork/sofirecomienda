import "../assets/styles.css";
import React, { Component } from "react";
import navbarlogo from "../assets/img/navbar-logo.svg";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      estilo: "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink",
    };
  }

  scroll() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 150) {
        if (
          this.state.estilo !==
          "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
        ) {
          this.setState({
            estilo:
              "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink",
          });
        }
      } else {
        if (
          this.state.estilo !==
          "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
        ) {
          this.setState({
            estilo:
              "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink",
          });
        }
      }
    });
  }

  componentDidMount() {
    this.scroll();
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <nav className={this.state.estilo} id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/#page-top">
            <img src={navbarlogo} alt="" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#about">
                  ¿Quién soy?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#services">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#portfolio">
                Lugares visitados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#contact">
                  Contactame
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
