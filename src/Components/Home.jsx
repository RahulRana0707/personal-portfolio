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
import { FaGitAlt, FaPhoneAlt, FaJava, FaReact } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiUser4Line } from "react-icons/ri";
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
import RahulRanaCV from "../Assets/RahulRanaCV.pdf";
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
            <a
              href={RahulRanaCV}
              download="RahulRanaCV"
              className="download-cv-button"
            >
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
      <div id="contact" className="contact-page">
        <div className="parent-container">
          <div className="details-container">
            <div className="circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="contact-heading">
              <h2>Get in Touch with Us</h2>
            </div>
            <div className="contact-subheading">
              <h4>
                Have a question or feedback? We would love to hear from you!
              </h4>
            </div>
            <div className="contact-details">
              <div className="phone-detail">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="detail">
                  <span style={{ marginRight: "4px" }} className="country-code">
                    +91
                  </span>
                  <span className="number">8600639680</span>
                </div>
              </div>
              <div className="email-details">
                <div className="icon">
                  <AiFillMail />
                </div>
                <div className="detail">
                  <span
                    style={{ textTransform: "none" }}
                    className="email-detail"
                  >
                    rr8407084@gmail.com
                  </span>
                </div>
              </div>
              <div className="address-detail">
                <div className="icon">
                  <MdLocationOn />
                </div>
                <div className="detail">
                  <span className="country-name" style={{ marginRight: "4px" }}>
                    India,
                  </span>
                  <span className="state-name">Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="social-details">
              <div className="social-icons">
                <AiFillGithub />
              </div>
              <div className="social-icons">
                <AiFillInstagram />
              </div>
              <div className="social-icons">
                <AiFillLinkedin />
              </div>
            </div>
          </div>
          <form
            method="POST"
            action="https://formspree.io/f/xoqzvyan"
            className="mail-container"
          >
            <div className="username-box">
              <div className="label">
                <strong>Your Name</strong>
              </div>
              <div className="input-box">
                <div className="field-icon">
                  <RiUser4Line />
                </div>
                <input
                  type={"text"}
                  style={{ textTransform: "none" }}
                  className="user-name"
                ></input>
              </div>
            </div>
            <div className="mail-box">
              <div className="label">
                <strong>Mail</strong>
              </div>
              <div className="input-box">
                <div className="field-icon">
                  <AiFillMail />
                </div>
                <input
                  type={"text"}
                  style={{ textTransform: "none" }}
                  className="user-mail"
                ></input>
              </div>
            </div>
            <div className="user-message">
              <div className="label">
                <strong>message</strong>
              </div>
              <textarea
                rows={10}
                name="message"
                placeholder="Message"
                autoComplete="off"
              ></textarea>
            </div>
            <div className="submit-box">
              <button type="submit" name="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
