import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import { selectReview, fetchReviews } from "../../actions";

class ListReviews extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  renderList() {
    return this.props.reviews.map((review) => {
      return (
        <div className="col-lg-4 col-sm-6 mb-4" key={review.id}>
          <div className="portfolio-item">
            <Link
              to={`/reviews/Review/${review.id}`}
              className="portfolio-link"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={review.thumbnail} alt="" />
            </Link>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">{review.title}</div>
              <div className="portfolio-caption-subheading text-muted">
                {review.contenido}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.state);
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Lugares visitados
            </h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">{this.renderList()}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.reviews),
  };
};
export default connect(mapStateToProps, {
  selectReview,
  fetchReviews,
})(ListReviews);
