import React from "react";
import {
  CloseButton,
  Container,
  FormBody,
  FormBox,
  FormHeader,
  FormTitle,
  Input,
  SignIn
} from "./styles";

export default function Form({ closeForm, title }) {
  return (
    <Container>
      <FormHeader>
        <CloseButton onClick={closeForm}>
          <i class="fa fa-times"></i>
        </CloseButton>
      </FormHeader>
      <FormBody>
        <FormTitle>Login {title}</FormTitle>
      </FormBody>
      <FormBox>
        <Input type="email" required placeholder="Email" />
        <Input type="password" required placeholder="Senha" />
        <SignIn>Entrar</SignIn>
      </FormBox>
    </Container>
  );
}
