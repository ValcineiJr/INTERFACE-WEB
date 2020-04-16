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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:10vh;
  form{
    text-align:center;
    background:white;
    height:60%;
    width:40%;
    border-radius:5px;
    .divForm{
      margin-top:130px;

    }

  }
`;
export const Title = styled.h1`
    font-family: "Poppins", sans-serif; 
    color:black;
`;
