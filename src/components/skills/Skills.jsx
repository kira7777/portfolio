import React from "react";
import "./skills.css";
import css from "../../assets/css3.svg";
import expressjs from "../../assets/expressjs.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html5.jpg";
import javascript from "../../assets/javascript.svg";
import figma from "../../assets/figma.svg";
import nodejs from "../../assets/nodejs.svg";
import reactjs from "../../assets/react.svg";
import tailwind from "../../assets/tailwindcss.svg";
import php from "../../assets/php.svg";
import laravel from "../../assets/Laravel.svg";
import mongodb from "../../assets/mongodb.svg";

const skillsData = [
  {
    id: 1,
    name: "HTML5",
    icon: html,
    level: "Experienced",
    description: "User Interface Design",
  },
  {
    id: 2,
    name: "CSS3",
    icon: css,
    level: "Experienced",
    description: "Responsive Web Design",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
    level: "Experienced",
    description: "Dynamic Web Applications",
  },
  {
    id: 4,
    name: "Express.js",
    icon: expressjs,
    level: "Intermediate",
    description: "Backend Development",
  },
  {
    id: 5,
    name: "Git",
    icon: git,
    level: "Experienced",
    description: "Version Control",
  },
  {
    id: 6,
    name: "GitHub",
    icon: github,
    level: "Experienced",
    description: "Collaboration and Sharing",
  },
  {
    id: 7,
    name: "Figma",
    icon: figma,
    level: "Intermediate",
    description: "UI/UX Design Tool",
  },
  {
    id: 8,
    name: "Node.js",
    icon: nodejs,
    level: "Intermediate",
    description: "JavaScript Runtime",
  },
  {
    id: 9,
    name: "React.js",
    icon: reactjs,
    level: "Intermediate",
    description: "Frontend Library",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: tailwind,
    level: "Intermediate",
    description: "Utility-First CSS Framework",
  },
  {
    id: 11,
    name: "PHP",
    icon: php,
    level: "Beginner",
    description: "Server-Side Scripting",
  },
  {
    id: 12,
    name: "Laravel",
    icon: laravel,
    level: "Beginner",
    description: "PHP Framework",
  },
  {
    id: 13,
    name: "MongoDB",
    icon: mongodb,
    level: "Beginner",
    description: "NoSQL Database",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container skills-container">
        {skillsData.map((skill) => (
          <div className="card-skill" key={skill.id}>
            <div className="icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <div className="content">
              <h4>{skill.name}</h4>
              <p className="text-light">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
