import React, { useState } from "react";
import {
  AuthIcon,
  AvatarConfig,
  Body,
  Button,
  Container,
  DashboardItem,
  DashboardItemFooter,
  DashboardItemHeader,
  DashboardMenu,
  Header,
  HeaderLeft,
  HeaderRight,
  ItemIcon,
  ItemNome,
  ItemTitle,
  LogoBox,
  MenuBox
} from "./styles";
import "./styles.css";

export default function Dashboard() {
  const [theme, setTheme] = useState("dark");
  const PrimaryTheme = {
    bgColor: "#172b4d",
    shadowColor: "#0d2042",
    headerColor: "#172b4d",
    ItemColor: "#0a1b36",
    colorText: "#fff"
  };
  const SecondaryTheme = {
    bgColor: "#172b4d",
    shadowColor: "#0d2042",
    headerColor: "#172b4d",
    ItemColor: "#fafafa",
    colorText: "#171717"
  };
  const ItensInfo = [
    {
      name: "Caixa",
      icon: "fas fa-cash-register",
      area: "um",
      cor1: "#2dce89",
      cor2: "#2dcecc",
      auth: "Autenticação Necessária",
      verified: 0
    },
    {
      name: "Pedidos",
      icon: "fas fa-hand-pointer",
      area: "dois",
      cor1: "#11cdef",
      cor2: "#1171ef",
      auth: "Autenticação Necessária",
      verified: 0
    },
    {
      name: "Cozinha",
      icon: "fas fa-utensils",
      area: "tres",
      cor1: "#fb6340",
      cor2: "#fbb140",
      auth: "Autenticação Necessária",
      verified: 1
    },
    {
      name: "Administração",
      icon: "fas fa-user-shield",
      area: "quatro",
      cor1: "#f5365c",
      cor2: "#f5365c",
      auth: "Acesso Restrito",
      verified: 0
    }
  ];

  function handleTheme() {
    if (theme == "dark") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  }

  function RenderItem() {
    return ItensInfo.map(item => (
      <DashboardItem
        key={item.area}
        cor={
          theme == "dark" ? PrimaryTheme.ItemColor : SecondaryTheme.ItemColor
        }
        shadowColor={
          theme == "dark"
            ? PrimaryTheme.shadowColor
            : SecondaryTheme.shadowColor
        }
        area={item.area}
      >
        <DashboardItemHeader>
          <HeaderLeft>
            <ItemTitle>Gerenciar</ItemTitle>
            <ItemNome
              cor={
                theme == "dark"
                  ? PrimaryTheme.colorText
                  : SecondaryTheme.colorText
              }
            >
              {item.name}
            </ItemNome>
          </HeaderLeft>
          <HeaderRight>
            <ItemIcon
              style={{
                background: `linear-gradient(87deg, ${item.cor1} 0, ${item.cor2} 100%)`
              }}
            >
              <i class={item.icon}></i>
            </ItemIcon>
          </HeaderRight>
        </DashboardItemHeader>

        <DashboardItemFooter
          cor={
            theme == "dark" ? PrimaryTheme.colorText : SecondaryTheme.colorText
          }
        >
          <span>
            {item.verified == 0 ? (
              <AuthIcon
                cor={
                  item.verified == 2
                    ? "#fff"
                    : item.verified == 1
                    ? "#2dce89"
                    : "#f5365c"
                }
                className="fas fa-lock"
              />
            ) : (
              <AuthIcon
                cor={
                  item.verified == 0
                    ? "#fff"
                    : item.verified == 1
                    ? "#2dce89"
                    : "#f5365c"
                }
                className="fas fa-lock-open"
              />
            )}
            {item.auth}
          </span>
        </DashboardItemFooter>
      </DashboardItem>
    ));
  }

  return (
    <Container>
      <Header
        cor={
          theme == "dark"
            ? PrimaryTheme.headerColor
            : SecondaryTheme.headerColor
        }
      >
        <LogoBox></LogoBox>
        <MenuBox>
          <Button onClick={handleTheme}>
            {theme == "dark" ? (
              <i class="far fa-lightbulb"></i>
            ) : (
              <i class="fas fa-lightbulb"></i>
            )}
          </Button>
          <Button>
            <i class="fas fa-bell"></i>
          </Button>
          <Button>
            <i class="fas fa-cog"></i>
          </Button>
          <Button>
            <AvatarConfig>
              <img
                width="36"
                height="36"
                src="https://www.communityskillscentre.com/wp-content/uploads/2019/07/placeholder-man.png"
                alt=""
              />
              <span>Empresa</span>
            </AvatarConfig>
          </Button>
        </MenuBox>
      </Header>
      <Body
        cor={theme == "dark" ? PrimaryTheme.bgColor : SecondaryTheme.bgColor}
      >
        <DashboardMenu>
          <RenderItem />
        </DashboardMenu>
      </Body>
    </Container>
  );
}