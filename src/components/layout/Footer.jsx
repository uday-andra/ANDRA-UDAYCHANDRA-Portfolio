import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaArrowUp,
  FaArrowRight,
  FaCode,
  FaCircle,
  FaRocket,
  FaJava,
  FaReact,
  FaServer,
} from "react-icons/fa";

const NAVIGATION = {
  Explore: [
    ["Home", "#hero"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
  ],
  Portfolio: [
    ["Projects", "#projects"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ],
};

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andra-udaychandra",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/uday-andra",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/_.mr._.cool._._",
    icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:udayandra003@gmail.com",
    icon: FaEnvelope,
  },
];

const TECH_STACK = [
  {
    label: "Java",
    icon: FaJava,
  },
  {
    label: "React",
    icon: FaReact,
  },
  {
    label: "Spring Boot",
    icon: FaServer,
  },
  {
    label: "JavaScript",
    icon: FaCode,
  },
];

export default function Footer() {
  const [isOnline, setIsOnline] = useState(() =>
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  const [currentYear, setCurrentYear] = useState(() =>
    new Date().getFullYear()
  );

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
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollTo = (targetId) => {
    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    scrollTo(targetId);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <div className="footer-brand-top">
            <span className="footer-brand-dot">
              <FaCircle aria-hidden="true" />
            </span>

            <span className="footer-eyebrow">
              SOFTWARE DEVELOPER
            </span>
          </div>

          <h2 className="footer-title">
            Andra
            <br />
            <span>Udaychandra</span>
          </h2>

          <p className="footer-description">
            Full Stack Java Developer focused on building
            reliable, maintainable and modern web applications
            with Java, Spring Boot, React and contemporary
            frontend technologies.
          </p>

          <div className="footer-tech-stack">
            {TECH_STACK.map((technology) => {
              const Icon = technology.icon;

              return (
                <span
                  className="footer-tech"
                  key={technology.label}
                >
                  <Icon aria-hidden="true" />
                  {technology.label}
                </span>
              );
            })}
          </div>

          <a
            href="mailto:udayandra003@gmail.com"
            className="footer-email"
          >
            <span>Let's build something meaningful</span>

            <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer-navigation">
          {Object.entries(NAVIGATION).map(
            ([groupName, links]) => (
              <div
                className="footer-column"
                key={groupName}
              >
                <span className="footer-column-title">
                  {groupName}
                </span>

                <nav className="footer-nav">
                  {links.map(([label, href]) => (
                    <a
                      href={href}
                      key={href}
                      onClick={(event) =>
                        handleNavClick(event, href)
                      }
                    >
                      <span>{label}</span>

                      <FaArrowRight
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </nav>
              </div>
            )
          )}
        </div>

        <div className="footer-connect">
          <span className="footer-column-title">
            Connect
          </span>

          <div className="footer-socials">
            {SOCIALS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="footer-social-link"
                >
                  <span className="footer-social-icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <span>{social.label}</span>

                  <FaArrowRight
                    className="footer-social-arrow"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          <div className="footer-availability">
            <span className="footer-availability-icon">
              <FaRocket aria-hidden="true" />
            </span>

            <div>
              <span>OPEN TO OPPORTUNITIES</span>

              <strong>
                Software Development
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-status-wrap container">
        <div className="footer-status">
          {/* Portfolio Status */}

          <div className="footer-status-item">
            <span
              className={`footer-status-indicator ${
                isOnline
                  ? "footer-status-indicator--online"
                  : "footer-status-indicator--offline"
              }`}
            >
              <FaCircle aria-hidden="true" />
            </span>

            <div>
              <span>Status</span>

              <strong>
                {isOnline
                  ? "Portfolio Online"
                  : "Currently Offline"}
              </strong>
            </div>
          </div>

          <span className="footer-status-divider" />

          {/* Current Focus */}

          <div className="footer-status-item">
            <span className="footer-status-icon">
              <FaCode aria-hidden="true" />
            </span>

            <div>
              <span>Current Focus</span>

              <strong>
                Full Stack Development
              </strong>
            </div>
          </div>

          <span className="footer-status-divider" />

          {/* Primary Stack */}

          <div className="footer-status-item">
            <span className="footer-status-icon">
              <FaJava aria-hidden="true" />
            </span>

            <div>
              <span>Primary Stack</span>

              <strong>
                Java · Spring Boot · React
              </strong>
            </div>
          </div>

          <span className="footer-status-divider" />

          {/* Availability */}

          <div className="footer-status-item">
            <span className="footer-status-icon">
              <FaRocket aria-hidden="true" />
            </span>

            <div>
              <span>Availability</span>

              <strong>
                Remote · Hybrid · On-site
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          © {currentYear}{" "}
          <strong>Andra Udaychandra</strong>. All rights
          reserved.
        </p>

        <p className="footer-built">
          Designed &amp; developed with React · JavaScript ·
          CSS
        </p>

        <button
          type="button"
          className="footer-back-top"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          <span>Back to top</span>

          <span className="footer-back-top-icon">
            <FaArrowUp aria-hidden="true" />
          </span>
        </button>
      </div>
    </footer>
  );
}