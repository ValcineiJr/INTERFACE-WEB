import styled from "styled-components";

export const Container = styled.div`
  background: #172b4d;

  padding-bottom: 58px;
`;
export const Header = styled.div`
  background: ${props => props.cor};
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  height: 11%;
  display: flex;
  justify-content: space-between;
`;
export const Body = styled.div`
  background: ${props => props.cor};
  padding: 0 25px;
  padding-top: 50px;
  height: 89%;
`;
export const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoBox = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
  width: 170px;
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 55px;
  margin-right: 5px;
`;
export const LogoName = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
export const DashboardMenu = styled.div`
  display: grid;
  grid-template-areas: "um dois tres quatro";
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-areas:
      "um dois"
      "tres quatro";
  }
  @media (max-width: 768px) {
    grid-template-areas:
      "um"
      "dois"
      "tres"
      "quatro";
  }
`;
export const DashboardItem = styled.div`
  height: 120px;
  background: ${props => props.cor} !important;
  grid-area: ${props => props.area};
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 5px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 15px ${props => props.shadowColor},
      0 5px 2px ${props => props.shadowColor};
  }
`;
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

  span {
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
  }

  i {
    color: #fff;
  }

  i:hover {
    color: #ddd;
  }
`;

export const DashboardItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;
export const DashboardItemFooter = styled.div`
  padding: 0 30px;
  span {
    color: ${props => props.cor};
    font-style: italic;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderRight = styled.div``;
export const ItemTitle = styled.span`
  color: #8898aa;
  text-transform: uppercase;
  font-size: 0.8125rem;
  font-family: "Poppins", sans-serif;
`;
export const ItemNome = styled.span`
  color: ${props => props.cor};
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;
export const ItemIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  i {
    color: #fff;
    font-size: 20px;
  }
`;
export const AuthIcon = styled.i`
  margin-right: 10px;
  color: ${props => props.cor};
`;
export const DropdownBox = styled.a`
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DropdownFather = styled.div`
  border: 1px solid ${props => props.borderColor};
  background: ${props => props.bgColor} !important;
`;
export const DropdownText = styled.span`
  color: ${props => props.color};
  font-size: 14px;
  padding-top: 10px;
  font-weight: bold;
`;
export const DashboardCash = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 55px;
  height: 320px;
`;
export const CashMenu = styled.div`
  flex: 1;
  background: #0a1b36;
`;
export const Calculator = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
export const ZapBox = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 55px;
  height: 320px;
`;
