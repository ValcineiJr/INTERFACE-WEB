import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Calculator from "../../components/Calculator";
import Form from "../../components/Form";
import SystemInfo from "../../components/SystemInfo";
import api from "../../services/api";
import {
  AuthIcon,
  AvatarConfig,
  Body,
  Button,
  CashMenu,
  Container,
  DashboardCash,
  DashboardItem,
  DashboardItemFooter,
  DashboardItemHeader,
  DashboardMenu,
  DropdownBox,
  DropdownFather,
  DropdownText,
  Header,
  HeaderLeft,
  HeaderRight,
  ItemIcon,
  ItemNome,
  ItemTitle,
  Logo,
  LogoBox,
  LogoName,
  MenuBox,
  PrincipalCozinha,
  PrincipalCozinha2,
  TextoCozinha,
  ContainerCozinha,
  PedidosItens,
  DivPedidosItens,
  DivImg
} from "./styles";
import "./styles.css";

export default function Dashboard() {
  const [theme, setTheme] = useState("dark");
  const [showForm, setShowForm] = useState(false);
  const [showSystemInfo, setShowSystemInfo] = useState(false);
  const [TitleForm, setTitleForm] = useState("");
  const [ColorsForm, setColorForm] = useState([]);
  const [loginMessage, setLoginMessage] = useState("");
  const [openArea, setOpenArea] = useState("");

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const user = sessionStorage.getItem("user") || "";
  const caixa = sessionStorage.getItem("caixaLivre") || "";

 // useEffect(() => {
  //  if (!user) {
   //   history.replace(from);
  //  }
  //  if (caixa) {
  //    openCaixa();
 //   }
 // }, []);

  function openCaixa() {
    let info = ItensInfo;
    info[0].verified = 1;
    info[0].auth = "Acesso Permitido";
    setItensInfo(info);
    setOpenArea("caixa");
  }

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
    //Itens da Dashboard
  const [ItensInfo, setItensInfo] = useState([
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
      verified: 0
    },
    {
      name: "Administração",
      icon: "fas fa-user-shield",
      area: "quatro",
      cor1: "#f5363c",
      cor2: "#f5367c",
      auth: "Acesso Restrito",
      verified: 0
    }
  ]);
  const ItensDrop = [
    {
      name: "Vendas",
      icon: "fas fa-cash-register",
      color1: "#2dce89",
      color2: "#2dcecc",
      slug: "#"
    },
    {
      name: "Pedidos",
      icon: "fas fa-hand-pointer",
      color1: "#11cdef",
      color2: "#1171ef",
      slug: "#"
    },
    {
      name: "Finanças",
      icon: "fas fa-user-shield",
      color1: "#f5363c",
      color2: "#f5367c",
      slug: "#"
    }
  ];
        //Tema
  function handleTheme() {
    if (theme == "dark") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  }

  function InfoDropdown() {
    return (
      <>
        <Button role="button" id="dropdownMenuLink" data-toggle="dropdown">
          <i class="fas fa-cog"></i>
        </Button>
        <DropdownFather
          className="dropdown-menu dropFather"
          aria-labelledby="dropdownMenuLink"
          bgColor={
            theme == "dark" ? PrimaryTheme.ItemColor : SecondaryTheme.ItemColor
          }
          borderColor={
            theme == "dark"
              ? PrimaryTheme.shadowColor
              : SecondaryTheme.shadowColor
          }
        >
          <div className="drop">
            {ItensDrop.map(item => (
              <DropdownBox href={item.slug}>
                <ItemIcon
                  style={{
                    background: `linear-gradient(87deg, ${item.color1} 0, ${item.color2} 100%)`
                  }}
                >
                  <i class={item.icon}></i>
                </ItemIcon>
                <DropdownText
                  color={
                    theme == "dark"
                      ? PrimaryTheme.colorText
                      : SecondaryTheme.colorText
                  }
                >
                  {item.name}
                </DropdownText>
              </DropdownBox>
            ))}
          </div>
        </DropdownFather>
      </>
    );
  }

  function getOff() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("caixaLivre");
    history.replace(from);
  }

  function AvatarDropdown() {
    return (
      <>
        <span type="button" id="dropdownMenuButton" data-toggle="dropdown">
          {user.charAt(0).toUpperCase() + user.slice(1)}
        </span>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <Link class="dropdown-item" to="/perfil">
            Meu Perfil
          </Link>
          <a class="dropdown-item" href="#">
            Configurações
          </a>
          <a class="dropdown-item" href="#">
            Atividades
          </a>
          <a class="dropdown-item" href="#">
            Ajuda
          </a>
          <Link class="dropdown-item" onClick={getOff}>
            Sair
          </Link>
        </div>
      </>
    );
  }

  function RenderItem() {
    return ItensInfo.map(item => (
      <DashboardItem
        onClick={() => openForm(item.name, item.cor1, item.cor2)}
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

  function openForm(title, color1, color2) {
    setShowForm(true);
    setTitleForm(title);
    setColorForm([color1, color2]);
  }
  function openSystemInfo() {
    setShowSystemInfo(true);
  }

  async function handleLoginEmployee(data) {
    let response = await api.post("/employeeLogin", data);
    let message = response.data.msg;
    let code = response.data.code;
    let access = data.title;
    console.log(response, data);
    if (code == 0) {
      //Funcionário não cadastrado
      setLoginMessage(message);
    } else if (code == 1) {
      //Funcionário logado com sucesso
      if (access == "Caixa") {
        openCaixa();
        setShowForm(false);
        sessionStorage.setItem("caixaLivre", "true");
      }
    } else {
      //Senha incorreta
      setLoginMessage(message);
    }
  }

  function Modals() {
    return (
      <>
        <Modal
          show={showForm}
          centered={true}
          onHide={() => {
            setShowForm(false);
            setLoginMessage("");
          }}
        >
          <Modal.Body
            style={{
              borderRadius: 3,
              background: `linear-gradient(87deg, ${ColorsForm[0]} 0, ${ColorsForm[1]} 100%)`
            }}
          >
            <Form
              title={TitleForm}
              message={loginMessage}
              onSubmit={handleLoginEmployee}
              closeForm={() => {
                setShowForm(false);
                setLoginMessage("");
              }}
            />
          </Modal.Body>
        </Modal>
        <Modal show={showSystemInfo} onHide={() => setShowSystemInfo(false)}>
          <Modal.Body>
            <SystemInfo closeModal={() => setShowSystemInfo(false)} />
          </Modal.Body>
        </Modal>
      </>
    );
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
        <LogoBox onClick={openSystemInfo}>
          <Logo onClick src={logo} /> <LogoName>Horizon</LogoName>
        </LogoBox>
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
          <InfoDropdown />
          <Button>
            <AvatarConfig>
              <img
                width="36"
                height="36"
                src="https://www.communityskillscentre.com/wp-content/uploads/2019/07/placeholder-man.png"
                alt=""
              />
              <AvatarDropdown />
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
        <Modals />
        {openArea == "caixa" ? (
          <DashboardCash>
            <CashMenu>MENU</CashMenu>
            <Calculator />
          </DashboardCash>
        ) : (
          ""
        )}

      </Body>
    </Container>
  );
}
