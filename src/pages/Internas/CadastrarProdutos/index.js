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

              <input type="file" name="" id=""/>
            </div>
            <div>
              <NomedoProduto>
                <div>
                  <label>Nome</label>
                </div>
                <input type="text" name="" id="" className="input" />
              </NomedoProduto>
            </div>
            <div>
              <Descrição>
                <div>
                  <label htmlFor="">Descrição</label>
                </div>
                <input type="text" name="" id="" className="input" />      
              </Descrição>
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
        </Content>
      </Box>

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
