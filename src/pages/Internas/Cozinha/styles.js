import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  background: #172b4d;
  min-width: 100%;
  min-height: 100%;
  font-family: "Poppins", sans-serif;
  align-items:center;
  h1{
    margin-top:20px;
    color:white;
  }
`;


export const ContainerPrincipal = styled.div`
  height:400px;
  width:90%;
  background:white;
  margin-top:10px;
  border-radius:5px;
`;
export const BackgroundButton = styled.div`
  width:90%;
  height:100%;
  background:red;
  background:transparent;
  button{
    margin-top:10px;
    float:right;
    height:35px;
    width:100px;
    background:#fb6340;
    border-style:none;
    border-radius:3px;
    color:#FFF;
  }
`;



