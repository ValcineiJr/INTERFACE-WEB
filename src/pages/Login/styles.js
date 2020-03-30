import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  min-width: 100%;
  height: 100%;
  background: #172b4d;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`;
export const BoxLogin = styled.div`
  background: #fafafa;
  max-width: 500px;
  width: 100%;
  height: 513px;
  border-radius: 10px;
  padding: 65px 55px 54px 55px;
`;
export const TitleBox = styled.h1`
  text-align: center;
  font-weight: bold;
  padding-bottom: 40px;
`;
export const FormLogin = styled.form`
  input {
    width: 100%;
    padding: 0 7px 0 43px;
    height: 55px;
    outline: none;
    border: none;
    border-bottom: 2px solid #d9d9d9;
  }
  label {
    margin-top: 15px;
    font-size: 14px;
    color: #333333;
    line-height: 1.5;
    padding-left: 7px;
  }
`;
export const InputIcon = styled.div`
  position: relative;
  i {
    font-size: 20px;
    color: #888;
    position: absolute;
    padding-left: 15px;
    padding-top: 10px;
  }
`;
export const ForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    color: #666;
    text-decoration: none;
    padding: 8px 0 31px;
    font-size: 14px;
  }

  a:hover {
    color: blue;
  }
`;
export const SubmitBtn = styled.input`
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  width: 100%;
  height: 50px;
  background: #172b4d;
  border: 0;
  border-radius: 25px;
`;
export const ContainerMessage = styled.div`
  display: ${props => props.show};
  position: absolute;
  top: 0;
  justify-content: center;
  background: ${props => props.bgColor};
  margin-top: 10px;
  padding: 40px;
  min-width: 220px;
  border-radius: 20px;
  transition: all 0.6s;
`;
export const TextMessage = styled.span`
  color: #fff;
  font-size: 18px;
`;
