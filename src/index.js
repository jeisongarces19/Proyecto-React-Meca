import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import App2 from "./Coltec";
 /* ese metodo get es para enviarle al html lo que construi, en este caso pues toda la App */

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App2 />, document.getElementById("root"));

