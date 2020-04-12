import React, {useState}  from 'react';
import Modal from "react-bootstrap/Modal";
import {Button}  from "react-bootstrap";

import {
  Container,
  BoxPrincipal,
  Mesas,
  Numeracao


} from "./styles";

import './styles.css'


export default function Cozinha () {
  const [modalIsOpen, setmodalIsOpen] = useState(false)

  const handleClose = () => setmodalIsOpen(false);
  const handleShow = () => setmodalIsOpen(true);

  
  const Valor = '56,99';


  return(
    <Container>
      <h1>Mesas</h1>
      <BoxPrincipal>
        <div className="Mesabg"variant="primary" onClick={handleShow}  >
          <Mesas onClick={() => setmodalIsOpen(true) } >
            <div className="numeracao"><Numeracao>1</Numeracao></div>
            <div className="Valor">R${Valor}</div>
          </Mesas>
          <Modal show={modalIsOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pedido !</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} className="BtnPedido" >
            Fazer Pedido 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>  
      </BoxPrincipal> 
      <div className="Btn" >
        <button type="submit" ><i class="fas fa-plus"></i></button>
      </div>
    </Container>
  );
}
