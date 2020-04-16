import React from 'react';
import { Button } from 'react-bootstrap';
import {
  Container,
  Title
  

} from "./styles";

import './styles.css'


export default function Cozinha () {
  return(
    <Container>
      <form action="#">
        <Title> Cadastrar </Title>
        <div className="divForm" >
          <div>
            <label htmlFor="" placeholder="Nome do produto" > Nome </label>
          </div>
            <input type="text" className="mb-3" />
        </div>
        <div>
          <div>
            <label htmlFor="" placeholder="Nome do produto" > Descrição</label>
          </div>
            <input type="text" className="mb-3 inputtext2" />
        </div>
        <div>
          <Button>Cadastrar</Button>
        </div>
      </form>
    </Container>
  );
}
