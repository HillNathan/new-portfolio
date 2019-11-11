import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import StickyFooter from "./components/StickyFooter";
import NavButtons from "./components/NavButtons";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Main />
        </Route>
        <Route exact path = "/about">
          <NavButtons />
          <About />
        </Route>
        <Route exact path = "/portfolio">
          <NavButtons />
          <Portfolio />
        </Route>
        <Route exact path = "/contact">
          <NavButtons />
          <Contact />
        </Route>
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default App;
