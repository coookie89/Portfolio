import * as React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

// logos
import { ReactComponent as LinkedLogo } from "./logo/linkedin.svg";
import { ReactComponent as GithubLogo } from "./logo/github.svg";
import { ReactComponent as ResumeLogo } from "./logo/resume.svg";

import "./App.css";

const App = () => {
  const [section, setSection] = React.useState("about");

  const AboutRef = React.useRef();
  const ExpRef = React.useRef();
  const EduRef = React.useRef();
  const ProjectRef = React.useRef();

  const handleSectionOnclick = (type) => {
    document.getElementById(type).scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    const rightContainer = document.querySelector(".right-container");
    rightContainer.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      rightContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    // Get the scroll position of the container
    const scrollPosition = document.querySelector(".right-container").scrollTop;

    // Get all sections inside the .right-container
    const sections = document.querySelectorAll(".right-container .slide");

    // Loop through the sections to check if they are in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // The top position of the section
      const sectionHeight = section.offsetHeight; // The height of the section
      console.log(section.id, scrollPosition, sectionTop, sectionHeight);

      if (
        scrollPosition > sectionTop - 5 &&
        scrollPosition <= sectionTop + sectionHeight + 5
      ) {
        setSection(section.id); // Mark the section as active
      }
    });
  };

  return (
    <main>
      <div className="main-container">
        <div className="left-container pt-md pb-md pl-lg">
          <div className="container">
            <div className="intro">
              <div className="upper">
                <div className="dp">
                  <div className="decor">
                    <img
                      alt="star"
                      src="../shine.png"
                      style={{
                        position: "relative",
                        width: "100px",
                        marginBottom: "-50px",
                        marginLeft: "-30px",
                        zIndex: "1000",
                      }}
                    />
                  </div>
                  <img alt="dp" src="../dp.jpg" />
                </div>
              </div>
              <div className="lower">
              <h1>
                Hi, I'm <b>Iris Yang</b>!
              </h1>
                <div className="description">
                  IT Student based in Sydney, Australia.
                </div>

                <div className="menu">
                  <ul>
                    <li
                      onClick={() => handleSectionOnclick("about")}
                      className={section === "about" ? "active" : ""}
                    >
                      <div className="list-item"></div>
                      About
                    </li>
                    <li
                      onClick={() => handleSectionOnclick("education")}
                      className={section === "education" ? "active" : ""}
                    >
                      <div className="list-item"></div>
                      Education
                    </li>
                    <li
                      onClick={() => handleSectionOnclick("experience")}
                      className={section === "experience" ? "active" : ""}
                    >
                      <div className="list-item"></div>
                      Experience
                    </li>
                    <li
                      onClick={() => handleSectionOnclick("projects")}
                      className={section === "projects" ? "active" : ""}
                    >
                      <div className="list-item"></div>
                      Projects
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
                  <a
                    href="./Resume_IrisYang.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ResumeLogo alt="Resume" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container pt-md pb-md pr-lg">
          <div className="slide" ref={AboutRef} id="about">
            <About />
          </div>
          <div className="slide" ref={EduRef} id="education">
            <Education />
          </div>
          <div className="slide" ref={ExpRef} id="experience">
            <Experience />
          </div>
          <div className="slide" ref={ProjectRef} id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
