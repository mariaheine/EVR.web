// @flow

import React from "react";
import Perf from "react-addons-perf";
import { render } from "react-dom";

import ClientApp from "./client/ClientApp";

/* REACT PERFORMANCE TESTING */
window.Perf = Perf;
Perf.start();

const renderApp = () => {
  render(<ClientApp />, document.getElementById("app"));
};
renderApp();

if (module.hot) {
  module.hot.accept("./client/ClientApp", () => {
    renderApp();
  });
}
