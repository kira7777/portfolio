import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio11.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio33.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio4.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Educational Website",
    github: "https://github.com/kira7777/-Educational-School-.git",
    demo: "https://educational-school-8m13.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Automotive Service Center",
    github:
      "https://github.com/kira7777/Cars-_-Shop-using-Front-end-web-site.git",
    demo: "https://cars--shop-using-front-end-web-site.vercel.app/theme1/sport_cars.html",
  },
  {
    id: 3,
    image: IMG3,
    title: "leon company",
    github: "https://github.com/kira7777/leon-company.git",
    demo: "https://leon-company-ayst.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Lover",
    github: "https://github.com/kira7777/Food-Lover-Logo.git",
    demo: "https://food-lover-logo.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Product Management System",
    github: "https://github.com/kira7777/Product-management-System.git",
    demo: "https://product-management-system-nine.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "iphone store",
    github: "https://github.com/kira7777/iphone.git",
    demo: "https://iphone-eta-five.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="top-section">
        <h5>My recent work</h5>
        <h2>take a look</h2>
      </div>

      <div className="container projects-container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio-item">
            <div className="portfolio-item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-btn">
              <a href={github} className="btn">
                GitHub
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
