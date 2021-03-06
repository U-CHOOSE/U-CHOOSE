//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

//include font-awesome to the icons
// import "@fortawesome/fontawesome-free/js/all.js";
//include your index.scss file into the bundle
import "../styles/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
