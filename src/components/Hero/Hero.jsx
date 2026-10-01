import React, { useEffect, useState } from "react";

import {
  FaArrowDown,
  FaArrowRight,
  FaCircle,
  FaCode,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJava,
  FaServer,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiGit,
  SiMysql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import avatarSrc from "../../assets/Selfie_Image.jpg";
import resumePdf from "../../assets/ANDRA-UDAYCHANDRA_Resume.pdf";

const TECH_STACK = [
  {
    name: "Java",
    icon: FaJava,
    className: "tech-java",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    className: "tech-spring",
  },
  {
    name: "React",
    icon: SiReact,
    className: "tech-react",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "tech-javascript",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "tech-tailwind",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    className: "tech-mysql",
  },
];

const ORBIT_TECH = [
  {
    name: "Java",
    icon: FaJava,
    className: "hero-orbit-item--java",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    className: "hero-orbit-item--spring",
  },
  {
    name: "React",
    icon: SiReact,
    className: "hero-orbit-item--react",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "hero-orbit-item--javascript",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    className: "hero-orbit-item--mysql",
  },
  {
    name: "Git",
    icon: SiGit,
    className: "hero-orbit-item--git",
  },
];

const HERO_ROLES = [
  {
    text: "I'm Software Developer",
    className: "hero-role--blue",
  },
  {
    text: "I'm Full Stack Java Developer",
    className: "hero-role--purple",
  },
  {
    text: "I'm Web Developer",
    className: "hero-role--pink",
  },
  {
    text: "I'm Java Developer",
    className: "hero-role--orange",
  },
  {
    text: "I'm React Developer",
    className: "hero-role--cyan",
  },
];

const scrollTo = (id) => {
  const element = document.querySelector(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Hero() {
  const [isOnline, setIsOnline] = useState(
    () => navigator.onLine
  );

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((current) =>
        (current + 1) % HERO_ROLES.length
      );
    }, 2800);

    return () => {
      window.clearInterval(roleTimer);
    };
  }, []);

  const activeRole = HERO_ROLES[roleIndex];

  return (
    <section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-title"
    >
      <div
        className="hero-background"
        aria-hidden="true"
      >
        <div className="hero-grid" />

        <div className="hero-gradient hero-gradient--blue" />
        <div className="hero-gradient hero-gradient--purple" />
        <div className="hero-gradient hero-gradient--pink" />
        <div className="hero-gradient hero-gradient--cyan" />

        <span className="hero-particle hero-particle--1" />
        <span className="hero-particle hero-particle--2" />
        <span className="hero-particle hero-particle--3" />
        <span className="hero-particle hero-particle--4" />
        <span className="hero-particle hero-particle--5" />
        <span className="hero-particle hero-particle--6" />

        <span className="hero-bg-code hero-bg-code--one">
          {"<Java />"}
        </span>

        <span className="hero-bg-code hero-bg-code--two">
          {"{ API }"}
        </span>

        <span className="hero-bg-code hero-bg-code--three">
          {"</React>"}
        </span>

        <span className="hero-bg-code hero-bg-code--four">
          {"SpringBoot"}
        </span>
      </div>

      <div className="container hero-container">
        <div className="hero-layout">
          <div className="hero-content">

            {/* STATUS */}

            <div className="hero-status">
              <span
                className={`hero-status-dot ${
                  isOnline
                    ? "is-online"
                    : "is-offline"
                }`}
              >
                <FaCircle />
              </span>

              <span>
                {isOnline
                  ? "Available for opportunities"
                  : "Currently offline"}
              </span>

              <span className="hero-status-divider" />

              <span className="hero-status-role">
                Software Developer
              </span>
            </div>

            {/* KICKER */}

            <div className="hero-kicker">
              <span className="hero-kicker-line" />

              <span>
                FULL STACK JAVA DEVELOPER
              </span>

              <span className="hero-kicker-line" />
            </div>
            <h1
              id="hero-title"
              className="hero-title"
            >
              <span className="hero-title-small">
                Hey there.!, I&apos;m
              </span>

              <span className="hero-title-name">
                Andra
                <span className="hero-title-name-accent">
                  {" "}Udaychandra
                </span>
              </span>
              <span
                className={`hero-title-role ${activeRole.className}`}
                key={activeRole.text}
                aria-live="polite"
              >
                {activeRole.text}
                <span className="hero-title-dot">
                  .
                </span>
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="hero-description">
              I build{" "}
              <strong>
                scalable, reliable and user-focused
              </strong>{" "}
              web applications using Java, Spring Boot,
              React and modern software engineering
              practices.
            </p>
            <div
              className="hero-stack"
              aria-label="Primary technologies"
            >
              {TECH_STACK.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className={`hero-stack-item ${technology.className}`}
                    title={technology.name}
                  >
                    <Icon aria-hidden="true" />

                    <span>
                      {technology.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="hero-actions">

              <button
                type="button"
                className="hero-btn hero-btn-primary"
                onClick={() =>
                  scrollTo("#projects")
                }
              >
                <span>View My Work</span>

                <FaArrowRight
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                className="hero-btn hero-btn-secondary"
                onClick={() =>
                  scrollTo("#contact")
                }
              >
                <span>Let&apos;s Talk</span>

                <FaEnvelope
                  aria-hidden="true"
                />
              </button>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-ghost"
              >
                <span>Resume</span>

                <FaDownload
                  aria-hidden="true"
                />
              </a>

            </div>

            <div className="hero-bottom">

              <div className="hero-social-area">
                <span>FOLLOW ME</span>

                <div className="hero-socials">

                  <a
                    href="https://github.com/uday-andra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/andra-udaychandra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="mailto:udayandra003@gmail.com"
                    aria-label="Email"
                    title="Email"
                  >
                    <FaEnvelope />
                  </a>

                </div>
              </div>

              <div className="hero-mini-stats">

                <div>
                  <strong>07+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>12+</strong>
                  <span>Certifications</span>
                </div>

                <div>
                  <strong>1+</strong>
                  <span>Years Experience</span>
                </div>

              </div>

            </div>
          </div>

          <div className="hero-visual">

            <div className="hero-visual-stage">

              {/* 3D BACK GRID */}

              <div
                className="hero-3d-grid"
                aria-hidden="true"
              />

              {/* LARGE COLOR GLOW */}

              <div
                className="hero-profile-glow"
                aria-hidden="true"
              />

              {/* ORBITS */}

              <div className="hero-orbit hero-orbit--outer" />
              <div className="hero-orbit hero-orbit--middle" />
              <div className="hero-orbit hero-orbit--inner" />

              {/* ORBITING TECHNOLOGIES */}

              <div
                className="hero-orbit-system"
                aria-hidden="true"
              >
                {ORBIT_TECH.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className={`hero-orbit-item ${technology.className}`}
                      title={technology.name}
                    >
                      <Icon />
                    </div>
                  );
                })}
              </div>
              <div className="hero-image-halo">

                <div className="hero-image-ring hero-image-ring--one" />

                <div className="hero-image-ring hero-image-ring--two" />

                <div className="hero-image-ring hero-image-ring--three" />

                <div className="hero-image-frame">

                  <div className="hero-image-top-line" />

                  <img
                    src={avatarSrc}
                    alt="Andra Udaychandra"
                    className="hero-avatar"
                  />

                  <div className="hero-image-overlay" />

                  <span className="hero-image-corner hero-image-corner--tl" />
                  <span className="hero-image-corner hero-image-corner--tr" />
                  <span className="hero-image-corner hero-image-corner--bl" />
                  <span className="hero-image-corner hero-image-corner--br" />

                </div>

                <span className="hero-image-status">
                  <FaCircle />
                </span>

              </div>

              <div className="hero-floating-card hero-floating-card--code">

                <div className="hero-code-window">

                  <div className="hero-code-header">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="hero-code-content">

                    <span>
                      <b>const</b>{" "}
                      developer = {"{"}
                    </span>

                    <span className="code-indent">
                      <em>name:</em>{" "}
                      "Andra Udaychandra",
                    </span>

                    <span className="code-indent">
                      <em>stack:</em>{" "}
                      "Java + React",
                    </span>

                    <span className="code-indent">
                      <em>focus:</em>{" "}
                      "Clean Code",
                    </span>

                    <span>
                      {"}"}
                    </span>

                  </div>

                </div>
              </div>

              <div className="hero-floating-card hero-floating-card--experience">

                <span className="hero-floating-label">
                  EXPERIENCE
                </span>

                <strong>
                  1<span>+</span>
                </strong>

                <span>
                  Years Software Development
                </span>

              </div>

              {/* JAVA */}

              <div className="hero-floating-tech hero-floating-tech--java">
                <FaJava />

                <span>
                  Java
                </span>
              </div>

              {/* REACT */}

              <div className="hero-floating-tech hero-floating-tech--react">
                <SiReact />

                <span>
                  React
                </span>
              </div>

              {/* CENTER BADGE */}

              <div className="hero-center-badge">

                <span className="hero-center-badge-icon">
                  <FaServer />
                </span>

                <span>
                  <strong>
                    Full Stack
                  </strong>

                  <small>
                    Java Developer
                  </small>
                </span>

              </div>

              {/* DECORATIVE BADGES */}

              <span className="hero-decoration hero-decoration--blue">
                <FaCode />
              </span>

              <span className="hero-decoration hero-decoration--pink">
                <FaCircle />
              </span>

              <span className="hero-decoration hero-decoration--yellow">
                <span />
              </span>

            </div>
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            scrollTo("#about")
          }
          aria-label="Scroll to About section"
        >
          <span>
            Scroll to explore
          </span>

          <span className="hero-scroll-line">
            <span />
          </span>

          <span className="hero-scroll-icon">
            <FaArrowDown />
          </span>
        </button>

      </div>
    </section>
  );
}