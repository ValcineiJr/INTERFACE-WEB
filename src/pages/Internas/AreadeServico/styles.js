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
  width:100%;
  height:100vh;
 
  .BackgroundButton{
    padding:50px;
    align-items:center;
    text-align:center;
  }
  .button{
    align-items:center;
    text-align:center;
    height:60px;
    width:60px;
    border-radius:50%;
    border-style:none;
    outline:0;
    background:#1171ef;
    color:#FFFF;
    margin-top:350px;
    position:absolute;
    bottom: 0;
    margin-left: 10px;
    margin-bottom: 30px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) }
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

      
`

