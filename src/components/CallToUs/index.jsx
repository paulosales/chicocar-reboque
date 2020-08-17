import React from "react";
import { CallToUsContainer } from "./styles";
import PhoneList from "../PhoneList";

export default function CallToUs() {
  return (
    <CallToUsContainer>
      <div className="container text-center">
        <h3>
          Solicite um orçamento. Clique em um dos números do telefone abaixo e
          fale conosco:
        </h3>
        <PhoneList />
      </div>
    </CallToUsContainer>
  );
}
