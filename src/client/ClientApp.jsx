// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* PAGES */
import Home from "./content/Home";

const FourOhFour = () => <h1>404 xD</h1>;

const ClientApp = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default ClientApp;

// Not specifying path in route means go there if nothing else matches

// Switch makes it specific that you can only render one route at a time
