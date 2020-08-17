import React from "react";
import propTypes from "prop-types";
import { PhoneContainer, PhoneIcon, PhoneNumber } from "./styles";

const Phone = (props) => {
  const { phone } = props;
  const whatappMessage =
    "Olá Chicocar, acessei o seu site. Poderia vir pegar o meu veículo? Ele está localizado ...";

  return (
    <PhoneContainer
      href={
        phone.whatsapp
          ? `https://api.whatsapp.com/send?phone=+55${phone.canonic}&text=${whatappMessage}`
          : `tel:${phone.canonic}`
      }
    >
      <PhoneIcon>
        <i
          className={
            phone.whatsapp ? "fa fa-whatsapp" : "fa fa-mobile phone-icon"
          }
        ></i>
      </PhoneIcon>
      <PhoneNumber>{phone.formatted}</PhoneNumber>
    </PhoneContainer>
  );
};

Phone.propTypes = {
  phone: propTypes.shape({
    whatsapp: propTypes.bool,
    canonic: propTypes.string,
    formatted: propTypes.string,
  }),
};

export default Phone;
