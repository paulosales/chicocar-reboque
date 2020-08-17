import React from "react";
import PhoneList from "../PhoneList";
const {
  HeaderContainer,
  Billboard,
  PageTitle,
  PageSubTitle,
  Logo,
  HeaderContent,
} = require("./styles");

const Header = () => {
  return (
    <HeaderContainer>
      <Billboard>
        <Logo alt="Logotipo" src="assets/images/chicocarreboque.png" />
        <HeaderContent>
          <PageTitle>Chicocar Reboque 24hs</PageTitle>
          <PageSubTitle>
            Fortaleza-CE, Caucaia-CE e região metropolitana
          </PageSubTitle>
          <PhoneList />
        </HeaderContent>
      </Billboard>
    </HeaderContainer>
  );
};

export default Header;
