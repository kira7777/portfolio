import React from "react";
import "./home.css";
import ahmedEissanobg from "../../assets/ahmed-eissa.png";
import cv from "../../assets/Ahmed Eissa.pdf";
import HomeSocials from "./HomeSocials";

const Home = () => {
  return (
    <div className="home">
      <div className="container home-container">
        <h4>Hello !</h4>
        <h1>Ahmed Eissa</h1>
        <h4 className="text-light">Frontend Developer || React Specialist</h4>
        <div className="btns">
          <a href={cv} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="me">
          <img src={ahmedEissanobg} alt="Ahmed Eissa" />
        </div>
        <a href="#about" className="scroll-down">
          Scroll Down
        </a>
        <HomeSocials />
      </div>
    </div>
  );
};

export default Home;
