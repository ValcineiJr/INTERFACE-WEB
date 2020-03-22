import React from "react";
import {
  AvatarConfig,
  Body,
  Button,
  Container,
  Header,
  LogoBox,
  MenuBox
} from "./styles";

export default function Dashboard() {
  let cor = "#172b4d";
  return (
    <Container cor={cor}>
      <Header>
        <LogoBox></LogoBox>
        <MenuBox>
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
      <Body></Body>
    </Container>
  );
}
