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
