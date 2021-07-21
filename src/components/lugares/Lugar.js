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
    const reviews = this.props.lugar.reviews;
    console.log(reviews);
    return (
      <div class="ui centered grid link cards">
        {reviews.map((item, index) => {
          
          
          console.log(item.publicado===1);
          if(item.publicado===1)
          {
            return this.renderPublicado(item);
          }else{
            return this.renderNoPublicado(item);
          }
        })}
      </div>
    );
  }

  renderPublicado(props){
    console.log(props);
    return (
      <div class="card">
        <div class="ui fluid image">
          <div class="ui red ribbon label">
            <i class="heart icon"></i> Nuevo
          </div>
          <img class="" src="/assets/img/image.jpg" />
        </div>
        <div class="content">
          <div class="header">
            <h2>{props.title}</h2>
          </div>
          <div class="meta">
            <a>{props.negocio}</a>
          </div>
          <div class="description">{props.lugar}</div>
        </div>
        <div class="extra content">
          <span class="right floated fecha">{props.date_publish}</span>
          <span class="left floated">       
            {this.mostrarCalificacion(props.CalificacionGeneral)}
          </span>
        </div>
      </div>
    );
  }

  mostrarCalificacion(props){       
    var puntos = [];
    var calificacion=Math.round(props);
    console.log(calificacion);
      for (var i = 0; i < calificacion; i++) {
        puntos.push(<img className="rosa" src={RosaActiva}/>);
      } 
      var inactivos=(5-calificacion)
      for (var i = 0; i < inactivos; i++) {
        puntos.push(<img className="rosa" src={RosaInactiva}/>);
      } 
      return puntos;
  }

  renderNoPublicado(props){
    return (
      <div class="card">
        <div class="ui fluid image">
          <img class="disabled" src="/assets/img/image.jpg" />
        </div>
        <div class="content">
          <div class="header">
            <h2>{props.title}</h2>
          </div>
          <div class="meta">
            <a>{props.negocio}</a>
          </div>
          <div class="description">{props.lugar}</div>
        </div>
        <div class="extra content">
          <span class="right floated fecha">{props.date_publish}</span>
          <span class="left floated">           
            {this.mostrarCalificacion(props.CalificacionGeneral)}            
          </span>
        </div>
      </div>
    );
  }

  renderLugar() {
    if (!this.props.lugar) {
      return (
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <Loader message="Loading.." />
          </div>
        </section>
      );
    } else {
      const { title, banner, subtitle, descripcion } = this.props.lugar;

      return (
        <section className="page-section" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">{title}</h2>
              <div class="ui divider"></div>
              {/* Preview Image */}
              <div class="ui fluid image">
                <img src={banner} alt="Restaurantes" />
              </div>
              
              {/* Post Content */}

              <h4 class="ui horizontal divider header">
                <i class="tag icon"></i>
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
