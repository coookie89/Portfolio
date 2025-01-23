import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import PageSlide from './PageSlide';
import { pink } from "@mui/material/colors";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

// logo
import { ReactComponent as LinkedLogo } from "./logo/linkedin.svg";
import { ReactComponent as GithubLogo } from "./logo/github.svg";
import { ReactComponent as ResumeLogo } from "./logo/resume.svg";

import "./App.css";

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const [section, setSection] = React.useState("about");

  const AboutRef = React.useRef();
  const ExpRef = React.useRef();
  const EduRef = React.useRef();
  const ProjectRef = React.useRef();

  function handleBackClick(type) {
    if (type === "about")
      AboutRef.current.scrollIntoView({ behavior: "smooth" });
    else if (type === "experience")
      ExpRef.current.scrollIntoView({ behavior: "smooth" });
    else if (type === "projects")
      ProjectRef.current.scrollIntoView({ behavior: "smooth" });
    else if (type === "education")
      EduRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleSectionOnclick = (type) => {
    handleBackClick(type);
    setSection(type);
    setChecked((prev) => !prev);
  };

  return (
    <main>
      <div className="main-container mr-lg ml-lg">
        <div className="left pt-md pb-md">
          <div className="container">
            <div className="intro">
              <div className="dp">
                <img alt="dp" src="../dp.jpg" />
              </div>
              <div>
                <h1>
                  Hi, I'm <b>Iris Yang</b>!
                </h1>
                <div className="description">
                  {/* <h2>Iris Yang</h2>
                      <h4>UNSW Student</h4>
                      <p>I develop scalable, user-friendly web applications and am passionate about continuous learning.</p> */}
                  {/* <h3>
                I develop scalable, user-friendly <b>web
                applications</b> and am passionate about <b>continuous learning</b>.
              </h3> */}
                  IT Student based in Sydney, Australia.
                </div>
              
            <div className="menu">
              <ul>
                <li onClick={() => handleSectionOnclick("about")}>About</li>
                <li onClick={() => handleSectionOnclick("experience")}>
                  Experience
                </li>
                <li onClick={() => handleSectionOnclick("projects")}>
                  Projects
                </li>
                <li onClick={() => handleSectionOnclick("education")}>
                  Education
                </li>
              </ul>
            </div>
            <div className="avatar">
              <a
                href="https://www.linkedin.com/in/chien-hwa-yang"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedLogo alt="Linkedin" />
              </a>
              <a
                href="https://github.com/coookie89"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo alt="GitHub" />
              </a>
              <a href="./Resume_IrisYang.pdf" target="_blank" rel="noreferrer">
                <ResumeLogo alt="Resume" />
              </a>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="right pt-md pb-md">
          {/* <PageSlide checked={checked} section={section}/> */}
          <div class="slide" ref={AboutRef}>
            <About />
          </div>
          <div class="slide" ref={ExpRef}>
            <Experience />
          </div>
          <div class="slide" ref={ProjectRef}>
            <Projects />
          </div>
          <div class="slide" ref={EduRef}>
            <Education />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
