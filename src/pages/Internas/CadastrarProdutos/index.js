import React from 'react';

import {
  Body,
  FormBackground,
  Label,
  Itens

} from "./styles";


export default function Cozinha () {
  return(
    <Body>
      <FormBackground>
        <Itens>
        <div>
          <div>
            <input type="file" name="img" id="img"/>  
          </div>
          <div>
            <Label>
              <label htmlFor="#">Nome do produto</label>
            </Label>
            <input type="name"/>
          </div>
          <div>
            <Label>
              <label htmlFor="#">Descrição</label>
            </Label>
            <input type="name"/>
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </div>
        </Itens>
      </FormBackground>
    </Body>
  );
}
