import React from "react";
import imageme from "../../assets/logo.png";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { PiFoldersLight } from "react-icons/pi";

import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="top-section">
        <h5>Get to know me</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={imageme} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </div>
            <div className="about-card">
              <FaUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ satisfied clients</small>
            </div>
            <div className="about-card">
              <PiFoldersLight className="about-icon" />
              <h5>Projects</h5>
              <small>5+ completed projects</small>
            </div>
          </div>
          <p>
            Front-End Developer with a Computer Science degree and strong
            React/Next.js skills. I build responsive, dynamic web apps using
            modern tools like Tailwind CSS, Redux, and TypeScript. I’ve
            developed educational platforms and productivity tools, and I thrive
            in collaborative teams. Currently seeking a React/React Native role
            to grow my skills in performance, SEO, and creative UI design.
          </p>
          <a href="#contact" className="btn btn-primary">
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
