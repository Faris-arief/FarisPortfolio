import React from 'react';
import "../sass/Home.sass";
import AboutMe from "../assets/images/Vec3.svg"
import Faris from "../assets/images/faris.png"
import Wireframe from "../assets/images/wireframe.png"
import Coding from "../assets/images/Coding.png"
import Test from "../assets/images/Test.png"
import HTML from "../assets/images/HTML.png"
import JS from "../assets/images/Javascript.png"
import PHP from "../assets/images/Php.png"
import Python from "../assets/images/Python.png"
import Ms from "../assets/images/Microsoft.png"
import Java from "../assets/images/Java.png"

export default function Home() {
  const languages = [{name:"HTML/CSS", img:HTML}, {name:"Javascript", img:JS},
  {name: "PHP", img:PHP}, {name:"Python", img:Python},  {name:"C / C#", img: Ms}, {name:"Java", img:Java}];
  return (
  <div className="Home">
    <div className="AboutMe">
      <div className="Parallelogram">
        <div className="Slant">
          <img src={AboutMe} alt="Slanting"></img>
          <div className="text">
            <p className="First">Hello ! I’m <span>Faris</span>.</p><br></br> I am an aspiring <br></br><span>fullstack</span>/<span className="otherText">software</span> developer</div>
        </div>
      </div>
      <div className="MyPic">
        <div className="firstCircle">
          <div className="secondCircle">
            <div className="thirdCircle">
              <img src={Faris} alt="Nik Faris Arief">

              </img>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div className="DoWhat">
      <h1>What I Do</h1>
      <div className="divBar">
        <div className="infoPanel">
          <img src={Wireframe} alt="Wireframe"></img>
          <h1>Construct Wireframes</h1>
          <ul className="list">
            <li>Design ERD diagrams for databases used in projects</li>
            <li>Create prototypes and wireframes for websites using tools such as Figma and Lucidchart</li>
            <li>Come up with UML diagrams which adhere to Software Design Patterns</li>
          </ul>
        </div>
        <div className="infoPanel">
          <img src={Coding} alt="Wireframe"></img>
          <h1>Develop Websites & Softwares</h1>
          <ul className="list">
            <li>Create websites using front-end frameworks such as HTML/CSS, React, and Vue</li>
            <li>Program softwares using OOP languages such as Java and C#.</li>
            <li>Query databases using SQL and NoSQL queries</li>
          </ul>
        </div>
        <div className="infoPanel">
          <img src={Test} alt="Wireframe"></img>
          <h1>Perform Tests</h1>
          <ul className="list">
            <li>Perform unit testing and integrated testing on programmed functions</li>
            <li>Perform User Accepted Testing to satisfy criteria set by clients</li>
            <li>Perform automated testing on built websites</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="Skillset">
      <h1>My Skillset</h1>
      <div className="Skills">
        {languages.map((language) =>
        (<div key={language.name} className="Skill">
          <img src={language.img} alt="programming languages"></img>
          <p>{language.name}</p>
        </div>))
        }

      </div>
    </div>

  </div>);
}