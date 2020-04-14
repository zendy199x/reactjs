import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
// import "./demo-generator";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
