import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import { selectLugar, fetchLugares } from "../../actions";

class ListLugares extends Component {
  componentDidMount() {
    this.props.fetchLugares();
  }

  renderList() {
    return this.props.lugares.map((lugar) => {
      return (
        <div className="col-lg-12 col-sm-6 mb-4" key={lugar.id}>
          <div className="portfolio-item">
            <Link
              to={`/lugares/lugar/${lugar.id}`}
              className="portfolio-link"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={lugar.thumbnail} alt="" />
            </Link>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">{lugar.title}</div>
              {/*<div className="portfolio-caption-subheading text-muted">
                {lugar.contenido}
      </div>*/}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {    
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Lugares
            </h2>
          </div>
          <div className="row">{this.renderList()}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lugares: Object.values(state.lugares),
  };
};
export default connect(mapStateToProps, {
  selectLugar,
  fetchLugares,
})(ListLugares);
