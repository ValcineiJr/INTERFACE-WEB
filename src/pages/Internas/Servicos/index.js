import React  from 'react';
import Modal from "react-bootstrap/Modal";

import {
  Container,
  BoxPrincipal,
  Mesas,
  Numeracao


} from "./styles";

import './styles.css'


export default function Cozinha () {


  
  const Valor = '56,99';


  return(
    <Container>
      <h1>Mesas</h1>
      <BoxPrincipal>
        <div className="Mesabg" >
          <Mesas>
            <div className="numeracao"><Numeracao>1</Numeracao></div>
            <div className="Valor">R${Valor}</div>
          </Mesas>
        </div>  
        <div className="Mesabg" >
          <Mesas>
            <div className="numeracao"><Numeracao>1</Numeracao></div>
            <div className="Valor">R${Valor}</div>
          </Mesas>
        </div>  
          <div className="Mesabg" >
          <Mesas>
            <div className="numeracao"><Numeracao>1</Numeracao></div>
            <div className="Valor">R${Valor}</div>
          </Mesas>
        </div> 
        <div className="Mesabg" >
          <Mesas>
            <div className="numeracao"><Numeracao>1</Numeracao></div>
            <div className="Valor">R${Valor}</div>
          </Mesas>
        </div>
      </BoxPrincipal> 
      <div className="Btn" >
        <button type="submit" ><i class="fas fa-plus"></i></button>
      </div>
    </Container>
  );
}
