import React from 'react';
import { Button } from 'react-bootstrap';
import {
  Container,
  Mesa

  

} from "./styles";

import './styles.css'




export default function Cozinha () {
  return(
    <Container>
          <Mesa>
            <div className="Number" >
              1
            </div>
            <div className="Value" >
              R$:49,99
            </div>
          </Mesa>

          <div className="BackgroundButton" >
            <button type="submit"  className="button" ><i class="fas fa-plus"></i></button>
          </div>
    </Container>
  );
}
