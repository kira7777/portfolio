import React from "react";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import "./services.css";
function Services() {
  return (
    <section className="services" id="services">
      <div className="top-section">
        <h5>what i over 😌</h5>
        <h2>Service</h2>
      </div>

      <div className="container container-services">
        <article className="cards">
          <div className="card">
            <MdDesignServices className="icon" />
            <h3>web design</h3>
            <p className="text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              consequatur!
            </p>
          </div>

          <div className="card">
            <IoIosRocket className="icon" />
            <h3>web design</h3>
            <p className="text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              consequatur!
            </p>
          </div>

          <div className="card about-card">
            <FaCode className="icon" />
            <h3>web design</h3>
            <p className="text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              consequatur!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
