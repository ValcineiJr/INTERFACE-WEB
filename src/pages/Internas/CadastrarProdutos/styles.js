import styled from "styled-components";

export const Body = styled.div`
  background:#172b4d;
  width:100%;
  height:100vh;
  align-items:center;
  margin:0;
  font-family: "Poppins", sans-serif;
`
export const FormBackground = styled.div`
  width:500px;  
  height:800px;
  color:white;
  background:white;
  margin:0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align:center;
  padding:30px;
  input{
    color:black;
  }
  div{
    padding:15px;
  }
  label{
    color:black;

  }
  button{
    width:300px;
    height:50px;
    margin-top:10px;
    background:#2dcecc;
    border-radius:5px;
    color:white;
    border-style:none;
    outline:0; 
  }
`
export const Backgroundtitlle = styled.div`
  
`
export const Label = styled.div`
  padding-left:10px;
`
export const Itens = styled.div`
  margin-top:100px
`


