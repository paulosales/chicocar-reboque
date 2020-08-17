import React from "react";
import { MenuContainer } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <a
            id="menu-close"
            href="#"
            className="btn btn-light btn-lg pull-right toggle"
          >
            <i className="fa fa-times"></i>
          </a>
          <li className="sidebar-brand">
            <a className="js-scroll-trigger" href="#top">
              Chicocar Reboque
            </a>
          </li>
          <li>
            <a className="js-scroll-trigger" href="#top">
              Inicio
            </a>
          </li>
          <li>
            <a className="js-scroll-trigger" href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a className="js-scroll-trigger" href="#services">
              O que fazemos
            </a>
          </li>
          <li>
            <a className="js-scroll-trigger" href="#portfolio">
              Nosso trabalho
            </a>
          </li>
          <li>
            <a
              className="js-scroll-trigger"
              href="#contact"
              onClick='$( "#menu-close").click();'
            >
              Onde estamos
            </a>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
