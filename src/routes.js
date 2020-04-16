import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import CozinhaDashboard from './pages/Internas/Cozinha'
import CadastrarProdutos from './pages/Internas/CadastrarProdutos'

import Servicos from './pages/Internas/Servicos'


import AreadeServicoes from './pages/Internas/AreadeServico'

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
        <Route path="/Servicos" exact>
          <AreadeServicoes />
        </Route>
        <Route path="/cozinha" exact>
          <CozinhaDashboard />
        </Route>
        <Route path="/Cadastrar" exact>
          <CadastrarProdutos  />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Servicos" exact>
          <Servicos/>
        </Route>
      </Switch>
    </Router>
  );
}
