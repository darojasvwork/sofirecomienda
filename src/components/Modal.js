import "./assets/styles.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project Details Go Here */}
                  <h2 className="text-uppercase">{props.title}</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src="assets/img/portfolio/01-full.jpg"
                    alt=""
                  />
                  <p>props.actions</p>
                  <ul className="list-inline">
                    <li>Date: January 2020</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-times mr-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
