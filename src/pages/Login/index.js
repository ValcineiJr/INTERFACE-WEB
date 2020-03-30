import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { addAuthListener } from "../../firebase";
import api from "../../services/api";
import {
  BoxLogin,
  Container,
  ContainerMessage,
  ForgotPassword,
  FormLogin,
  InputIcon,
  SubmitBtn,
  TextMessage,
  TitleBox
} from "./styles";
// import { Container } from './styles';

export default function Lg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const colors = { error: "#dc3545", success: "#28a745" };
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

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/companyLogin", {
      email,
      password
    });

    setLoginMessage(response.data.msg);
  }

  function Message() {
    return (
      <ContainerMessage
        show={loginMessage == "" ? "none" : "flex"}
        bgColor={
          loginMessage == "Email e/ou senhas incorretos"
            ? colors.error
            : colors.success
        }
      >
        <TextMessage>{loginMessage}</TextMessage>
      </ContainerMessage>
    );
  }

  return (
    <Container>
      <Message />
      <BoxLogin>
        <TitleBox>Login</TitleBox>
        <FormLogin onSubmit={handleSubmit}>
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              required
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
