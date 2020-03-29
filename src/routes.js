import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/perfil" exact>
          <Perfil />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
