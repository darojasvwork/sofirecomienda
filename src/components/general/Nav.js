import "../assets/styles.css";
import React, { Component } from "react";
import navbarlogo from "../assets/img/navbar-logo.svg";
import { HashLink } from 'react-router-hash-link';


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
          <HashLink className="navbar-brand js-scroll-trigger" smooth to="/#page-top"><img src={navbarlogo} alt="" /></HashLink>
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
                <HashLink className="nav-link js-scroll-trigger" smooth to="/#about">¿Quién soy?</HashLink>       
              </li>
              <li className="nav-item">
                <HashLink className="nav-link js-scroll-trigger" smooth to="/#services">Servicios</HashLink>       
              </li>
              <li className="nav-item">
                <HashLink className="nav-link js-scroll-trigger" smooth to="/#portfolio">Recomendaciones</HashLink>       
              </li>
              <li className="nav-item">
              <HashLink className="nav-link js-scroll-trigger" smooth to="/#contactame">Contactame</HashLink>                                                  
              </li>              
            </ul>            
          </div>          
        </div>        
      </nav>      
    );
  }
}
export default Nav;
