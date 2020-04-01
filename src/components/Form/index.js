import React, { useState } from "react";
import {
  CloseButton,
  Container,
  FormBody,
  FormBox,
  FormHeader,
  FormTitle,
  Input,
  MessageBox,
  SignIn
} from "./styles";

export default function Form({ message, closeForm, title, onSubmit }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const company = sessionStorage.getItem("user");

  async function handleSubmit(e) {
    let access = [];
    e.preventDefault();
    if (title == "Caixa") {
      access = 1;
    } else if (title == "Pedidos") {
      access = 2;
    } else if (title == "Cozinha") {
      access = 3;
    } else if (title == "Administração") {
      access = 4;
    }

    await onSubmit({
      name: name.toLowerCase(),
      password,
      company,
      access,
      title
    });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <FormHeader>
        <MessageBox display={message == "" ? "none" : "flex"}>
          {message}
        </MessageBox>
        <CloseButton onClick={closeForm}>
          <i class="fa fa-times"></i>
        </CloseButton>
      </FormHeader>
      <FormBody>
        <FormTitle>Login {title}</FormTitle>
      </FormBody>
      <FormBox>
        <Input
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Funcionário"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Senha"
        />
        <SignIn type="submit" value="Entrar" />
      </FormBox>
    </Container>
  );
}
