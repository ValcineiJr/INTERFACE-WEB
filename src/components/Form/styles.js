import styled from "styled-components";

export const Container = styled.div``;
export const SignIn = styled.button`
  margin-top: 10px;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  background: #172b4d;
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;
export const Input = styled.input`
  width: 70%;
  margin-top: 15px;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  color: #000;
  outline: none;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;
export const FormBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const FormHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const FormBody = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormTitle = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: #172b4d;

  font-family: "Poppins", sans-serif;
`;
export const CloseButton = styled.span`
  i {
    font-size: 26px;
    cursor: pointer;
    color: #f5363c;
  }
`;
