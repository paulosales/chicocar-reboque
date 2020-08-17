import React from "react";
import { WhatWeDoContainer } from "./styles";

export default function WhatWeDo() {
  return (
    <WhatWeDoContainer>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-10 mx-auto">
            <h2>O que fazemos</h2>
            <hr className="small" />
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-medkit fa-stack-1x text-primary"></i>
                  </span>
                  <h4>
                    <strong>Socorro de veículos</strong>
                  </h4>
                  <p>Socorremos e transportamos o seu veículo.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-whatsapp fa-stack-1x text-primary"></i>
                  </span>
                  <h4>
                    <strong>Whatsapp</strong>
                  </h4>
                  <p>
                    Você poderá entrar em contato conosco através do Whastapp.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="service-item">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-phone fa-stack-1x text-primary"></i>
                  </span>
                  <h4>
                    <strong>Telefones</strong>
                  </h4>
                  <p>Ou se preferir poderá nos ligar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhatWeDoContainer>
  );
}
