import "../components/assets/styles.css";

import React from "react";
<<<<<<< HEAD
import { HashRouter as Router, Route, Switch } from "react-router-dom";
=======
import { Route, Switch } from "react-router-dom";
import {HashRouter as Router} from "react-router-dom";
>>>>>>> 7baa841bfe5fcae3061c6e7bfff2582e9891f0e2

import Nav from "./general/Nav";
import Footer from "./general/Footer";
import Main from "./main/Main";
import Review from "./reviews/Review";
import Lugar from "./lugares/Lugar";
import history from "./history";

const App = () => {
  return (
    <div id="page-top">
      <Router history={history}>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/ReviewsDetalle/:id" exact component={Review} />
            <Route path="/lugares/lugar/:id" exact component={Lugar} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};
export default App;
