import awsBadge from './assets/aws-badge.png'
import vitLogo from './assets/vit-logo.png'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header / Hero */}
      <header className="header">
        <h1 className="name">Hi, I'm Swaroop</h1>
        <p className="about">Aspiring software engineer, building stuff that matters. Passionate about creating innovative web solutions and enhancing user experiences.</p>

        <div className="social-links">
          <a href="https://github.com/swarxp" target="_blank" rel="noopener noreferrer" className="link-btn">
            GitHub
          </a>
          <a href="https://linkedin.com/in/swaroopwarade" target="_blank" rel="noopener noreferrer" className="link-btn">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1v504dA1XC2PTlyMYDuLF0dwY8nPidMen/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="link-btn resume-btn">
            Download Resume
          </a>
        </div>
      </header>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <p>C/C++ • Python • Java • JavaScript • SQL</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <p>React.js • Node.js • Express.js</p>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <p>AWS • Linux • Git • Bootstrap</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="card">
          <div className="card-header">
            <h3>Software Engineering Intern <span className="remote-tag">Remote</span></h3>
            <p className="company">ITJobxs Pvt. Ltd.</p>
            <p className="date">Apr - Jul 2025</p>
          </div>
          <ul className="highlights">
            <li>Developed a responsive frontend portal for interview insights using Bootstrap and JavaScript, optimizing for cross-device compatibility and interactive UI elements.</li>
            <li>Mitigated a critical spam crisis by identifying bot patterns and implementing SQL query optimization and PHP-based filtering to block 850+ fraudulent registrations.</li>
            <li>Enhanced platform security via Google reCAPTCHA integration, eliminating automated attacks and ensuring 100% data integrity within the MySQL database.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">Projects</h2>

        <div className="card">
          <div className="project-header">
            <h3>Bookhub - Library Management System</h3>
            <a href="https://github.com/swarxp/bookhub-lms" target="_blank" rel="noopener noreferrer" className="github-link">View Code →</a>
          </div>
          <p className="tech-stack">MongoDB • Express.js • React.js • Node.js</p>
          <ul className="highlights">
            <li>Engineered a full-stack MERN application for library operations, implementing comprehensive CRUD functionality for adding, editing, and searching book records.</li>
            <li>Designed and optimized RESTful APIs using Express.js to facilitate secure and efficient communication between the frontend and the MongoDB database.</li>
            <li>Developed a dynamic user interface with React.js and deployed the solution on Vercel, ensuring high availability and responsive performance for end-users.</li>
          </ul>
        </div>

        <div className="card">
          <div className="project-header">
            <h3>Movie Explorer</h3>
            <a href="https://github.com/swarxp/ReactProject-MovieApp" target="_blank" rel="noopener noreferrer" className="github-link">View Code →</a>
          </div>
          <p className="tech-stack">React.js • Vite • The Movie Database (TMDb) API</p>
          <ul className="highlights">
            <li>Built a high-performance discovery platform using React.js and Vite, integrating the TMDb API to deliver real-time data for search, filtering, and trailer playback.</li>
            <li>Developed a custom REST API logic to manage user favorites and movie details, ensuring a modern, feature-rich experience with an interactive UI.</li>
            <li>Implemented responsive design principles to ensure full functionality and visual consistency across mobile, tablet, and desktop devices.</li>
          </ul>
        </div>

        <div className="card">
          <div className="project-header">
            <h3>Automatic Fire Extinguisher Robot</h3>
          </div>
          <p className="tech-stack">C++ • ARM Keil Studio • STM32 – Nucleo</p>
          <ul className="highlights">
            <li>Engineered an autonomous robot using STM32 and C++, integrating flame/temperature sensors for real-time fire detection and localized response.</li>
            <li>Developed motor-control logic using PWM for precise navigation toward fire sources and automated activation of the extinguishing mechanism.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="card education-card">
          <img src={vitLogo} alt="VIT Logo" className="vit-logo" />
          <div className="education-content">
            <h3>B.Tech Bachelor of Technology</h3>
            <p className="field">Electronics and Computer Science</p>
            <p className="institution">Vellore Institute of Technology (VIT)</p>
            <p className="years">2022 - 2026</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section">
        <h2 className="section-title">Research</h2>
        <div className="card">
          <h3>Semiconductor Wafer Defect Identification</h3>
          <p className="research-desc">Contributed to research on advanced defect detection methodologies in semiconductor manufacturing, bridging electronics and computer science domains.</p>
        </div>
      </section>

      {/* AWS Certification */}
      <section className="section certification">
        <h2 className="section-title">Certification</h2>
        <div className="card certification-card">
          <img src={awsBadge} alt="AWS Certified Cloud Practitioner" className="aws-badge" />
          <div className="certification-content">
            <h3>AWS Certified Cloud Practitioner</h3>
            <p className="cert-level">Foundational</p>
            <p className="cert-desc">Validated understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2 className="section-title">Let's Connect</h2>
        <a href="mailto:waradeswaroop@gmail.com" className="email-btn">
          waradeswaroop@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Swaroop Warade. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
