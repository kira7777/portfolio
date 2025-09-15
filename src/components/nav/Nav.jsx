import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";

import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => {
          setActive("#");
        }}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => {
          setActive("#about");
        }}
      >
        <LuUserRound />
      </a>
      <a
        href="#skills"
        className={active === "#skills" ? "active" : ""}
        onClick={() => {
          setActive("#skills");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        className={active === "#projects" ? "active" : ""}
        onClick={() => {
          setActive("#projects");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => {
          setActive("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
