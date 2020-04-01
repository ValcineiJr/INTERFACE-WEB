import styled from "styled-components";

export const Container = styled.form`
  flex: 1;

  font-family: "Poppins", sans-serif;
  position: relative;
`;
export const SignIn = styled.input`
  margin-top: 23px;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  background: #fafafa;

  border: 1px solid #ddd;
  color: #000;
  font-size: 18px;
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

  &::placeholder {
    color: #000;
  }
`;
export const FormBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const FormHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const FormBody = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormTitle = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: #fafafa;
`;
export const CloseButton = styled.span`
  i {
    font-size: 26px;
    cursor: pointer;
    color: #fff;
  }
`;
export const MessageBox = styled.span`
  padding: 20px 40px;
  display: ${props => props.display};
  background: #dc3545;
  position: absolute;
  left: 50%;
  color: #fff;
  border-radius: 10px;
  transform: translateX(-50%);
`;
