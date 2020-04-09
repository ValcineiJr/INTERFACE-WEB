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
      <div className="BackgroundMesas" >
      <Mesa>
            <div className="backgroundDiv">
              <div className="Number" >
                1
              </div>
              <div className="Value" >
                R$:54,99
              </div>
            </div>
          </Mesa> 

      </div>

          <div className="BackgroundButton" >
            <button type="submit"  className="button" ><i class="fas fa-plus"></i></button>
          </div>
    </Container>
  );
}
