import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={App} />
          <Route path="/Home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default Routes;
