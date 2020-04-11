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
      width:30%;
      margin:15px;
      height:80px;
      @media (max-width: 1100px) {
       width:90%;
     }
    };
  }
`;
export const BoxPrincipal = styled.div`
  background:white;
  width:90%;
  height:400px;
  border-radius:10px;
  display:flex;
  @media (max-width: 1100px) {
    display:block;
    align-items:center;
  }

`;
export const Numeracao = styled.div`
  margin-top:12px;
`;
export const Mesas = styled.div`
  width:100%;
  height:80px;
  background:#172b4d;
  color:white;
  display:flex;
  border-radius:5px;
  justify-content:space-between;
  .numeracao{
    background:#2dcecc;
    height:50px;
    margin-top:13px;
    margin-left:10px;
    width:20%;
    text-align:center;
    border-radius:5px;
  }
  .Valor{
    padding:10px;
    margin-top:14px; 
    color:#2dce89;
    font-weight:bold;
  }

`;


