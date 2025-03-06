import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure './App' is used
import * as serviceWorker from "./serviceWorker"; // Ensure './serviceWorker' is used
import "./index.css"; // Ensure './index.css' is used

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
