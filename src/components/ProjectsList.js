import React, { useEffect, useRef, useState } from 'react';
import '../sass/ProjectsList.sass';

export default function ProjectsList() {
  const [word, changeWord]  = useState("clients");
  const tealText = useRef();

  useEffect(() => {
    const interval = setInterval(async function(){
        if(word ==="clients") {
          tealText.current.classList.remove("anim");
          tealText.current.classList.add("anim");
          changeWord("personal-use");
        }
        else{
          tealText.current.classList.remove("anim");
          tealText.current.classList.add("anim");
          changeWord("clients");
        }
    }, 3000);
    return () => clearInterval(interval);
  },);
  return (
    <div id="main">
      <div className="banner">
          <div className="text">
            <h1 className="projectText">Projects made for</h1>
            <h1 className="tealText anim" ref={tealText}>{word}</h1>
            <p className="smallText"> These projects were made for clients/work. As such, the source code will not be available to view. Some personal projects’ repos are made public</p>
          </div>
      </div>
      <div className="projects">
        <div className="buttonList">
          <button className="button">
            <p>All Projects</p>
          </button>
          <button className="button">
            <p>Work</p>
          </button>
          <button className="button">
            <p>Personal</p>
          </button>
        </div>

      </div>

    </div>
  );
}