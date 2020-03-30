import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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

export default function Lg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const colors = { error: "#dc3545", success: "#28a745" };
  const [loginMessage, setLoginMessage] = useState("");
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/dashboard" } };
  const user = sessionStorage.getItem("user");

  useEffect(() => {
    if (user != null) {
      history.replace(from);
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/companyLogin", {
      email,
      password
    });

    let res = response.data.msg;
    let name = response.data.name;
    setLoginMessage(res);

    if (res == "Sucesso") {
      sessionStorage.setItem("user", name);
      history.replace(from);
    }
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
              onChange={e => setEmail(e.target.value.toLowerCase())}
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
