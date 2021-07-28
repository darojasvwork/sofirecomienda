import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "moment";
import "moment-timezone";
import "moment/locale/es";
import RosaActiva from "../assets/img/Iconos/RosaActiva.svg";
import RosaInactiva from "../assets/img/Iconos/RosaInactiva.svg";
import RosaMitad from "../assets/img/Iconos/RosaMitad.svg";
import Nombre from "../assets/img/Nombre.svg";


import "../assets/styles.css";

import Loader from "../general/loader";

import { fetchReview } from "../../actions";

class Review extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchReview(id);
  }

  renderUbicacion() {
    const reviewsDetalle = this.props.review;

    return (
      <div className="ui list listaExperiencia">
        {reviewsDetalle.Ubicacion.map((item, index) => {
          return (
            <div key={index} className="item">
              <i className="caret right icon"></i>
              <div className="content">
                <div className="description">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderTipo() {
    const reviewsDetalle = this.props.review;

    return (
      <div  className="ui list listaExperiencia">
        {reviewsDetalle.Tipo.map((item, index) => {
          return (
            <div key={index} className="item">
              <i className="caret right icon"></i>
              <div className="content">
                <div className="description">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderHorario() {
    const reviewsDetalle = this.props.review;

    return (
      <div  className="ui list listaExperiencia">
        {reviewsDetalle.Horario.map((item, index) => {
          return (
            <div key={index} className="item">
              <i className="caret right icon"></i>
              <div className="content">
                <div className="description">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderAmbiente() {
    const reviewsDetalle = this.props.review;

    return (
      <div  className="ui list listaExperiencia">
        {reviewsDetalle.Ambiente.map((item, index) => {
          return (
            <div key={index} className="item">
              <i className="caret right icon"></i>
              <div className="content">
                <div className="description">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderPrecios() {
    const reviewsDetalle = this.props.review;

    return (
      <div  className="ui list listaExperiencia">
        {reviewsDetalle.Precios.map((item, index) => {
          return (
            <div key={index} className="item">
              <i className="caret right icon"></i>
              <div className="content">
                <div className="description">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderExperiencia() {
    return (
      <div  className="ui centered grid cards ">
        <div className="cardExperiencia fluid card">
          <div className="content cardHeaderExperiencia">
            <div className="header fuente">Ubicación</div>
          </div>
          <div className="content experiencia">
            <div className="content">{this.renderUbicacion()}</div>
          </div>
        </div>

        <div className="cardExperiencia fluid card">
          <div className="content cardHeaderExperiencia">
            <div className="header">Tipo de comida</div>
          </div>
          <div className="content experiencia">
            <div className="description">
              <div className="ui list listaExperiencia">
                <div className="content">{this.renderTipo()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardExperiencia fluid card">
          <div className="content cardHeaderExperiencia">
            <div className="header">Horario</div>
          </div>
          <div className="content experiencia">
            <div className="ui list listaExperiencia">
              <div className="content">{this.renderHorario()}</div>
            </div>
          </div>
        </div>

        <div className="cardExperiencia fluid card">
          <div className="content cardHeaderExperiencia">
            <div className="header">Ambiente</div>
          </div>
          <div className="content experiencia">
            <div className="content">{this.renderAmbiente()}</div>
          </div>
        </div>

        <div className="cardExperiencia fluid card">
          <div className="content cardHeaderExperiencia">
            <div className="header">Rango de precios</div>
          </div>
          <div className="content experiencia">
            <div className="description">
              <div className="ui list listaExperiencia">
                <div className="content">{this.renderPrecios()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  mostrarCalificacion(props) {
    var puntos = [];    
    var calificacion = Math.floor(props);
    for (var i = 0; i < calificacion; i++) {
      puntos.push(<img key={i} className="rosa x2" src={RosaActiva} />);
    }
    if (props % 1 != 0){
      for (var i = calificacion; i < 4; i++) {
        puntos.push(<img key={i} className="rosa x2" src={RosaInactiva} />);
      }
      puntos.push(<img key={i} className="rosa x2" src={RosaMitad} />);
    }else{
      for (var i = calificacion; i < 5; i++) {
        puntos.push(<img key={i} className="rosa x2" src={RosaInactiva} />);
      }
    }
    return puntos;
  }

  renderCalificacionUbicacion() {
    const elemento = this.props.review.CalificacionUbicacion;
    
    return (
      <div>
        <div className="ui secondary left aligned segment">
          <h4 className="ui header">Ubicación</h4>
        </div>

        <div className="ui basic left aligned segment">
          {elemento.Detalle.map((item, index) => {
            
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div className="ui basic right aligned segment">
          <a className="item">
            <div className="ui basic label textoCalificacion">Calificación:</div>
            {this.mostrarCalificacion(elemento.Puntaje)}
          </a>
        </div>
      </div>
    );
  }

  renderCalificacionServicioCliente() {
    const elemento = this.props.review.CalificacionServicioCliente;
    
    return (
      <div>
        <div className="ui secondary left aligned segment">
          <h4 className="ui header">Servicio al cliente</h4>
        </div>

        <div className="ui basic left aligned segment">
          {elemento.Detalle.map((item, index) => {
            
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div className="ui basic right aligned segment">
          <a className="item">
            <div className="ui basic label textoCalificacion">Calificación:</div>
            {this.mostrarCalificacion(elemento.Puntaje)}
          </a>
        </div>
      </div>
    );
  }

  renderCalificacionLimpieza() {
    const elemento = this.props.review.CalificacionLimpieza;
    
    return (
      <div>
        <div className="ui secondary left aligned segment">
          <h4 className="ui header">Limpieza</h4>
        </div>

        <div className="ui basic left aligned segment">
          {elemento.Detalle.map((item, index) => {
            
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div className="ui basic right aligned segment">
          <a className="item">
            <div className="ui basic label textoCalificacion">Calificación:</div>
            {this.mostrarCalificacion(elemento.Puntaje)}
          </a>
        </div>
      </div>
    );
  }

  renderCalificacionCalidadPrecio() {
    const elemento = this.props.review.CalificacionCalidadPrecio;
    
    return (
      <div>
        <div className="ui secondary left aligned segment">
          <h4 className="ui header">Relación calidad-precio</h4>
        </div>

        <div className="ui basic left aligned segment">
          {elemento.Detalle.map((item, index) => {
            
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div className="ui basic right aligned segment">
          <a className="item">
            <div className="ui basic label textoCalificacion">Calificación:</div>
            {this.mostrarCalificacion(elemento.Puntaje)}
          </a>
        </div>
      </div>
    );
  }

  renderCalificacionProtocolos() {
    const elemento = this.props.review.CalificacionProtocolos;
    
    return (
      <div>
        <div className="ui secondary left aligned segment">
          <h4 className="ui header">Protocolos COVID</h4>
        </div>

        <div className="ui basic left aligned segment">
          {elemento.Detalle.map((item, index) => {
            
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div className="ui basic right aligned segment">
          <a className="item">
            <div className="ui basic label textoCalificacion">Calificación:</div>
            {this.mostrarCalificacion(elemento.Puntaje)}
          </a>
        </div>
      </div>
    );
  }

  renderCalificacionInclusion() {
    const elemento = this.props.review.CalificacionInclusion;
    
    return (
      <div>
        <div className="ui secondary left aligned segment">
          <h4 className="ui header">Inclusión</h4>
        </div>
        <div className="ui basic left aligned segment">
          {elemento.Detalle.map((item, index) => {
            
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="ui basic right aligned segment">
          <a className="item">
            <div className="ui basic label textoCalificacion">Calificación:</div>
            {this.mostrarCalificacion(elemento.Puntaje)}
          </a>
        </div>
      </div>
    );
  }

  renderCalificaciones() {
    return (
      <div className="ui">
        {this.renderCalificacionUbicacion()}

        {this.renderCalificacionServicioCliente()}
        {this.renderCalificacionLimpieza()}
        {this.renderCalificacionCalidadPrecio()}
        {this.renderCalificacionProtocolos()}
        {this.renderCalificacionInclusion()}
      </div>
    );
  }



  renderReview() {
    if (!this.props.review) {
      return (
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <Loader message="Loading.." />
          </div>
        </section>
      );
    } else {
      const review = this.props.review;
      const maxDate = Moment([review.date_publish], "DD-MM-YYYY").format("LL");
      document.documentElement.style.setProperty(
        "--imageBackground",
        `url(${review.image})`
      );

      return (
        <section className="page-section" id="portfolio">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">{review.title}</h2>

            <hr />
            {/* Date/Time */}
            <p>Publicado el {maxDate}</p>
            <hr />

            {/* Preview Image */}
            <div className="ui fluid image imagenBanner responsive">
              <div className="ui red ribbon label">
                <i className={review.icon}></i> {review.TipoNegocio}
              </div>
            </div>
            <hr />
            {/* Post Content */}

            <h4 className="ui horizontal divider header">
              <i className="tag icon"></i>
              Experiencia
            </h4>
            <div className="text-left review">
              <p>{review.Descripción}</p>
            </div>
            <br />
            {this.renderExperiencia()}
            <h4 className="ui horizontal divider header">
              <i className="tag icon"></i>
              Calificación
            </h4>
            {this.renderCalificaciones()}
          </div>
          <h4 className="ui horizontal divider header">
            <i className="tag icon"></i>
            Recomendación
          </h4>

          <div className="ui icon green message">
            <img className="rosa x3" src={`${review.path}\Calificacion.svg`} />
            <div className="content">
              <div className="header recomendacion">
                ¿Recomiendo el lugar para que vayan?
              </div>
              <p className="recomendacion">{review.Comentario}</p>
              <img className="firma text-center" alt="Sofi" src={Nombre} />
            </div>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div className="container">{this.renderReview()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    review: state.reviews[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchReview })(Review);
