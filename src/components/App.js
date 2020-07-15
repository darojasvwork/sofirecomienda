import "../components/styles.css";
import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Nav />
        <Header />
      </div>
    );
  }
}
export default App;
