import React from "react";
import ReactDOM from "react-dom";
import "index.scss";

import Page from "components";
import * as serviceWorker from "serviceWorker";

const App = () => {
  return <Page />;
};

ReactDOM.render(<App />, document.getElementById("root"));

//hot reload
if (module.hot) {
  module.hot.accept("components", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}

serviceWorker.unregister();
