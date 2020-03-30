import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { addAuthListener } from "../../firebase";
import api from "../../services/api";
import { Container } from "./styles";
import "./styles.css";
// import { Container } from './styles';

export default function Lg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/dashboard" } };

  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      history.replace(from);
    }
    addAuthListener(user => {
      if (user) {
        history.replace(from);
      }
    });
  }, []);

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  async function enter() {
    const response = await api
      .post("/companyLogin", {
        email,
        password
      })
      .then(user => {
        alert(user.data.msg);
      })
      .catch(err => {
        alert(response.data.msg);
      });
  }
  return (
    <Container className="container">
      <h1 className="titleBox">Login</h1>
      <div className="form">
        <label htmlFor="email">Email</label>
        <div className="input-Icon">
          <i class="far fa-user" />
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleEmail}
            className="inputblock"
          />
        </div>

        <label htmlFor="pass">Senha</label>
        <div className="input-Icon">
          <i class="fas fa-lock" />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            id="pass"
            value={password}
            onChange={handlePassword}
            required
            className="inputblock"
          />
        </div>
      </div>
      <div className="forgotPassword">
        <Link to="/forgotpassword">Esqueceu a senha?</Link>
      </div>
      <button className="submitBtn" onClick={enter}>
        ENTRAR
      </button>
    </Container>
  );
}
