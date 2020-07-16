import "../assets/styles.css";
import React, { Component } from "react";

import Header from "./Header";
import Services from "./Services";
import ListReviews from "./ListReviews";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <ListReviews />
        <About />
        <Team />
        <Contact />
      </div>
    );
  }
}
export default Main;
