import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaTimes,
  FaCircle,
  FaJava,
  FaReact,
} from "react-icons/fa";

import aboutImg from "../assets/Selfie_Image.jpg";

const skillGroups = [
  {
    key: "frontend",
    title: "Frontend",
    icon: <FaCode />,
    color: "about-skill-blue",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive UI",
    ],
  },
  {
    key: "backend",
    title: "Backend",
    icon: <FaServer />,
    color: "about-skill-purple",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JDBC",
      "Servlets",
      "JSP",
      "MVC",
    ],
  },
  {
    key: "database",
    title: "Database & Development",
    icon: <FaDatabase />,
    color: "about-skill-cyan",
    items: [
      "MySQL",
      "SQL",
      "Git",
      "GitHub",
      "Docker",
      "Postman",
    ],
  },
  {
    key: "core",
    title: "Core Computer Science",
    icon: <FaLaptopCode />,
    color: "about-skill-pink",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
    ],
  },
];

const experience = [
  {
    period: "July 2026 — Present",
    company: "K Quality Soft Private Limited",
    location: "Hyderabad",
    role: "Software Developer",
    current: true,
    points: [
      "Developing software solutions and automation workflows for CSV documentation and compliance processes.",
      "Contributing to the CSV Automation application for automating validation documentation workflows.",
      "Developing application features for document processing, automation and functionality based on project requirements.",
      "Working with structured software development practices including debugging, testing and application maintenance.",
    ],
  },
  {
    period: "Feb 2026 — June 2026",
    company: "Nimblix Technologies",
    location: "Bengaluru",
    role: "Software Developer",
    current: false,
    points: [
      "Developed backend application components using Java, Spring Boot, REST APIs, JDBC and MVC architecture.",
      "Developed responsive web application features using React.js, JavaScript, HTML5 and CSS3.",
      "Implemented MySQL database operations and integrated backend services with application data.",
      "Implemented authentication and authorization using Spring Security and JWT.",
      "Used Postman, Git and GitHub for API testing, source control and development workflows.",
    ],
  },
  {
    period: "July 2025 — Dec 2025",
    company: "AI Variant",
    location: "Bengaluru",
    role: "Java Full Stack Developer Intern",
    current: false,
    points: [
      "Developed full-stack application features using Java, Spring Boot, React.js and MySQL.",
      "Developed and integrated REST APIs for communication between frontend and backend components.",
      "Worked on database operations and application functionality using MySQL and backend services.",
      "Performed application debugging, API testing and troubleshooting to identify and resolve development issues.",
      "Used Git and GitHub for source code management and collaborative development workflows.",
    ],
  },
];

const projects = [
  {
    title: "CSV Automation",
    role: "Full Stack Developer",
    description:
      "Automation application for managing Computer System Validation documentation and validation workflows.",
    color: "blue",
    points: [
      "Automated document generation and processing workflows to simplify documentation and reduce repetitive manual work.",
      "Developed application features for organizing documents, workflows and standardized documentation processes.",
      "Performed application testing and debugging while improving workflows for reliable and consistent application functionality.",
    ],
  },
  {
    title: "Hospital Management System",
    role: "Full Stack Developer & Frontend Team Lead",
    description:
      "Hospital management application for managing patient records, appointments and billing operations.",
    color: "purple",
    points: [
      "Developed a hospital management application using Java, Spring Boot, REST API, React.js and MySQL.",
      "Implemented RESTful APIs and backend services for patient records, appointments and billing operations.",
      "Developed database operations and application components for creating, retrieving and managing hospital-related information.",
      "Led frontend development activities while testing, debugging and integrating application features.",
    ],
  },
  {
    title: "E-Commerce Store",
    role: "Frontend Team Lead & Backend Developer",
    description:
      "Full-stack e-commerce application for product browsing, shopping cart and order management.",
    color: "pink",
    points: [
      "Developed a full-stack e-commerce application using React.js, Java, Spring Boot and MySQL.",
      "Developed RESTful APIs and implemented JWT authentication, Spring Security and RBAC for secure application access.",
      "Integrated Razorpay, UPI and Cash on Delivery payment methods to support secure and flexible order processing.",
      "Implemented product browsing, shopping cart, order management and admin dashboard features.",
    ],
  },
];

const certifications = [
  "Java Framework Training — NIMBLIX TECHNOLOGIES OPC Pvt Ltd",
  "Full Stack Java Developer Internship — AI Variant",
  "Cyber Security Virtual Internship — Cybersecurity Academy",
  "Java Business Application Training Completion — Spoken Tutorial project at IIT Bombay",
];

  //  COMPONENT
export default function About() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (!detailsOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDetailsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [detailsOpen]);

  return (
    <>
      <section
        id="about"
        className="section about-section"
        aria-labelledby="about-title"
      >
            {/* COLORFUL BACKGROUND */}
        <div className="about-background" aria-hidden="true">
          <div className="about-bg-grid" />

          <span className="about-bg-orb about-bg-orb--blue" />
          <span className="about-bg-orb about-bg-orb--purple" />
          <span className="about-bg-orb about-bg-orb--cyan" />
          <span className="about-bg-orb about-bg-orb--pink" />

          <span className="about-bg-dot about-bg-dot--1" />
          <span className="about-bg-dot about-bg-dot--2" />
          <span className="about-bg-dot about-bg-dot--3" />
          <span className="about-bg-dot about-bg-dot--4" />
        </div>

        <div className="container about-container">

              {/* HEADER */}
          <header className="about-heading">

            <div className="about-heading-line">
              <span />
              <span>ABOUT ME</span>
              <span />
            </div>

            <h2 id="about-title">
              Engineering with{" "}
              <span>purpose.</span>
            </h2>

            <p>
              A Full Stack Java Developer focused on building
              maintainable applications, practical solutions and
              reliable digital experiences.
            </p>

          </header>

              {/* MAIN */}
          <div className="about-layout">

                {/* VISUAL */}
            <div className="about-visual">

              <div className="about-image-stage">

                <div
                  className="about-grid"
                  aria-hidden="true"
                />

                <div className="about-visual-glow" />

                <div className="about-image-ring about-image-ring--one" />
                <div className="about-image-ring about-image-ring--two" />
                <div className="about-image-ring about-image-ring--three" />

                <div className="about-image-frame">

                  <div className="about-image-top-line" />

                  <img
                    src={aboutImg}
                    alt="Andra Udaychandra"
                    loading="lazy"
                  />

                  <div className="about-image-overlay" />

                  <span className="about-image-corner about-image-corner--tl" />
                  <span className="about-image-corner about-image-corner--tr" />
                  <span className="about-image-corner about-image-corner--bl" />
                  <span className="about-image-corner about-image-corner--br" />

                </div>

                <span className="about-image-index">
                  01
                </span>

                {/* ROLE */}

                <div className="about-floating-role">
                  <span>ROLE</span>

                  <strong>
                    Full Stack
                  </strong>

                  <small>
                    Java Developer
                  </small>
                </div>

                {/* STACK */}

                <div className="about-floating-stack">
                  <span>PRIMARY STACK</span>

                  <strong>
                    Java · Spring · React
                  </strong>
                </div>

                {/* DECORATIVE ICONS */}

                <span className="about-decoration about-decoration--java">
                  <FaJava />
                </span>

                <span className="about-decoration about-decoration--react">
                  <FaReact />
                </span>

                <span className="about-decoration about-decoration--code">
                  <FaCode />
                </span>

              </div>

              {/* EDUCATION */}

              <div className="about-education-line">

                <span className="about-education-icon">
                  <FaGraduationCap />
                </span>

                <div>
                  <span>EDUCATION</span>

                  <strong>
                    B.Tech in Information Technology
                  </strong>

                  <small>
                    PACE Institute of Technology and Sciences · 2025
                  </small>
                </div>

                <b>
                  8.35/10
                </b>

              </div>

            </div>

                {/* CONTENT */}
            <div className="about-content">

              <span className="about-label">
                PROFILE
              </span>

              <h3>
                ANDRA{" "}
                <span>UDAYCHANDRA</span>
              </h3>

              <div className="about-intro-line">
                <span />
                <p>
                  Full Stack Java Developer
                </p>
              </div>

              <p>
                I&apos;m{" "}
                <strong>
                  Andra Udaychandra
                </strong>
                , a Full Stack Java Developer with a
                B.Tech in Information Technology.
              </p>

              <p>
                My experience spans Java, Spring Boot,
                REST APIs, React.js, JavaScript, MySQL
                and modern web application development,
                with practical exposure to authentication,
                database integration, API development and
                responsive interfaces.
              </p>

              <p>
                I focus on understanding requirements,
                building structured solutions and
                developing software that is clean,
                maintainable and practical.
              </p>

                  {/* HIGHLIGHTS */}
              <div className="about-highlights">

                <div className="about-highlight about-highlight--blue">
                  <span>01</span>

                  <div>
                    <strong>Full Stack</strong>

                    <p>
                      Frontend + backend application
                      development.
                    </p>
                  </div>
                </div>

                <div className="about-highlight about-highlight--purple">
                  <span>02</span>

                  <div>
                    <strong>Java Ecosystem</strong>

                    <p>
                      Java, Spring Boot, REST APIs
                      and MySQL.
                    </p>
                  </div>
                </div>

                <div className="about-highlight about-highlight--cyan">
                  <span>03</span>

                  <div>
                    <strong>Engineering</strong>

                    <p>
                      Clean, structured and
                      maintainable solutions.
                    </p>
                  </div>
                </div>

              </div>

                  {/* ACTIONS */}
              <div className="about-actions">

                <button
                  type="button"
                  className="about-primary-btn"
                  onClick={() => setDetailsOpen(true)}
                >
                  <span>
                    View Full Profile
                  </span>

                  <FaArrowRight />
                </button>

                <a
                  href="#projects"
                  className="about-secondary-btn"
                >
                  View Projects
                </a>

              </div>

            </div>
          </div>

              {/* BOTTOM STRIP */}
          <div className="about-bottom-strip">

            <div className="about-strip-item about-strip-blue">
              <span>FOCUS</span>
              <strong>Full Stack Development</strong>
            </div>

            <div className="about-strip-item about-strip-purple">
              <span>PRIMARY STACK</span>
              <strong>Java · Spring Boot · React</strong>
            </div>

            <div className="about-strip-item about-strip-cyan">
              <span>DATABASE</span>
              <strong>MySQL · SQL</strong>
            </div>

            <div className="about-strip-item about-strip-pink">
              <span>DEVELOPMENT</span>
              <strong>Git · GitHub · Docker</strong>
            </div>

          </div>

        </div>
      </section>

          {/* FULL PROFILE MODAL */}
      {detailsOpen && (
        <div
          className="about-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setDetailsOpen(false);
            }
          }}
        >
          <div
            className="about-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
          >

            {/* MODAL HEADER */}

            <header className="about-modal-header">

              <div>
                <span className="about-modal-kicker">
                  FULL PROFILE
                </span>

                <h2 id="about-modal-title">
                  Andra Udaychandra
                </h2>

                <p>
                  Full Stack Java Developer
                </p>
              </div>

              <button
                type="button"
                className="about-modal-close"
                onClick={() => setDetailsOpen(false)}
                aria-label="Close full profile"
              >
                <FaTimes />
              </button>

            </header>

            {/* MODAL BODY */}

            <div className="about-modal-body">

                  {/* 01 PROFILE */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  01
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    PROFESSIONAL SUMMARY
                  </span>

                  <h3>
                    Software Developer
                  </h3>

                  <p>
                    Software Developer specializing in
                    Java Full Stack Development with
                    professional experience in backend
                    and web application development.
                    Skilled in Java, JavaScript, Spring
                    Boot, Spring Security, REST APIs,
                    JDBC, Servlets, JSP, React.js, HTML5,
                    CSS3, MySQL and SQL.
                  </p>

                  <p>
                    Experienced in developing
                    database-driven applications,
                    secure REST APIs, authentication,
                    API integration and responsive web
                    interfaces using MVC architecture.
                    Strong foundation in Core Java,
                    Object-Oriented Programming, Data
                    Structures &amp; Algorithms and modern
                    web technologies.
                  </p>

                  <p>
                    Familiar with TCP/IP, DNS, HTTP/HTTPS,
                    VPN, OSI Model, Git, GitHub, Docker
                    and modern development tools, with a
                    focus on clean, maintainable and
                    reliable software.
                  </p>

                </div>
              </section>

                  {/* 02 EDUCATION */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  02
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    EDUCATION
                  </span>

                  <h3>
                    Academic Background
                  </h3>

                  <div className="about-education-item">

                    <div className="about-detail-icon">
                      <FaGraduationCap />
                    </div>

                    <div>
                      <strong>
                        Bachelor of Technology —
                        Information Technology
                      </strong>

                      <p>
                        PACE Institute of Technology
                        and Sciences, Ongole,
                        Andhra Pradesh
                      </p>

                      <span>
                        2021 — 2025 · CGPA: 8.35/10
                      </span>

                      <small>
                        Relevant coursework: Data
                        Structures &amp; Algorithms,
                        Object-Oriented Programming,
                        Database Management Systems,
                        Computer Networks, Operating
                        Systems, Software Engineering
                        and Web Technologies.
                      </small>
                    </div>

                  </div>

                </div>
              </section>

                  {/* 03 SKILLS */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  03
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    TECHNICAL SKILLS
                  </span>

                  <h3>
                    Technology Stack
                  </h3>

                  <div className="about-skill-groups">

                    {skillGroups.map((group) => (
                      <div
                        className={`about-skill-group ${group.color}`}
                        key={group.key}
                      >

                        <div className="about-skill-heading">

                          <span>
                            {group.icon}
                          </span>

                          <strong>
                            {group.title}
                          </strong>

                        </div>

                        <div className="about-skill-tags">

                          {group.items.map((item) => (
                            <span key={item}>
                              {item}
                            </span>
                          ))}

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              </section>

                  {/* 04 EXPERIENCE */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  04
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    PROFESSIONAL EXPERIENCE
                  </span>

                  <h3>
                    Development Experience
                  </h3>

                  <div className="about-timeline">

                    {experience.map((item) => (
                      <article
                        className="about-timeline-item"
                        key={`${item.company}-${item.period}`}
                      >

                        <div className="about-timeline-marker">
                          <FaBriefcase />
                        </div>

                        <div className="about-timeline-content">

                          <div className="about-timeline-top">

                            <span>
                              {item.period}
                            </span>

                            {item.current && (
                              <em>
                                Current
                              </em>
                            )}

                          </div>

                          <h4>
                            {item.role}
                          </h4>

                          <strong>
                            {item.company} ·{" "}
                            {item.location}
                          </strong>

                          <ul>
                            {item.points.map((point) => (
                              <li key={point}>
                                {point}
                              </li>
                            ))}
                          </ul>

                        </div>
                      </article>
                    ))}

                  </div>

                </div>
              </section>

                  {/* 05 PROJECTS */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  05
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    PROJECT EXPERIENCE
                  </span>

                  <h3>
                    Selected Projects
                  </h3>

                  <div className="about-project-list">

                    {projects.map((project) => (
                      <article
                        className={`about-project-item about-project-${project.color}`}
                        key={project.title}
                      >

                        <div className="about-project-heading">

                          <div>
                            <span>
                              {project.role}
                            </span>

                            <h4>
                              {project.title}
                            </h4>
                          </div>

                        </div>

                        <p>
                          {project.description}
                        </p>

                        <ul>
                          {project.points.map((point) => (
                            <li key={point}>
                              {point}
                            </li>
                          ))}
                        </ul>

                      </article>
                    ))}

                  </div>

                </div>
              </section>

                  {/* 06 CERTIFICATIONS */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  06
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    CERTIFICATIONS
                  </span>

                  <h3>
                    Professional Training
                  </h3>

                  <div className="about-certification-list">

                    {certifications.map(
                      (certificate, index) => (
                        <div
                          className="about-certification-item"
                          key={certificate}
                        >

                          <span>
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <strong>
                            {certificate}
                          </strong>

                        </div>
                      )
                    )}

                  </div>

                </div>
              </section>

                  {/* 07 DIRECTION */}
              <section className="about-detail-section">

                <div className="about-detail-number">
                  07
                </div>

                <div className="about-detail-content">

                  <span className="about-detail-kicker">
                    PROFESSIONAL DIRECTION
                  </span>

                  <h3>
                    Building with purpose
                  </h3>

                  <p>
                    I&apos;m interested in software
                    development opportunities where I
                    can contribute to real-world
                    applications, strengthen my
                    engineering experience and continue
                    developing across the Java full-stack
                    ecosystem.
                  </p>

                  <div className="about-direction-grid">

                    <div className="about-direction-blue">
                      <span>01</span>
                      <strong>Build</strong>
                      <p>
                        Reliable full-stack applications.
                      </p>
                    </div>

                    <div className="about-direction-purple">
                      <span>02</span>
                      <strong>Learn</strong>
                      <p>
                        Continuously improve engineering
                        skills.
                      </p>
                    </div>

                    <div className="about-direction-pink">
                      <span>03</span>
                      <strong>Contribute</strong>
                      <p>
                        Create practical software
                        solutions.
                      </p>
                    </div>

                  </div>

                </div>
              </section>

            </div>
            <footer className="about-modal-footer">

              <span>
                Interested in working together?
              </span>

              <a
                href="#contact"
                className="about-primary-btn"
                onClick={() =>
                  setDetailsOpen(false)
                }
              >
                Get in Touch
                <FaArrowRight />
              </a>

            </footer>

          </div>
        </div>
      )}
    </>
  );
}