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
`;
export const Box = styled.div`
  width:90%;
  height:80%;
  flex-direction: column;
  position: absolute;
  background:white;
  margin-top:75px;
  text-align:center;
  font-family: "Poppins", sans-serif;
  border-radius:5px;
  @media (max-width: 375px) {
      height:80%;
  }
`;
export const Title = styled.h1`
  color:black;
  font-family: "Poppins", sans-serif;
  margin-top:60px;
`;
export const Content = styled.div`
  margin-top:70px;
  div{
    padding:10px;
  }
  button{
    background:#11cdef;
    border-style:none;
    width:250px;
    height:40px;
    border-radius:3px;
  }
  .input{
    border-color:black;
  }
  @media (max-width: 375px) {
    button{
      padding:0;
    }
  input{
    width:25%;
  }
  @media (max-width: 414px) {
    margin-top:50px;
    input{
      width:200px;
  } 
  @media (max-width: 360px) {
    margin-top:35px;
  } 
  

`;



export const NomedoProduto = styled.div`
label{
  font-size:20px;
}
@media (max-width: 375px) {
    div{
      padding:0;
    }
`;
export const Descrição = styled.div`
label{
  font-size:20px;
}  
input{

}
@media (max-width: 375px) {
    div{
      padding:0;
    }
`;