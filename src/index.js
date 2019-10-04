// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Auth0Provider } from "./react-auth0-wrapper";
// import config from "./auth_config.json";

const stateFilm = {
  activeItem: "beranda"
};

//Reducer
const reducerFilm = (state = stateFilm, action) => {
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateActiveItem = { ...state, activeItem: action.ActiveItem };
      return stateActiveItem;
    default:
      return state;
  }
};

const store = createStore(reducerFilm);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
