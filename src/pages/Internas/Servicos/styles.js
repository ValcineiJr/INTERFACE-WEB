import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  background: #172b4d;
  min-width: 100%;
  min-height: 100%;
  align-items:center;
  font-family: "Poppins", sans-serif; 
  h1 {
    padding:10px;
    font-family: "Poppins", sans-serif; 
    color:white;
  };
  .Btn{
    padding:30px;
    width:90%;

    button{
    float:right;
    width:70px;
    height:70px;
    border-radius:50%;
    outline:0;
    background:#fb6340;
    color:white;

  }
    };
    .Mesabg{
      width:100%;
      background:red;
      height:60px;
      display:flex;
    }
  }
`;
export const BoxPrincipal = styled.div`
  background:white;
  width:90%;
  height:700px;
  border-radius:10px;

`;
export const Mesas = styled.div`
  background:red;
  width:30%;
  height:60px;
  display:flex;
`;

