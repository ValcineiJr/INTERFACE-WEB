import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import './script.js'
import "./styles.css";

export default function login() {
  return (
    <form action="#">
    <Container className="container">

      <h1 className="titleBox">Login</h1>
      <div className="form">
        <label htmlFor="user">Nome do usuário</label>
        <div className="input-Icon">
          <i class="far fa-user" />
          <input type="text" placeholder="Usuário" name="username" id="user" required className="inputblock" />
        </div>

        <label htmlFor="pass">Senha</label>
        <div className="input-Icon">
          <i class="fas fa-lock" />
          <input type="password" placeholder="Senha" name="password" id="pass" required className="inputblock"
          />
        </div>
      </div>
      <div className="forgotPassword">
        <Link to="/forgotpassword">Esqueceu a senha?</Link>
      </div>
      <button className="submitBtn" type="submit">
        ENTRAR
      </button>
    </Container>
    </form>
  );
}
