import React, { useState } from "react";

import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";
import project4Img from "../assets/project4.jpg";
import project5Img from "../assets/project5.jpg";
import project6Img from "../assets/project6.jpg";

import {
  FaArrowRight,
  FaChevronDown,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

  //  PROJECT DATA
const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "Personal portfolio built with React + Vite, responsive layout, and contact form integration with Node.js and MySQL.",
    image: project1Img,
    tools: ["React", "JavaScript", "TailwindCSS", "MySQL"],
    category: "Frontend / Full Stack",
    accent: "blue",
    icon: FaCode,
    link:
      "https://github.com/uday-andra/ANDRA-UDAYCHANDRA-Portfolio",
  },

  {
    id: 2,
    title: "VESTRA FASHIONS",
    desc: "An online clothing store with authentication, product catalog, shopping cart, and order management using Java Spring Boot and MySQL.",
    image: project2Img,
    tools: [
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
      "TailwindCSS",
    ],
    category: "Full Stack",
    accent: "violet",
    icon: FaLayerGroup,
    link:
      "https://github.com/uday-andra/VESTRA-E-Commerce-Store",
  },

  {
    id: 3,
    title: "Bank Management System",
    desc: "A banking application with authentication, account management, transaction processing, and transaction history using Spring Boot and MySQL.",
    image: project3Img,
    tools: ["JSP", "Java", "Spring Boot", "MySQL"],
    category: "Backend / Full Stack",
    accent: "cyan",
    icon: FaServer,
    link:
      "https://github.com/uday-andra/BankApp",
  },

  {
    id: 4,
    title: "QR Code Generator",
    desc: "A lightweight web application that generates QR codes instantly with a simple interface and download functionality.",
    image: project4Img,
    tools: ["HTML5", "CSS3", "JavaScript"],
    category: "Web Application",
    accent: "orange",
    icon: FaCode,
    link:
      "https://github.com/uday-andra/QR-Code-Generator",
  },

  {
    id: 5,
    title: "Analytics Dashboard",
    desc: "Interactive analytics dashboard with charts, filters, export functionality, and reusable React components.",
    image: project5Img,
    tools: ["React", "Recharts", "Vite"],
    category: "Frontend",
    accent: "pink",
    icon: FaLayerGroup,
    link: "#",
  },

  {
    id: 6,
    title: "Security Scanner UI",
    desc: "Security-focused interface demonstrating scanning workflows, results visualization, and CVE-related findings.",
    image: project6Img,
    tools: ["React", "Bootstrap", "Node.js"],
    category: "Security / UI",
    accent: "green",
    icon: FaShieldAlt,
    link: "#",
  },
];

const INITIAL_VISIBLE_COUNT = 3;

  //  TOOL BADGE
function ToolBadge({ name, index }) {
  return (
    <span
      className={`project-tool project-tool--${index % 5}`}
    >
      {name}
    </span>
  );
}

  //  PROJECT CARD
function ProjectCard({ project }) {
  const ProjectIcon = project.icon;

  return (
    <article
      className={`project-card project-card--${project.accent}`}
      role="listitem"
    >
          {/* COLOR GLOW */}
      <span
        className="project-card-glow"
        aria-hidden="true"
      />

          {/* PROJECT VISUAL */}
      <div className="project-visual">
        <div className="project-image-frame">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.opacity = "0.2";
            }}
          />

          <div className="project-image-shade" />

          <div
            className="project-image-gradient"
            aria-hidden="true"
          />

          {/* Floating project number */}

          <span className="project-number">
            {String(project.id).padStart(2, "0")}
          </span>

          {/* Category */}

          <span className="project-category">
            <ProjectIcon />
            {project.category}
          </span>

          {/* Code symbol */}

          <span className="project-code-mark">
            {"</>"}
          </span>

          {/* Decorative 3D dots */}

          <span className="project-floating-dot project-dot-one" />
          <span className="project-floating-dot project-dot-two" />

          {/* Image frame border */}

          <span className="project-frame-line" />
        </div>
      </div>

          {/* CONTENT */}
      <div className="project-content">
        {/* Header */}

        <div className="project-title-row">
          <div className="project-title-block">
            <span className="project-index-label">
              PROJECT {String(project.id).padStart(2, "0")}
            </span>

            <h3>{project.title}</h3>
          </div>

          <a
            href={project.link}
            className="project-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} repository`}
            title="Open repository"
          >
            <FaGithub aria-hidden="true" />

            <span className="github-tooltip">
              GitHub
            </span>
          </a>
        </div>

        {/* Description */}

        <p className="project-description">
          {project.desc}
        </p>

        {/* Technologies */}

        <div className="project-tools">
          {project.tools.map((tool, index) => (
            <ToolBadge
              key={tool}
              name={tool}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}

        <div className="project-footer">
          <a
            href={project.link}
            className="project-view-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>

            <span className="project-view-icon">
              <FaArrowRight aria-hidden="true" />
            </span>
          </a>

          <span className="project-external">
            <FaExternalLinkAlt aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}

//  PROJECTS
export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_VISIBLE_COUNT);

  const remainingProjects =
    PROJECTS.length - INITIAL_VISIBLE_COUNT;

  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
          {/* BACKGROUND */}
      <div
        className="projects-background"
        aria-hidden="true"
      >
        <div className="projects-grid-pattern" />

        <span className="projects-bg-orb projects-bg-orb-one" />
        <span className="projects-bg-orb projects-bg-orb-two" />
        <span className="projects-bg-orb projects-bg-orb-three" />

        <span className="projects-particle projects-particle-one" />
        <span className="projects-particle projects-particle-two" />
        <span className="projects-particle projects-particle-three" />
      </div>

      <div className="container projects-container">
            {/* HEADER */}
        <header className="projects-heading">
          <div className="projects-heading-top">
            <div className="projects-heading-label">
              <span className="projects-kicker">
                SELECTED WORK
              </span>

              <span className="projects-heading-line" />
            </div>

            <span className="projects-count">
              {String(PROJECTS.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <h2 id="projects-title">
            Projects &amp; <span>Applications</span>
          </h2>

          <p>
            A selection of applications and development projects
            built across frontend, backend, full-stack development
            and security-focused interfaces.
          </p>
        </header>

            {/* PROJECT GRID */}
        <div
          className={`projects-grid ${
            showAll ? "projects-grid--expanded" : ""
          }`}
          role="list"
        >
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card-wrapper"
              style={{
                "--project-delay": `${index * 80}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

            {/* VIEW MORE */}
        {PROJECTS.length > INITIAL_VISIBLE_COUNT && (
          <div className="projects-more">
            <button
              type="button"
              className="projects-more-button"
              onClick={() =>
                setShowAll((current) => !current)
              }
              aria-expanded={showAll}
            >
              <span className="projects-more-number">
                {showAll ? "06" : "03"}
              </span>

              <span>
                {showAll
                  ? "Show Less"
                  : `View More Projects (${remainingProjects})`}
              </span>

              <span className="projects-more-icon">
                <FaChevronDown
                  className={
                    showAll
                      ? "projects-chevron projects-chevron--open"
                      : "projects-chevron"
                  }
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
        )}

            {/* BOTTOM INFORMATION STRIP */}
        <div className="projects-bottom">
          <div className="projects-bottom-item projects-bottom-blue">
            <span>01</span>

            <div>
              <strong>Full Stack</strong>

              <small>
                Java · Spring Boot · React
              </small>
            </div>
          </div>

          <div className="projects-bottom-item projects-bottom-violet">
            <span>02</span>

            <div>
              <strong>Frontend</strong>

              <small>
                React · JavaScript · CSS
              </small>
            </div>
          </div>

          <div className="projects-bottom-item projects-bottom-cyan">
            <span>03</span>

            <div>
              <strong>Backend</strong>

              <small>
                Java · REST APIs · MySQL
              </small>
            </div>
          </div>

          <div className="projects-bottom-item projects-bottom-pink">
            <span>04</span>

            <div>
              <strong>Development</strong>

              <small>
                Git · GitHub · Docker
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}