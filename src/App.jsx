import React, { useState } from "react";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw3ORHIQnOQKJGRYSb_Kfqsof6Vtt3y3hvqSHQF9yux_LRrz1QA0s5kQmIdfV6XjCkyOQ/exec";

function App() {
  const [activeTab, setActiveTab] = useState("skills");
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      setMessage("Thank You!!");
      form.reset();
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  const getTabClass = (tabName) =>
    `tab-links ${activeTab === tabName ? "active-link" : ""}`;

  const getContentClass = (tabName) =>
    `tab-contents ${activeTab === tabName ? "active-tab" : ""}`;

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <img src="/images/logo.png" className="logo" alt="Portfolio logo" />
            <ul id="sidemenu" style={{ right: menuOpen ? "0" : "-200px" }}>
              <li>
                <a href="#header" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <i
                className="fa-solid fa-circle-xmark"
                onClick={() => setMenuOpen(false)}
              ></i>
            </ul>
            <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
          </nav>
          <div className="header-text">
            <p>Frontend Developer | MERN Stack | Angular | Vue.js</p>
            <br />
            <h2>
              Hi, I&apos;m Archita Panda
              <br />
              Welcome to my Portfolio!!!
            </h2>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="/images/user.jpg" alt="Archita Panda" />
            </div>
            <div className="about-col-2">
              <h2 className="sub-title">About Me</h2>
              <p>
                I am a frontend developer with hands-on experience in React,
                Angular 20, and Vue 3, along with practical full-stack exposure
                in the MERN ecosystem. During my internship at ARK Infosoft, I
                delivered production-ready modules for education and healthcare
                platforms, integrated third-party APIs, and supported
                deployment-ready releases with strong focus on performance and
                usability. I am passionate about building clean, responsive, and
                accessible web experiences that solve real user problems, and I
                am actively seeking full-time software opportunities to
                contribute and grow.
              </p>

              <div className="tab-titles">
                <p
                  className={getTabClass("skills")}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </p>
                <p
                  className={getTabClass("experience")}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </p>
                <p
                  className={getTabClass("education")}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </p>
              </div>

              <div className={getContentClass("skills")} id="skills">
                <ul>
                  <li>
                    <span>Languages</span>
                    <br />
                    JavaScript (ES6+), Java, Python, C, C++
                  </li>
                  <li>
                    <span>Frontend</span>
                    <br />
                    React JS, Angular 20, Vue 3, HTML5, CSS3, Tailwind CSS
                  </li>
                  <li>
                    <span>Backend & DB</span>
                    <br />
                    Node.js, Express.js, REST APIs, MongoDB, MySQL
                  </li>
                  <li>
                    <span>Tools & Deployment</span>
                    <br />
                    FTP Deployment, GitHub, Figma, Canva, VS Code
                  </li>
                </ul>
              </div>

              <div className={getContentClass("experience")} id="experience">
                <ul>
                  <li>
                    <span>Frontend Developer Intern | ARK Infosoft</span>
                    <br />
                    Jun 2025 - Mar 2026 | Ahmedabad, Gujarat
                  </li>
                  <li className="internship-project">
                    <span>Paintastica - Student Learning Platform (Angular 20)</span>
                    <br />
                    Built a lazy-loaded 4-module SPA and integrated third-party
                    APIs for course content, e-commerce, and discussions.
                  </li>
                  <li className="internship-project">
                    <span>Doctor Diary - Healthcare Diary System (Vue 3)</span>
                    <br />
                    Developed appointment scheduling and real-time
                    patient-doctor interaction flows with optimistic UI updates.
                  </li>
                  <li className="internship-project">
                    <span>ABHA Frontend Module (Government Healthcare Initiative)</span>
                    <br />
                    Implemented ABHA linking and patient consent screens aligned
                    with NHA accessibility and UI guidelines.
                  </li>
                </ul>
              </div>

              <div className={getContentClass("education")} id="education">
                <ul>
                  <li>
                    <span>2022-2025</span>
                    <br />
                    B.Tech in Computer Engineering (Software Engineering),
                    Institute of Advanced Research, Gandhinagar (First Class with Distinction)
                  </li>
                  <li>
                    <span>2019-2021</span>
                    <br />
                    Diploma in Computer Engineering, Government Polytechnic,
                    Bhuj (CGPA 8.80/10)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <h2 className="sub-title">My Services</h2>
          <div className="services-list">
            <div>
              <i className="fa-brands fa-js"></i>
              <h2>Frontend Developer</h2>
              <p>
                Creates responsive, interactive user interfaces for websites and
                web applications.
              </p>
              {/* <a href="#">LEARN MORE</a> */}
            </div>
            {/* <div>
              <i className="fa-solid fa-code"></i>
              <h2>Web Developer</h2>
              <p>
                Designs, develops, and maintains functional, responsive, and
                visually appealing websites to meet client needs.
              </p>
              <a href="#">LEARN MORE</a>
            </div> */}
            <div>
              <i className="fa-solid fa-desktop"></i>
              <h2>Full Stack Developer</h2>
              <p>
                Builds and manages complete web applications, handling both
                frontend user interfaces and backend server functionality with
                database integration.
              </p>
              {/* <a href="#">LEARN MORE</a> */}
            </div>
            
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h2 className="sub-title">My Work</h2>
          <div className="work-list">
            <div className="work">
              <img src="/images/Foody_Fiesta.jpg" alt="FoodyFiesta project" />
              <div className="layer">
                <h3>
                  <b>FoodyFiesta</b>
                </h3>
                <p>
                  Food ordering web app with responsive UI and real-time menu
                  updates.
                </p>
                <a
                  href="https://foodyfiesta.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="/images/To_do_list.jpg" alt="To-do App project" />
              <div className="layer">
                <h3>
                  <b>To-do App</b>
                </h3>
                <p>
                  Productivity app to add, manage, and track daily tasks
                  efficiently.
                </p>
                <a
                  href="https://task-bee.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="/images/tic_tac_toe.jpg" alt="Tic-tac-toe game project" />
              <div className="layer">
                <h3>
                  <b>Tic-tac-toe Game</b>
                </h3>
                <p>
                  Classic circle-cross game built with interactive frontend
                  logic.
                </p>
                <a
                  href="https://circle-crossgame.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            {/* <div className="work">
              <img src="/images/Netflix.jpg" alt="Netflix clone project" />
              <div className="layer">
                <h3>
                  <b>Netflix Clone</b>
                </h3>
                <p>
                  Streaming-platform style UI clone with modern layout and
                  reusable components.
                </p>
                <a
                  href="https://nfx-webapp-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div> */}
            <div className="work">
              <img src="/images/weather.jpg" alt="Weather app project" />
              <div className="layer">
                <h3>
                  <b>Weather App</b>
                </h3>
                <p>
                  Weather forecasting app with location search and real-time
                  climate details.
                </p>
                <a
                  href="https://sunandstorm-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/Archita2919?tab=repositories"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            See More Projects
          </a>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h2 className="sub-title">Contact Me</h2>
              <p>
                <i className="fa-regular fa-envelope"></i>
                {" "}
                pandaarchita6@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> +91 63592 32196
              </p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/archita-panda-145811280">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/_architaaa__/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/panda_archita">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
              <a href="/images/Archita_Panda_Resume.pdf" download className="btn btn2">
                Download Resume
              </a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Write your Message here!!"
                  required
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              <span id="msg">{message}</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © Archita</p>
        </div>
      </div>
    </>
  );
}

export default App;
