import "../components/assets/styles.css";

import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


import Nav from "./general/Nav";
import Footer from "./general/Footer";
import Main from "./main/Main";
import Review from "./reviews/Review";
import Lugar from "./lugares/Lugar";
import Evento from "./eventos/diamadre";
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
            <Route path="/mama" exact component={Evento} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};
export default App;
