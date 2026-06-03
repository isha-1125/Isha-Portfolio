import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
  <div className={darkMode ? "app dark-mode" : "app"}>

 <nav className="navbar">
  <div className="logo">Isha Baghele</div>

  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

   <div className="nav-right">
  <button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀️" : "🌙"}
  </button>
</div>
</nav>
      {/* Hero Section */}
     <section className="hero">
    <div className="hero-content">
       <img
      src="/profile.jpg"
      alt="Isha Baghele"
      className="profile-img"
    />

    <h1>Hi, I'm Isha Baghele</h1>

    <TypeAnimation
  sequence={[
    "Backend Developer",
    2000,
    "Full Stack Developer",
    2000,
    "React Developer",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="typing-text"
/>

    <p>
     Aspiring Backend & Full Stack Developer with experience in React,
     Node.js, ASP.NET MVC, SQL Server and MongoDB. Passionate about
     building scalable web applications and solving real-world problems.
   </p>


    <div className="hero-buttons">
      <a href="#projects" className="btn">
        View Projects
      </a>

    <a
       href="/resume.pdf"
       className="btn secondary-btn"
       target="_blank"
       rel="noopener noreferrer"
  >   
        Resume
      </a>
      </div>

      <div className="social-icons">
  <a
    href="https://github.com/isha-1125"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/isha-baghele-378a322b3"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
</div>
  </div>
</section>
  {/* About Section */}
  <section className="section" id="about">
  <h2>About Me</h2>

  <p>
    Computer Science Engineering graduate with hands-on experience in
    full-stack web development. Skilled in React.js, Node.js, Express.js,
    ASP.NET MVC, SQL Server, MongoDB and REST APIs. Passionate about
    backend engineering, scalable systems and problem solving.
  </p>
</section>

<section className="section" id="skills">
  <h2>Technical Skills</h2>

  <div className="skills-category">
    <h3>Languages</h3>
    <div className="skills">
      <span>C</span>
      <span>C++</span>
      <span>Java</span>
      <span>JavaScript</span>
      <span>C#</span>
      <span>SQL</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Frontend</h3>
    <div className="skills">
      <span>React.js</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Backend</h3>
    <div className="skills">
      <span>Node.js</span>
      <span>Express.js</span>
      <span>ASP.NET MVC</span>
      <span>REST APIs</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Database</h3>
    <div className="skills">
      <span>MongoDB</span>
      <span>SQL Server</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Tools</h3>
    <div className="skills">
      <span>Git</span>
      <span>GitHub</span>
      <span>Postman</span>
      <span>VS Code</span>
    </div>
  </div>
</section>

<section className="section" id="experience">
  <h2>Experience</h2>

  <div className="project-card">
    <h3>Software Developer Intern</h3>

    <p>
      <strong>Eduskills AICTE</strong> | Jan 2024 – Mar 2024
    </p>

    <ul className="experience-list">
      <li>Developed reusable React components and responsive UI layouts.</li>
      <li>Integrated REST APIs to fetch and display dynamic data.</li>
      <li>Collaborated using Git and GitHub for version control.</li>
      <li>Gained practical exposure to modern web development workflows.</li>
    </ul>
  </div>
</section>

<section className="section" id="certifications">
  <h2>Certifications</h2>

  <div className="project-card">
    <ul className="certification-list">
      <li>.NET Skill Test Certification – ScholarHat</li>
      <li>Software Developer Virtual Internship – AICTE Eduskills</li>
      <li>Web Development Trainee – ICECIO Technologies</li>
    </ul>
  </div>
</section>

{/* Projects Section */}
<section className="section" id="projects">
<h2>Projects</h2>

 <div className="project-card">
  <h3>Internship Portal</h3>

  <p>
    Developed a full-stack Internship Portal that allows students to
    browse internship opportunities, submit applications, and track
    their application status. The platform provides secure user
    authentication, internship management, and a user-friendly dashboard.
  </p>

  <h4>Tech Stack</h4>
  <p>React.js, Node.js, Express.js, MongoDB, REST APIs</p>

  <div className="project-buttons">
    <a
      href="https://github.com/isha-1125/Internship-portal"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      GitHub
    </a>

    <a
      href="https://internship-portal-1-uy5k.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      Live Demo
    </a>
  </div>
</div>

<div className="project-card">
  <h3>Job Application Tracker</h3>

  <p>
    Built a Job Application Tracker to help users manage and monitor
    their job search process efficiently. Users can add applications,
    update interview status, track company details, and organize their
    job applications through a centralized dashboard.
  </p>

  <h4>Tech Stack</h4>
  <p>React.js, Node.js, Express.js, MongoDB, JWT Authentication</p>

  <div className="project-buttons">
    <a
      href="https://github.com/isha-1125/job-application-tracker-frontend"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      GitHub
    </a>

    <a
      href="https://job-application-tracker-frontend-xi.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      Live Demo
    </a>
  </div>
</div>

 </section>

  {/* Contact Section */}

<section className="section" id="contact">
  <h2>Contact Me</h2>

  <div className="contact">
    <p>
      📧 <a href="mailto:ishabaghele7@gmail.com">
        ishabaghele7@gmail.com
      </a>
    </p>

    <p>
      🧩 <a
        href="https://leetcode.com/u/ishabaghele7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LeetCode Profile
      </a>
    </p>

    <p>💼 Open to Internship & Full-Time Opportunities</p>
  </div>

  <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="contact-form"
  onSubmit={(e) => {
  setTimeout(() => {
    e.target.reset();
  }, 1000);
}}
>
  <input
    type="hidden"
    name="access_key"
    value="a23af844-2c21-4f8f-ab1a-1333f521b5f8"
  />

  <input
    type="hidden"
    name="subject"
    value="New Portfolio Contact Message"
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message"
    required
  ></textarea>

  <button type="submit" className="btn">
    Send Message
  </button>
<p className="form-note">
  Thank you for visiting my portfolio. Feel free to reach out for opportunities and collaborations.
</p>
</form>

</section>

<footer className="footer">
  <p>© 2026 Isha Baghele. All Rights Reserved.</p>
  <p>Made with ❤️ using React & Vite</p>
</footer>
    </div>
  );
}

export default App;