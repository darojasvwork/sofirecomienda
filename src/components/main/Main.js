import "../assets/styles.css";
import React, { Component } from "react";

import Header from "./Header";
import Services from "./Services";
import ListReviews from "./ListReviews";
import About from "./About";
import Contactame from "./Contactame";
import Lugares from "./Lugares"
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        {/*<ListReviews />*/}
        <Lugares/>
        <About />
        <Contactame />        
      </div>
    );
  }
}
export default Main;
