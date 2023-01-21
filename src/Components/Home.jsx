import React from "react";
import "../Styles/Home.scss";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDownload,
  AiFillHtml5,
  AiFillMail,
} from "react-icons/ai";
import { FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import {
  IoLogoPython,
  IoLogoWhatsapp,
  IoLogoSass,
  IoLogoJavascript,
} from "react-icons/io";
import Profile from "../Assets/profile.jpg";
import about_me from "../Assets/about_me.png";
import SkillsBox from "./SkillsBox";
import Project1 from "../Assets/Project1.png";
import Project2 from "../Assets/Project2.png";
import ProjectCard from "./ProjectCard";
import RahulRanaCV from "../Assets/RahulRanaCV.pdf" 
function Home() {
  return (
    <>
      <div id="home" className="home">
        <div className="intro">
          <h1>Hi, i'am rahul rana</h1>
          <h2>frontend developer</h2>
          <h4>
            high level experience in website design and logic of behind the UI
          </h4>
          <div className="social-links">
            <a href="https://github.com/RahulRana0707" target={"__blank"}>
              <span className="github">
                <AiFillGithub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/__rahul___rana/"
              target={"__blank"}
            >
              <span className="instagram">
                <AiFillInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-rana-663877241/"
              target={"__blank"}
            >
              <span className="linkedin">
                <AiFillLinkedin />
              </span>
            </a>
            <a href="https://wa.me/+918600639680" target={"__blank"}>
              <span className="whatsapp">
                <IoLogoWhatsapp />
              </span>
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={Profile} alt="Profile_Picture"></img>
        </div>
      </div>

      <div id="about" className="about">
        <div className="first-section">
          <h1>about me</h1>
          <h2>my introduction</h2>
        </div>
        <div className="second-section">
          <div className="svg-section">
            <img src={about_me} alt="About_me"></img>
          </div>
          <div className="about-details">
            <p>
              having 365 days of experience in we development, working in web
              technologies, delivering quality work.
            </p>
            <div className="conatiner">
              <div className="experience">
                <h2>365+</h2>
                <p>days experience</p>
              </div>
              <div className="projects">
                <h2>02+</h2>
                <p>completed projects</p>
              </div>
            </div>
            <a href={RahulRanaCV} download="RahulRanaCV" className="download-cv-button">
              <h2>download CV</h2>
              <span>
                <AiOutlineDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div id="skills" className="skills">
        <h1>my skills</h1>
        <div className="skills-container">
          <SkillsBox classname="html" logo=<AiFillHtml5 /> name="html" />
          <SkillsBox classname="sass" logo=<IoLogoSass /> name="sass" />
          <SkillsBox
            classname="js"
            logo=<IoLogoJavascript />
            name="javascript"
          />
          <SkillsBox classname="react" logo=<FaReact /> name="react" />
          <SkillsBox classname="github" logo=<AiFillGithub /> name="github" />
          <SkillsBox classname="gitbash" logo=<FaGitAlt /> name="git bash" />
          <SkillsBox classname="python" logo=<IoLogoPython /> name="python" />
          <SkillsBox classname="java" logo=<FaJava /> name="java" />
        </div>
      </div>
      <div id="projects" className="projects-page">
        <h1>my projects</h1>
        <div className="projects-conatiner">
          <div className="box">
            <ProjectCard image={Project1} link="/" />
            <h1>Portfolio webiste</h1>
          </div>
          <div className="box">
            <ProjectCard
              image={Project2}
              link="https://crypto-castle-668wacndh-rahulrana0707.vercel.app"
            />
            <h1>Crypto Castle</h1>
          </div>
        </div>
      </div>
      <div id="contact" className="contact">
        <div className="text-container">
          <div className="three-h1">
            <h1>let's chat.</h1>
            <h1>how can i help you ?</h1>
          </div>
          <p>let's create something together❤️‍🔥</p>
          <div className="mail-info">
            <span><AiFillMail/></span>
            <div className="email-id">
            <p>mail me at:</p>
            <b>rr8407084@gmail.com</b>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form action="https://formspree.io/f/xoqzvyan" method="POST" >
            <h1>send me a message❤️</h1>
            <input name="text" type={"text"} placeholder="Enter Your Name" autoComplete="off"></input>
            <input name="email" type={"email"} placeholder="Enter Your Email" autoComplete="off"></input>
            <textarea cols={40} rows={10} name="message" placeholder="tell me something/....." autoComplete="off"></textarea>
            <button type="submit" name="submit">send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
