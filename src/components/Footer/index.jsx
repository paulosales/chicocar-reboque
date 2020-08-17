import React from "react";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h4>
              <strong>Chicocar Reboque 24hs</strong>
            </h4>
            <p>Av. Nossa Senhora de Fátima, 2538, Tabapuãzinho, Caucaia-CE</p>

            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="tel:85988546684">
                  <i className="fa fa-whatsapp fa-fw fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="http://www.facebook.com/ChicoCarReboque">
                  <i className="fa fa-facebook fa-fw fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/chicocarreboque">
                  <i className="fa fa-twitter fa-fw fa-3x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://plus.google.com/102800336115363503335">
                  <i className="fa fa-google-plus fa-fw fa-3x"></i>
                </a>
              </li>
            </ul>
            <hr className="small" />
            <p className="text-muted">
              Direitos de cópia &copy; Chicocar Reboque 2017
            </p>
            <p className="text-muted">
              Créditos de imagens:{" "}
              <a href="http://www.freepik.com">jcomp / Freepik</a>
            </p>
          </div>
        </div>
      </div>
      <a
        id="to-top"
        href="#top"
        className="btn btn-dark btn-lg js-scroll-trigger"
      >
        <i className="fa fa-chevron-up fa-fw fa-1x"></i>
      </a>
    </FooterContainer>
  );
};

export default Footer;
