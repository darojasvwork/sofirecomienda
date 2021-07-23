import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "moment";
import "moment-timezone";
import "moment/locale/es";
import RosaActiva from "../assets/img/Iconos/RosaActiva.svg";
import RosaInactiva from "../assets/img/Iconos/RosaInactiva.svg";
import Nombre from "../assets/img/Nombre.svg";
import CalificacionFinalImagen from "../assets/img/Reviews/1/Calificacion.svg";

import "../assets/styles.css";

import Loader from "../general/loader";

import { fetchReview } from "../../actions";

class Review extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchReview(id);
    console.log("Review");
    console.log(this.state);
  }

  renderExperiencia() {
    return (
      <div class="ui centered grid cards ">
        <div class="cardExperiencia fluid card">
          <div class="content cardHeaderExperiencia">
            <div class="header fuente">Ubicación</div>
          </div>
          <div class="content experiencia">
            <div class="content">
              <div class="ui list listaExperiencia">
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">
                      250 metros al este del Automercado, en La Unión Tres Ríos.
                    </div>
                  </div>
                </div>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">Waze: Muelle 21 Marisquería.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardExperiencia fluid card">
          <div class="content cardHeaderExperiencia">
            <div class="header">Tipo de comida</div>
          </div>
          <div class="content experiencia">
            <div class="description">
              <div class="ui list listaExperiencia">
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">Mariscos (su especialidad)</div>
                  </div>
                </div>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">Carnes</div>
                  </div>
                </div>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">Pastas</div>
                  </div>
                </div>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">Ensaladas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardExperiencia fluid card">
          <div class="content cardHeaderExperiencia">
            <div class="header">Horario</div>
          </div>
          <div class="content experiencia">
            <div class="ui list listaExperiencia">
              <div class="item">
                <i class="map marker icon"></i>
                <div class="content">
                  <div class="description">
                    Lunes a sábado de 11:30 am a 8:30 pm
                  </div>
                </div>
              </div>
              <div class="item">
                <i class="map marker icon"></i>
                <div class="content">
                  <div class="description">Domingo 11:30 am a 6:00 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardExperiencia fluid card">
          <div class="content cardHeaderExperiencia">
            <div class="header">Ambiente</div>
          </div>
          <div class="content experiencia">
            <div class="description">
              <div class="ui list listaExperiencia">
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">
                      Familiar Apto para niños, adultos mayores, grupos de
                      amigos…
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cardExperiencia fluid card">
          <div class="content cardHeaderExperiencia">
            <div class="header">Rango de precios</div>
          </div>
          <div class="content experiencia">
            <div class="description">
              <div class="ui list listaExperiencia">
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">
                      Adultos Desde los 4700 colones (ceviche de corvina) – 15
                      000 colones (cortes de carne como rib eye)
                    </div>
                  </div>
                </div>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                    <div class="description">
                      Niños 2500 (orden de papas) – 3900 (dedidos de pollo,
                      pescado)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderCalificaciones() {
    return (
      <div class="ui">
        <div>
          <div class="ui secondary left aligned segment">
            <h4 class="ui header">Ubicación</h4>
          </div>
          <div class="ui basic left aligned segment">
            <p>
              La ubicación es super conveniente cerca de centros comerciales,
              supermercados, gimnasios y demás, está sobre carretera principal,
              super fácil el acceso, calle completamente asfaltada, segura, con
              mucha luz y se encuentra en waze.
            </p>
          </div>

          <div class="ui basic right aligned segment">
            <a class="item">
              <div class="ui basic label textoCalificacion">Calificación:</div>
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
            </a>
          </div>
        </div>
        <div>
          <div class="ui secondary left aligned segment">
            <h4 class="ui header">Servicio al cliente</h4>
          </div>
          <div class="ui basic left aligned segment">
            <p>
              Considero es uno de los puntos más fuertes del restaurante. Hay
              una persona que recibe a los clientes, se asegura de buscar un
              buen espacio para las personas, de que cumplan los protocolos de
              lavado y desinfección de manos antes de entrar. Dan una muy buena
              bienvenida, están anuentes a responder preguntas, dar
              recomendaciones en el menú. Cuando llegan los platillos les
              interesa por saber que piensa el cliente de la comida y también se
              les ve interés por saber que están pasando un buen momento. Desde
              la entrada hasta la despedida fueron impecables.
            </p>
          </div>

          <div class="ui basic right aligned segment">
            <a class="item">
              <div class="ui basic label textoCalificacion">Calificación:</div>
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
            </a>
          </div>
        </div>
        <div>
          <div class="ui secondary left aligned segment">
            <h4 class="ui header">Limpieza </h4>
          </div>
          <div class="ui basic left aligned segment">
            <p>
              Parqueo, terrazas y baños muy limpio y ordenado, salón principal
              unos cuantos papeles en el suelo debajo de algunas mesas.
            </p>
          </div>

          <div class="ui basic right aligned segment">
            <a class="item">
              <div class="ui basic label textoCalificacion">Calificación:</div>
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaInactiva} />
            </a>
          </div>
        </div>
        <div>
          <div class="ui secondary left aligned segment">
            <h4 class="ui header">Relación calidad-precio </h4>
          </div>
          <div class="ui basic left aligned segment">
            <p>
              Realmente hay una muy buena relación ya que los productos se ven y
              saben frescos, los platos están bien hechos, las porciones y los
              productos son adecuadas al precio de los platos.
            </p>
          </div>

          <div class="ui basic right aligned segment">
            <a class="item">
              <div class="ui basic label textoCalificacion">Calificación:</div>
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
            </a>
          </div>
        </div>
        <div>
          <div class="ui secondary left aligned segment">
            <h4 class="ui header">Protocolos COVID</h4>
          </div>
          <div class="ui basic left aligned segment">
            <p>
              Me gusta que para poder sentarse en la mesa hay que ir a lavarse
              las manos y ponerse alcohol en gel. El personal usa la mascarilla
              y la usa bien, sin estarse tocando la mascarilla durante la
              atención o sirviendo platos o demás. Me gustaría ver que
              desinfecten el espacio antes de sentarse o bien que tenga un
              rotulo dando a conocer que ya esa mesa fue previamente
              desinfectada. Lo mismo que con los menús, para dar más seguridad
              al cliente. Considero que las camareras podrían dejar más espacio
              entre los clientes y ellas a la hora de ir a tomar la orden.
            </p>
          </div>

          <div class="ui basic right aligned segment">
            <a class="item">
              <div class="ui basic label textoCalificacion">Calificación:</div>
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaInactiva} />
            </a>
          </div>
        </div>
        <div>
          <div class="ui secondary left aligned segment">
            <h4 class="ui header">Inclusión </h4>
          </div>
          <div class="ui basic left aligned segment">
            <p>
              Las personas en sillas de ruedas o problemas de movilidad pueden
              accesar fácilmente al restaurante, baños ya que cuentan con
              accesos planos en todo el lugar. Hay un baño exclusivo para
              personas con discapacidad. Hay personas que pueden atender en
              otros idiomas como inglés. Se puede mejorar ofreciendo menús con
              letras más grandes para personas con discapacidad visual,
              pictogramas para personas con autismo o braille. Se puede mejorar
              teniendo alguna persona capacitada en LESCO.
            </p>
          </div>

          <div class="ui basic right aligned segment">
            <a class="item">
              <div class="ui basic label textoCalificacion">Calificación:</div>
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaActiva} />
              <img className="rosa x2" src={RosaInactiva} />
              <img className="rosa x2" src={RosaInactiva} />
              <img className="rosa x2" src={RosaInactiva} />
            </a>
          </div>
        </div>
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
      document.documentElement.style.setProperty('--imageBackground',"url("+review.image+")");

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

         
            
          <div class="ui icon green message">
          <img className="rosa x3" src={CalificacionFinalImagen} />
            <div class="content">
              <div class="header recomendacion">¿Recomiendo el lugar para que vayan?</div>
              <p className="recomendacion">
                Completamente, tienen buena comida, menú variado, buen servicio
                al cliente, buena ubicación, buen parqueo. Les aseguro que les
                va a gustar vayan solos, con amigos, con familia o en pareja, si
                van me cuentan. Gracias por leerme
              </p>
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
