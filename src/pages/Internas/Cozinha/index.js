import React from 'react';

import {
  Body,
  ContainerPrincipal,
  BackgroundButton,
  BackgroundContainerPrincipal
} from "./styles";


export default function Cozinha () {
  


  return(
    <Body>
            <h1>Pedidos</h1>
          <ContainerPrincipal/>
          < BackgroundButton>
            <button href='#' type="reset">SAIR</button>
          </BackgroundButton>
    </Body>
  );
}
