import React from "react";
import ahmedEissanobg from "../../assets/ahmed-eissa.png";
import cv from "../../assets/Ahmed Eissa.pdf";
import HomeSocials from "./HomeSocials";
import SplitText from "./SplitText";
import Shuffle from "./Shuffle";
import TextPressure from "./TextPressure";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="container home-container">
        <h4>
          <SplitText
            text="Hello, there!"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h4>
        <h1>
          <Shuffle
            text="Ahmed Eissa"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </h1>
        <h4 className="text-light">
          <TextPressure
            text="Frontend Developer || React Specialist"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </h4>
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
