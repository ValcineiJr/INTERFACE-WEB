import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { addAuthListener } from "../../firebase";
import api from "../../services/api";
import {
  BoxLogin,
  Container,
  ForgotPassword,
  FormLogin,
  InputIcon,
  SubmitBtn,
  TitleBox
} from "./styles";
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
        setLoginMessage(user.data.msg);
      })
      .catch(err => {
        setLoginMessage(response.data.msg);
      });
  }
  return (
    <Container>
      <BoxLogin>
        <TitleBox>Login</TitleBox>
        <FormLogin>
          <label htmlFor="email">Email</label>
          <InputIcon>
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
          </InputIcon>

          <label htmlFor="pass">Senha</label>
          <InputIcon>
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
          </InputIcon>
          <ForgotPassword>
            <Link to="/forgotpassword">Esqueceu a senha?</Link>
          </ForgotPassword>
          <SubmitBtn type="submit" value="Entrar" />
        </FormLogin>
      </BoxLogin>
    </Container>
  );
}
