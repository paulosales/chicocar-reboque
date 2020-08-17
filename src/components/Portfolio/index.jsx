import React from "react";
import { PortfolioContainer } from "./styles";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2>Nosso trabalho</h2>
            <hr className="small" />
            <div className="row">
              <div className="col-md-6">
                <div className="portfolio-item">
                  <a href="#">
                    <img
                      className="img-portfolio img-fluid"
                      src="assets/images/portfolio-1.jpg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="portfolio-item">
                  <a href="#">
                    <img
                      className="img-portfolio img-fluid"
                      src="assets/images/portfolio-2.jpg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="portfolio-item">
                  <a href="#">
                    <img
                      className="img-portfolio img-fluid"
                      src="assets/images/portfolio-3.jpg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="portfolio-item">
                  <a href="#">
                    <img
                      className="img-portfolio img-fluid"
                      src="assets/images/portfolio-4.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
