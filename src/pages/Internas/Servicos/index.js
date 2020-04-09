import React from 'react';

import {
  Container,
  BoxPrincipal,
  Mesas


} from "./styles";

import './styles.css'


export default function Cozinha () {
  return(
    <Container>
      <h1>Mesas</h1>
      <BoxPrincipal>
        <div className="Mesabg" >
              <div>
                <Mesas>asdad</Mesas>
              </div>
              <div>
                <Mesas>asdad</Mesas>
              </div>
        </div>
      </BoxPrincipal> 
      <div className="Btn" >
        <button type="submit"><i class="fas fa-plus"></i></button>
      </div>
    </Container>
  );
}
