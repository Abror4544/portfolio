import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <BrowserRouter>
        <Menu />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/" render={() => <Main />} />
        <Footer />
    </BrowserRouter>
  );
};

export default App;
