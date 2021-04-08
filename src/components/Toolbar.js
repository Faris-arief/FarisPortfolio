import React, { useRef, useState } from 'react';
import "../sass/Toolbar.sass";
import logo from "../assets/images/farisicon.png";
import {ReactComponent as Git} from "../assets/images/Github.svg";
import Fb from "../assets/images/Facebook.svg";
import Linkedin from "../assets/images/Linkedin.svg"




export default function Toolbar() {
  const [isActive, changeActive]  = useState(false);
  const divRef = useRef();
  const svgRef = useRef();
  const mobileNav = useRef();
  const openNavbar = () =>{
    if(!isActive){
      divRef.current.style.background = "#FFFFFA";
      svgRef.current.style.stroke = "#0C99A3"
      mobileNav.current.style.display = "flex";


    }
    else{
      divRef.current.style.background = "#2F3E46";
      svgRef.current.style.stroke = "#FFFFFA";
      mobileNav.current.style.animation = "navUp 1s ease-out";
      mobileNav.current.style.display = "none";
    }
    changeActive(!isActive);
  }
  return (
  <div className="Toolbar">
    <div className="Leftside">
      <div className="Logo">
        <a href="/">
          <div className="LogoContainer">
            <img className="LogoIcon" src={logo} alt="My Logo"></img>
            <h1 className="LogoText">Nik Faris Arief</h1>
          </div>
        </a>
      </div>
      <div className = "Socials">
          <a href="https://github.com/Faris-arief" className = "SocialLogo">
            <Git className="SocialIcon"></Git>
          </a>
          <a href="https://www.linkedin.com/in/nik-faris-arief-nik-kamarudin-b723a8187" className = "SocialLogo">
            <img src={Linkedin} alt="LinkedIn Profile" className="SocialIcon"></img>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009453340349" className = "SocialLogo">
            <img src={Fb} alt="Facebook link" className="SocialIcon"></img>
          </a>
      </div>
    </div>
    <div className="Rightside">
      <div className="MobileIconContainer" onClick={openNavbar} ref={divRef}>
        <svg className="MobileIcon" width="35" height="35" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
          <path d="M0 1H6.5H13M0 5H13M0 9H6.5H13"  strokeWidth="2"/>
        </svg>
      </div>
      <div className={isActive===true? "Activated": "Deactivated"} ref={mobileNav}>
        <a className="Links" href="/projects">
          <p>Projects</p>
        </a>
        <a className="Links" href="/aboutme">
          <p>About Me</p>
        </a>
        <a className="Links" href="/contactme">
          <p>Contact Me</p>
        </a>
      </div>
      <div className="Navbar">
        <a className="NavContent" href="/projects">
          <p className="Text">Projects</p>
          <svg className="Vec" width="20" height="20" fill="none" viewBox="0 0 26 26">
            <path d="M23 13L13 23L3 13L13 3L23 13Z"  strokeWidth="4"></path>
          </svg>
        </a>
        <a className="NavContent" href="/aboutMe">
          <p className="Text">About Me</p>
          <svg className="Vec" width="20" height="20" fill="none" viewBox="0 0 26 26">
            <path d="M23 13L13 23L3 13L13 3L23 13Z"   strokeWidth="4"></path>
          </svg>
        </a>
        <a className="NavContent" href="/contactMe">
          <p className="Text">Contact Me</p>
          <svg className="Vec" width="20" height="20" fill="none" viewBox="0 0 26 26">
            <path d="M23 13L13 23L3 13L13 3L23 13Z" strokeWidth="4"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>);
}