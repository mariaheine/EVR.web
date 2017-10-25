import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* PAGES */
import Home from "./content/Home";
import BufferTest from "./content/test/BufferTest";

const FourOhFour = () => <h1>404 xD</h1>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={BufferTest} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  componentWillMount() {
    // require("aframe");
    // require("aframe-animation-component");
  }
}

export default App;

// Not specifying path in route means go there if nothing else matches

// Switch makes it specific that you can only render one route at a time
