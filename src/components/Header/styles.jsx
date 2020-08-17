import { device } from "../../helpers/devices";

const { default: styled } = require("styled-components");

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;

  width: 100%;
  min-height: 100vh;
  background: url(assets/images/bg.jpg) no-repeat center center scroll;
  background-size: cover;
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px rgba(220, 233, 255, 0.48);
`;

export const Billboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 10px;
  color: #c00;

  background: url(assets/images/opaqueBG.png) 0px 0px repeat;
`;

export const Logo = styled.img`
  width: 95%;

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.desktop} {
    width: 60%;
  }
`;

export const HeaderContent = styled.div`
  margin-top: 45px;
  width: 95%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px rgba(220, 233, 255, 0.48);

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.desktop} {
    width: 60%;
  }
`;

export const PageTitle = styled.h1`
  color: #000;
`;

export const PageSubTitle = styled.h2`
  color: #000;
`;
