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
  font-family: "Poppins", sans-serif; 
  position: relative;
  width:100%;
  height:100vh;
  div {
    .gasto{
    background:red;
  }
  
 
 
  .BackgroundButton{
    padding:50px;
    align-items:center;
    text-align:center;
    display:flex;
  }
  .Number{
    text-align:center;
    width:60px;
    height:60%;
    padding:15px;
    margin-left:25px;
    background:#2dce89;
    border-radius:5px;
    color:white;
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
    cursor:pointer;
  }

  .backgroundDiv{
    display:flex; 
    justify-content: space-between;
    width:90%;
  }
  .BackgroundMesas{
    display:flex;
    flex-flow:row wrap;
  }
  .Value{
    margin-top:15px;
  }
`
export const Mesa = styled.div`
    margin-top:30px;
    width:15%;
    background:white; 
    height:80px;
    align-items:center;
    font-family: "Poppins", sans-serif; 
    border-radius:5px;
    display:flex;
    margin-left:30px;
    @media (max-width: 1450px) {
      width:30%;
    }
    @media (max-width: 1400px) {
      width:30%;
    }
    @media (max-width: 1050px) {
      width:40%;
    }
    @media (max-width: 800px) {
      width:90%;
    }
      
`

