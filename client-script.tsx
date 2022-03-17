import React from "react";
import ReactDOM from "react-dom";
import App, { AppProps } from "./frontend/App";

type WindowWithProps = Window & {
  __PRELOADED_STATE__?: AppProps;
};

const props = (window as WindowWithProps).__PRELOADED_STATE__;

ReactDOM.hydrate(
  <React.StrictMode>
    <App {...props} />
  </React.StrictMode>,
  document.getElementById("root")
);
