import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "moment";
import "moment-timezone";
import "moment/locale/es";
import { Link } from "react-router-dom";
import RosaActiva from "../assets/img/Iconos/RosaActiva.svg";
import RosaInactiva from "../assets/img/Iconos/RosaInactiva.svg";

import "../assets/styles.css";

import Loader from "../general/loader";

import { fetchLugar, selectLugar } from "../../actions";

class Lugar extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchLugar(id);
  }

  renderReviews() {
    const reviewsEncabezado = this.props.lugar.reviewsEncabezado;

    return (
      <div className="ui centered grid link cards">
        {reviewsEncabezado.map((item, index) => {
          if (item.publicado === 1) {
            return this.renderPublicado(item, index);
          } else {
            return this.renderNoPublicado(item, index);
          }
        })}
      </div>
    );
  }

  renderPublicado(props, index) {
    return (
      <div key={index} className="ui cardLugar card">
        <Link to={`/ReviewsDetalle/${props.id}`}>
        <div className="ui fluid image">
          <div className="ui red ribbon label">
            <i className="heart icon"></i> Nuevo
          </div>
          <img className="" src={props.thumbnail} />
        </div>        
        <div className="content">        
          <div className="header textoNombre">
            <h2>{props.title}</h2>
          </div>
          <div className="meta">
            <a className="textoTipo">{props.negocio}</a>
          </div>
          <div className="description textoLugar">{props.lugar}</div>        
        </div>
        </Link>
        <div className="extra content">
          <span className="right floated fecha">{props.date_publish}</span>
          <span className="left floated">
            {this.mostrarCalificacion(props.CalificacionGeneral)}
          </span>
        </div>
      </div>
    );
  }

  mostrarCalificacion(props) {
    var puntos = [];
    var calificacion = Math.round(props);
    for (var i = 0; i < calificacion; i++) {
      puntos.push(<img key={i} className="rosa x1" src={RosaActiva} />);
    }
    for (var i = calificacion; i < 5; i++) {
      puntos.push(<img key={i} className="rosa x1" src={RosaInactiva} />);
    }
    return puntos;
  }

  renderNoPublicado(props, index) {
    return (
      <div key={index} className="ui cardLugar card">
        <div className="ui fluid image">
          <img className="disabled" src={props.thumbnail} />
        </div>
        <div className="content">
          <div className="header textoNombre">
            <h2>{props.title}</h2>
          </div>
          <div className="meta">
            <a>{props.negocio}</a>
          </div>
          <div className="description">{props.lugar}</div>
        </div>
        <div className="extra content">
          <span className="right floated fecha">{props.date_publish}</span>
          <span className="left floated">
            {this.mostrarCalificacion(props.CalificacionGeneral)}
          </span>
        </div>
      </div>
    );
  }

  renderLugar() {
    if (!this.props.lugar) {
      return (
        <section className="page-section bg-light" id="Lugares">
          <div className="container">
            <Loader message="Loading.." />
          </div>
        </section>
      );
    } else {
      const { title, banner, subtitle, descripcion } = this.props.lugar;
      document.documentElement.style.setProperty('--imageBackground',"url("+banner+")");
      return (
        <section className="page-section" id="Lugares">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">{title}</h2>
              <div className="ui divider"></div>
              {/* Preview Image */}
              <div className="ui fluid imagenBanner image">                
              </div>

              {/* Post Content */}

              <h4 className="ui horizontal divider header">
                <i className="tag icon"></i>
                {subtitle}
              </h4>
              <div className="text-left review">
                <p>{descripcion}</p>
                <br></br>
                {this.renderReviews()}
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div>{this.renderLugar()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lugar: state.lugares[ownProps.match.params.id],
    reviews: Object.values(state.lugares),
  };
};

export default connect(mapStateToProps, { selectLugar, fetchLugar })(Lugar);
