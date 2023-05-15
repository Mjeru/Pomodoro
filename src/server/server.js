import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../App";
const app = express();
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

app.use("/static", express.static("./dist/client"));

app.get("/*", (req, res) => {
  let html = ReactDOM.renderToString(
    <StaticRouter location={req.url}>{App()}</StaticRouter>
  );
  res.send(indexTemplate(html));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
