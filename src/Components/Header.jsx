import React, { useState,useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "../Styles/Header.scss";
import {HashLink} from "react-router-hash-link"
function Header() {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme((prev) => !prev);
    document.body.classList.toggle("dark-theme-variables");
  };
  const ref = useRef();
  const handleMenu=()=>{
    ref.current.classList.toggle('toggle');
  }
  return (
    <>
      <header>
        <div className="navbar">
          <HashLink to={"/#home"} className="first-part">
            <h1>Rama</h1>
          </HashLink>
          <div className="middle-part" ref={ref}>
            <div className="close-btn">
              <button onClick={handleMenu}>
                <AiOutlineClose />
              </button>
            </div>
            <ul>
              <li>
                <HashLink to={"/#home"} onClick={handleMenu}>home</HashLink>
              </li>
              <li>
                <HashLink to={"/#about"} onClick={handleMenu}>about</HashLink>
              </li>
              <li>
                <HashLink to={"/#skills"} onClick={handleMenu}>skills</HashLink>
              </li>
              <li>
                <HashLink to={"/#projects"} onClick={handleMenu}>projects</HashLink>
              </li>
              <li>
                <HashLink to={"/#contact"} onClick={handleMenu}>contact</HashLink>
              </li>
            </ul>
          </div>
          <div className="last-part">
            <button onClick={handleTheme}>
              {theme ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
            <button className="menu" onClick={handleMenu}>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
