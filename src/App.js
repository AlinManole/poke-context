import React from 'react';
import Home from "./pages/Home.js";
import Login from './pages/Login.Js';
import NotFound from './pages/NotFound.js'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" components={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;