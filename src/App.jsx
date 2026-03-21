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
            <p>Full Stack Developer</p>
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
                I am a passionate and dedicated fresher in B.Tech Computer
                Engineering, eager to dive into the world of technology and
                innovation. With a strong foundation in programming,
                problem-solving, and software development, I am driven to explore
                cutting-edge advancements in computing and their real-world
                applications. My academic projects and hands-on learning
                experiences have honed my analytical thinking and teamwork skills.
                I am enthusiastic about contributing to challenging projects,
                continuously learning, and growing as a professional in the tech
                industry. Outside academics, I enjoy exploring emerging
                technologies and engaging in creative problem-solving activities.
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
                    <span>Frontend Developer</span>
                    <br />
                    Developing interactive user interfaces
                  </li>
                  <li>
                    <span>Full Stack Developer</span>
                    <br />
                    Develops frontend and backend systems with database
                  </li>
                  <li>
                    <span>Full Stack Mern Developer</span>
                    <br />
                    Develops full-stack applications with MERN
                  </li>
                </ul>
              </div>

              <div className={getContentClass("experience")} id="experience">
                <ul>
                  <li>
                    <span>Foodie Fiesta</span>
                    <br />A Full Stack MERN project
                  </li>
                  <li>
                    <span>Frosty Flavors</span>
                    <br />A JSP integrated Cake Ordering System
                  </li>
                  <li>
                    <span>Campus Inventory System</span>
                    <br />A Campus Inventory Project within a Campus
                  </li>
                  <li>
                    <span>Weather Web-Application</span>
                    <br />A Web-based Application for Weather Forecast
                  </li>
                  <li>
                    <span>To-do List</span>
                    <br />A Web-based To-do List Website
                  </li>
                </ul>
              </div>

              <div className={getContentClass("education")} id="education">
                <ul>
                  <li>
                    <span>2022-2025</span>
                    <br />
                    B.Tech in Computer Engineering (Software Engineering) from
                    Gandhinagar
                  </li>
                  <li>
                    <span>2019-2022</span>
                    <br />
                    Diploma in Computer Engineering from Bhuj
                  </li>
                  <li>
                    <span>2010-2019</span>
                    <br />
                    Higher Secondary Education(Till 10th) from Bhuj
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
              <i className="fa-solid fa-code"></i>
              <h2>Web Developer</h2>
              <p>
                Designs, develops, and maintains functional, responsive, and
                visually appealing websites to meet client needs.
              </p>
              <a href="#">LEARN MORE</a>
            </div>
            <div>
              <i className="fa-solid fa-desktop"></i>
              <h2>Full Stack Developer</h2>
              <p>
                Builds and manages complete web applications, handling both
                frontend user interfaces and backend server functionality with
                database integration.
              </p>
              <a href="#">LEARN MORE</a>
            </div>
            <div>
              <i className="fa-brands fa-js"></i>
              <h2>Frontend Developer</h2>
              <p>
                Creates responsive, interactive user interfaces for websites and
                web applications.
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h2 className="sub-title">My Work</h2>
          <div className="work-list">
            <div className="work">
              <img src="/images/work-1.jpg" alt="Food ordering web application" />
              <div className="layer">
                <h3>
                  <b>Food Ordering Web-Application</b>
                </h3>
                <p>
                  A food ordering web application is a platform that enables
                  users to browse menus, select items, and place orders for
                  delivery or pickup from our restaurant.
                </p>
                <a href="#">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="/images/work-2.webp" alt="Cake ordering website" />
              <div className="layer">
                <h3>
                  <b>Cake Ordering Website</b>
                </h3>
                <p>
                  A cake ordering system enables users to browse cake designs,
                  customize flavors and sizes, place orders all through an online
                  platform.
                </p>
                <a href="#">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="/images/work-3.jpg" alt="Weather forecast website" />
              <div className="layer">
                <h3>
                  <b>Weather forecast Website</b>
                </h3>
                <p>
                  A weather forecast website provides users with real-time and
                  future weather updates, including temperature, precipitation,
                  wind, and other conditions, based on their location.
                </p>
                <a href="#">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See More
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
                pandaarchita19@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-phone"></i> 0123456789
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
