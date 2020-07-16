import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "moment";
import "moment-timezone";
import "moment/locale/es";

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
      const { title, content, image } = this.props.review;
      const dateToFormat = "2020-07-16T12:59-0500";

      return (
        <section className="page-section" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">{title}</h2>
              <h3 className="section-subheading text-muted">{content}</h3>
              <hr />
              {/* Date/Time */}
              <p>Publicado {Moment(dateToFormat).format("LLLL")}</p>
              <hr />

              {/* Preview Image */}
              <div class="ui fluid image">
                <div class="ui red ribbon label">
                  <i class="tree icon"></i> Parque Nacional
                </div>
                <img src={image} alt="Chirripo" />
              </div>
              <hr />
              {/* Post Content */}

              <h4 class="ui horizontal divider header">
                <i class="tag icon"></i>
                Experiencia
              </h4>
              <div className="text-left review">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe
                  quibusdam sit excepturi nam quia corporis eligendi eos magni
                  recusandae laborum minus inventore? Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Ut, tenetur natus
                  doloremque laborum quos iste ipsum rerum obcaecati impedit
                  odit illo dolorum ab tempora nihil dicta earum fugiat.
                  Temporibus, voluptatibus. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Eos, doloribus, dolorem iusto
                  blanditiis unde eius illum consequuntur neque dicta incidunt
                  ullam ea hic porro optio ratione repellat perspiciatis. Enim,
                  iure!
                </p>
                <blockquote class="blockquote text-right">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer class="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <h4 class="ui horizontal divider header">
                  <i class="tag icon"></i>
                  Impresiones finales
                </h4>
                <p class="text-justify">
                  Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                  purus sit amet fermentum. Donec sed odio operae, eu vulputate
                  felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                  At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                  concilium totius Galliae in diem certam indicere. Cras mattis
                  iudicium purus sit amet fermentum.
                </p>
                <div
                  class="ui heart rating"
                  data-rating="9"
                  data-max-rating="10"
                ></div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  render() {
    return <div>{this.renderReview()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    review: state.reviews[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchReview })(Review);
