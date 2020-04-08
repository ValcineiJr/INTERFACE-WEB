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
  position: relative;
  div{

  .button{
    height:60px;
    width:60px;
    border-radius:50%;
    border-style:none;
    outline:0;
    background:#1171ef;
    color:#FFFF;
    margin-top:350px;
    @media (max-height: 736px) {
        margin-top:320px;
      } ;
    @media (max-height: 812px) {
      margin-top:380px;
    };
    @media (max-height: 1024px) {
      margin-top:560px;
      height:70px;
      width:70px;
    };
    @media (max-height: 1366px) {
      margin-top:850px;
      height:90px;
      width:90px;
    };
    @media (max-height: 731px) {
      margin-top:200px;

    };
    @media (max-height: 850px) {
      margin-top:380px;
    };
      
    }
  }

`
export const Mesa = styled.div`
    margin-top:30px;
    width:90%;
    background:white; 
    height:80px;
    align-items:center;
    font-family: "Poppins", sans-serif; 
    border-radius:5px;
    @media (max-height: 1024px) {
      height:90px;
    };
      
`

