import React from "react";
import { PhoneListContainer } from "./styles";
import phones from "../../data/phones.json";
import Phone from "../Phone";

const PhoneList = () => {
  return (
    <PhoneListContainer>
      {phones.map((phone) => (
        <Phone key={phone.id} phone={phone} />
      ))}
    </PhoneListContainer>
  );
};

export default PhoneList;
