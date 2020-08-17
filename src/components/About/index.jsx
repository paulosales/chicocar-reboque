import React from "react";
import { AboutContainer } from "./styles";

const About = () => {
  return (
    <AboutContainer>
      <div className="container text-center">
        <h2>Socorro e transporte de veículos de pequeno e médio porte.</h2>
        <p className="lead">
          Ligue agora para um de nossos números e solicite um orçamento dos
          nossos serviços. Atendendemos também por Whastapp{" "}
          <strong>
            <span className="fa fa-whatsapp"> </span> (85) 98854-6684.
          </strong>
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;
