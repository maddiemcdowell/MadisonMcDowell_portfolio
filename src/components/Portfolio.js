import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  console.log("Portfolio component loaded");
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <h1>Portfolio</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-image">
                <img
                  src="/images/maddie-mcdowell-grad-photos-2025-093 2.JPG"
                  alt="Madison McDowell"
                />
              </div>
              <div className="hero-text">
                <h1>Hi, I am Madison McDowell!</h1>
                <h2>Data Science & Analytics Graduate Student</h2>
                <p>
                  Highly motivated graduate student pursuing a Master of Science
                  in Big Data Analytics, seeking internship and employment
                  opportunities where I can utilize my passion and cultivate my
                  skills in the fields of Data Science and Data Analytics.
                </p>
                <div className="contact-info">
                  <p>
                    maddiemcdowell16@gmail.com | (760) 505-5835 |{" "}
                    <a
                      href="https://www.linkedin.com/in/madison-mcdowell16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      linkedin
                    </a>
                  </p>
                </div>
                <div className="buttons">
                  <a href="#projects" className="btn">
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I'm a passionate data science graduate student with a strong
              foundation in computer science and statistics. Currently pursuing
              my Master's in Big Data Analytics at San Diego State University, I
              combine technical skills in programming and data analysis with
              excellent communication abilities and a dedication to making
              technology accessible to all communities, including the Deaf and
              special needs communities.
            </p>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Big Data Analytics Hackathon</h3>
                <p>
                  Competed in and awarded a cash prize for a 2-day hackathon
                  where I collaborated with a team of 4 to pitch HomeBase an
                  innovative solution to centralize and improve access to
                  resources for the homeless population in San Diego County.
                </p>
                <Link to="/project/hackathon" className="project-link">
                  View Project Details
                </Link>
              </div>

              <div className="project-card">
                <h3>Health Belief Models: COVID-19 Vaccines</h3>
                <p>
                  Analyzed five COVID-19 vaccine behavior datasets using R to
                  examine how the Health Belief Model can predict vaccine
                  willingness and acceptance. Built linear regression models and
                  ran 25+ correlation tests.
                </p>
                <Link
                  to="/project/health-belief-models"
                  className="project-link"
                >
                  View Project Details
                </Link>
              </div>

              <div className="project-card">
                <h3>Long Beach Animal Shelter Analysis</h3>
                <p>
                  Conducted exploratory data analysis on 29,000+ Animal Shelter
                  records. Built 3 R-based visualizations and 2 Tableau
                  visualizations to analyze species intake distributions and
                  outcome disparities.
                </p>
                <Link to="/project/animal-shelter" className="project-link">
                  View Project Details
                </Link>
              </div>

              <div className="project-card">
                <h3>Coral Bleaching Data Analysis</h3>
                <p>
                  Analyzed three datasets totaling 15,000+ entries to
                  investigate coral reef decline predictors. Used Python
                  requests library and Selenium web scraping to create cleaned
                  datasets. Built interactive Tableau dashboard with correlation
                  analysis.
                </p>
                <Link to="/project/coral-bleaching" className="project-link">
                  View Project Details
                </Link>
              </div>

              <div className="project-card">
                <h3>Business Engineering Science Technology Bootcamp</h3>
                <p>
                  Completed a 1-week certificate program where I collaborated
                  with a team to pitch Olive, an AI-enhanced scheduling app.
                  Awarded a cash prize in final business pitch presentation.
                </p>
                <Link to="/project/business-bootcamp" className="project-link">
                  View Project Details
                </Link>
              </div>

              <div className="project-card">
                <h3>Pathfinder - Senior Capstone</h3>
                <p>
                  Co-developed an all-in-one career exploration web app for the
                  senior engineering showcase. Built core features for job
                  discovery, skills mapping, and career planning using agile
                  workflows.
                </p>
                <Link to="/project/pathfinder" className="project-link">
                  View Project Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-list">
              <div className="skill-category">
                <span className="category-label">
                  Programming & Data Tools:
                </span>
                <span className="skills-text">
                  Python, R, JavaScript, SQL, Tableau, SPSS, GitHub, ArcGIS
                </span>
              </div>
              <div className="skill-category">
                <span className="category-label">Data Skills:</span>
                <span className="skills-text">
                  Data Entry, Data Cleaning, Exploratory Data Analysis, Data
                  Visualization, Statistical Analysis, Linear Regression
                  Modeling
                </span>
              </div>
              <div className="skill-category">
                <span className="category-label">Software:</span>
                <span className="skills-text">
                  Microsoft Excel, Google Workspace, Figma, VS Code
                </span>
              </div>
              <div className="skill-category">
                <span className="category-label">Languages:</span>
                <span className="skills-text">
                  American Sign Language (working proficiency)
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education">
          <div className="container">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Master of Science in Big Data Analytics</h3>
              <h4>San Diego State University</h4>
              <p className="date">August 2025 - May 2027</p>
            </div>
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <h4>Loyola Marymount University</h4>
              <p className="date">May 2025</p>
              <p>
                <strong>Minor:</strong> Data Science and Statistics |{" "}
                <strong>GPA:</strong> 3.8
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="container">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Data Entry Assistant</h3>
              <h4>Loyola Marymount University, School of Education</h4>
              <p className="date">September 2024 - May 2025</p>
              <ul>
                <li>
                  Cleaned and maintained two databases: a 650+ entry directory
                  of deans from national Colleges of Education and a 100+ entry
                  alumni database, ensuring accuracy and standardization across
                  all records
                </li>
                <li>
                  Optimized administrative processes by restructuring datasets,
                  designing organized spreadsheets, and implementing efficient
                  data entry protocols
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Full Stack Engineering Intern</h3>
              <h4>Undivided (Special X, Inc.)</h4>
              <p className="date">March 2024 - July 2024</p>
              <ul>
                <li>
                  Contributed to web and internal tool development, including
                  UI/UX prototyping in Figma and backend feature implementation
                </li>
                <li>
                  Supported engineering mobile and web development teams through
                  agile sprints, QA testing, and API integration
                </li>
                <li>
                  Participated in weekly stand-ups with engineering teams to
                  plan best practices for maintaining platform stability for
                  thousands of users
                </li>
                <li>
                  Combined passion for helping the special needs community with
                  emerging skills in the technical field
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>American Sign Language Assistant Educator</h3>
              <h4>Loyola Marymount University, LMU Cares</h4>
              <p className="date">March 2023 - May 2024</p>
              <ul>
                <li>
                  Taught 2 lessons a week to students, staff, and faculty across
                  ASL 1 and ASL 2
                </li>
                <li>
                  Collaborated with a 4 member teaching team to design lesson
                  plans in American Sign Language and Deaf culture
                </li>
                <li>
                  Built a digital ASL education website featuring a bank of 75+
                  instructional signs
                </li>
              </ul>
              <p className="experience-link">
                <a
                  href="https://sites.google.com/view/asl-at-lmu-resources/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View ASL Resources Website
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
