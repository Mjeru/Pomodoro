import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "../App";
import { BrowserRouter } from "react-router-dom";

window.addEventListener("load", () => {
  ReactDom.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("react_root")
  );
});
