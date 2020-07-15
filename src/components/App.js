import "../components/styles.css";
import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Services from "../components/Services";
import Porfolio from "../components/Porfolio";
import About from "../components/About";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Nav />
        <Header />
        <Services />
        <Porfolio />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
