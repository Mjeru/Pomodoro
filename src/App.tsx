import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import "./main.global.css";
import { Header } from "./shared/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { Link, Route, Routes } from "react-router-dom";
import { NotFound } from "./shared/NotFound";
import { Content } from "./shared/Content";

function AppComponent() {
  const [mouted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Provider store={store}>
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route
          path={"/"}
          element={
            <Layout>
              <Header />
              <Content />
            </Layout>
          }
        />
      </Routes>
      <Routes>
        <Route path={"*"} element={<span />} />
      </Routes>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
