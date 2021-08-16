import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Menu from "./components/Menu/Menu";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Menu />
      <Switch>
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/" render={() => <Main />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
