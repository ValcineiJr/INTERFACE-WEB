import React from "react";
import { Container, InfoItem, InfoList, Title } from "./styles";

export default function SystemInfo({ closeModal }) {
  const Itens = [
    "Comandas virtuais",
    "Hierarquia de cargos e funções",
    "Histórico de compras",
    "Balanço de faturamento diário/mensal",
    "Calculadora",
    "Notificação de pedidos integradas com outras áreas da aplicação",
    "Modo noturno"
  ];
  return (
    <Container>
      <span
        onClick={closeModal}
        style={{
          cursor: "pointer",
          padding: 8,
          paddingLeft: 16,
          position: "absolute",
          right: 0,
          top: 0
        }}
      >
        <i class="fa fa-times"></i>
      </span>
      <Title>Ferramentas da beta (versão de testes 0.0.1)</Title>
      <InfoList>
        {Itens.map(item => (
          <InfoItem>{item}</InfoItem>
        ))}
      </InfoList>
    </Container>
  );
}
