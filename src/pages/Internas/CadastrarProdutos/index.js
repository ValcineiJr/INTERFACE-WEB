import React from 'react';

import {
  Container,
  Box,
  Title,
  Content,
  NomedoProduto,
  Descrição

} from "./styles";

import './styles.css'


export default function Cozinha () {
  return(
    <Container>
      <Box>
        <Title>CADASTRAR PRODUTOS</Title>
        <Content>
          <div>
              <input type="file" name="" id=""/>
            </div>
            <div>
              <NomedoProduto>
                <div>
                  <label>Nome</label>
                </div>
                <input type="text" name="" id=""/>
              </NomedoProduto>
            </div>
            <div>
              <Descrição>
                <div>
                  <label htmlFor="">Descrição</label>
                </div>
                <input type="text" name="" id=""/>      
              </Descrição>
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
        </Content>
      </Box>
    </Container>
  );
}
