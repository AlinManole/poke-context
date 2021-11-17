import React from 'react';
import Home from "./pages/Home.js";
import Login from './pages/Login.js';
import NotFound from './pages/NotFound.js'
import Nav from './components/Nav.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" components={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;