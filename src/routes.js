import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import CozinhaDashboard from './pages/Internas/Cozinha'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/perfil" exact>
          <Perfil />
        </Route>
        <Route path="/cozinha" exact>
          <CozinhaDashboard />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
