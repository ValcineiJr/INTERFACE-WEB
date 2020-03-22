import styled from "styled-components";

export const Container = styled.div`
  background: #172b4d;
  flex: 1;
  height: 100vh;
`;
export const Header = styled.div`
  background: ${props => props.cor};
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  height: 77px;
  display: flex;
  justify-content: space-between;
`;
export const Body = styled.div`
  background: ${props => props.cor};
`;
export const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoBox = styled.div``;
export const AvatarConfig = styled.div`
  img {
    border-radius: 18px;
  }
  span {
    color: #fff;
    margin-left: 12px;
  }
`;

export const Button = styled.a`
  background: none;
  border: none;
  outline: none;
  margin: 0 12px;
  cursor: pointer;

  i {
    color: #fff;
  }

  i:hover {
    color: #ddd;
  }
`;
