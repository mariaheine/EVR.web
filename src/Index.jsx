import React from "react";
import { render } from "react-dom";

import App from "./client/App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};

renderApp();

// dropped usage of HMR in this project for a while

// if (module.hot) {
//   module.hot.accept("./client/App", () => {
//     renderApp();
//   });
// }
