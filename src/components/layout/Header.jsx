import React, { useEffect, useRef, useState } from "react";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaDownload,
  FaCircle,
  FaCode,
  FaChevronDown,
  FaArrowRight,
  FaBriefcase,
  FaLayerGroup,
} from "react-icons/fa";

import avatarSrc from "../../assets/Selfie_Image.jpg";
import resumePdf from "../../assets/ANDRA-UDAYCHANDRA_Resume.pdf";

import { useTheme } from "../../context/ThemeContext";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const PROFILE_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:udayandra003@gmail.com",
    icon: FaEnvelope,
    className: "social-email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andra-udaychandra",
    icon: FaLinkedin,
    className: "social-linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/uday-andra",
    icon: FaGithub,
    className: "social-github",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/_.mr._.cool._._",
    icon: FaInstagram,
    className: "social-instagram",
  },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const profileRef = useRef(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.15, 0.3],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.classList.remove("mobile-menu-active");
    }

    return () => {
      document.body.classList.remove("mobile-menu-active");
    };
  }, [mobileOpen]);

  const closeMenus = () => {
    setProfileOpen(false);
    setMobileOpen(false);
  };

  const handleNavigation = (href) => {
    closeMenus();

    const target = document.querySelector(href);

    if (!target) return;

    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    closeMenus();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`site-header ${
        mobileOpen ? "site-header--mobile-open" : ""
      }`}
    >
      <div className="header-inner container">

        <a
          href="#hero"
          className="brand"
          onClick={handleHomeClick}
          aria-label="Go to homepage"
        >
          <span className="brand-avatar-wrap">
            <span className="brand-avatar-ring" />

            <img
              src={avatarSrc}
              alt="Andra Udaychandra"
              className="brand-avatar"
              width="46"
              height="46"
            />

            <span
              className="brand-status"
              aria-hidden="true"
            >
              <FaCircle />
            </span>

            <span className="brand-avatar-glow" />
          </span>

          <span className="brand-copy">
            <span className="brand-name">UDAY</span>

            <span className="brand-sub">
              <span className="brand-sub-line" />
              <strong>Portfolio</strong>
            </span>
          </span>
        </a>

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={
                activeSection === item.href
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(item.href);
              }}
              aria-current={
                activeSection === item.href
                  ? "page"
                  : undefined
              }
            >
              <span className="nav-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="nav-label">
                {item.label}
              </span>

              <span className="nav-active-dot" />
            </a>
          ))}
        </nav>

        <div className="header-actions">

          {/* THEME */}

          <button
            type="button"
            className="header-action theme-action"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            title={
              theme === "light"
                ? "Dark theme"
                : "Light theme"
            }
          >
            <span className="theme-icon">
              {theme === "light" ? (
                <FaMoon />
              ) : (
                <FaSun />
              )}
            </span>

            <span className="theme-label">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>

          {/* PROFILE */}

          <div
            className="profile-wrap"
            ref={profileRef}
          >
            <button
              type="button"
              className={`profile-trigger ${
                profileOpen
                  ? "profile-trigger--open"
                  : ""
              }`}
              onClick={() =>
                setProfileOpen((current) => !current)
              }
              aria-expanded={profileOpen}
              aria-haspopup="menu"
              aria-label="Open profile menu"
            >
              <span className="profile-trigger-avatar">
                <img
                  src={avatarSrc}
                  alt=""
                  width="36"
                  height="36"
                />

                <span
                  className="profile-trigger-status"
                  aria-hidden="true"
                />
              </span>

              <span className="profile-trigger-copy">
                <small>Developer</small>
                <strong>UC</strong>
              </span>

              <FaChevronDown
                className="profile-chevron"
                aria-hidden="true"
              />
            </button>

            <div
              className={`profile-panel ${
                profileOpen
                  ? "profile-panel--open"
                  : ""
              }`}
              role="menu"
              aria-hidden={!profileOpen}
            >
              <div className="profile-panel-inner">

                {/* PROFILE IDENTITY */}

                <div className="profile-identity">

                  <div className="profile-avatar-large">
                    <span className="profile-avatar-orbit" />

                    <img
                      src={avatarSrc}
                      alt="Andra Udaychandra"
                      width="76"
                      height="76"
                    />

                    <span className="profile-avatar-status">
                      <FaCircle />
                    </span>
                  </div>

                  <div className="profile-identity-copy">

                    <div className="profile-name-row">
                      <strong>
                        Andra Udaychandra
                      </strong>

                      <span className="profile-verified">
                        <FaCode />
                      </span>
                    </div>

                    <span className="profile-role">
                      Software Developer
                    </span>

                    <span className="profile-speciality">
                      Full Stack Java Developer
                    </span>
                  </div>
                </div>

                {/* PROFILE META */}

                <div className="profile-meta-grid">

                  <div className="profile-meta-card">
                    <span className="profile-meta-icon">
                      <FaBriefcase />
                    </span>

                    <span>
                      <small>Focus</small>
                      <strong>Full Stack</strong>
                    </span>
                  </div>

                  <div className="profile-meta-card">
                    <span className="profile-meta-icon">
                      <FaLayerGroup />
                    </span>

                    <span>
                      <small>Stack</small>
                      <strong>Java · React</strong>
                    </span>
                  </div>

                </div>

                {/* AVAILABILITY */}

                <div className="profile-availability">
                  <span className="availability-indicator">
                    <span />
                  </span>

                  <span>
                    Open to software development
                    opportunities
                  </span>
                </div>

                {/* QUICK NAVIGATION */}

                <div className="profile-section">

                  <span className="profile-section-label">
                    QUICK NAVIGATION
                  </span>

                  <div className="profile-links">
                    {PROFILE_LINKS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavigation(item.href);
                        }}
                      >
                        <span>{item.label}</span>

                        <span className="profile-link-arrow">
                          <FaArrowRight />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* RESUME */}

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-resume"
                  onClick={() =>
                    setProfileOpen(false)
                  }
                >
                  <span className="profile-resume-icon">
                    <FaDownload />
                  </span>

                  <span className="profile-resume-copy">
                    <strong>View Resume</strong>
                    <small>
                      Professional profile
                    </small>
                  </span>

                  <span className="profile-resume-arrow">
                    <FaExternalLinkAlt />
                  </span>
                </a>

                {/* SOCIAL */}

                <div className="profile-social-area">

                  <span className="profile-section-label">
                    CONNECT
                  </span>

                  <div className="profile-socials">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          className={social.className}
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
                          title={social.label}
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* MOBILE MENU */}

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            <span className="mobile-menu-icon">
              {mobileOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </span>
          </button>

        </div>
      </div>

      <div
        className={`mobile-nav ${
          mobileOpen
            ? "mobile-nav--open"
            : ""
        }`}
      >
        <nav aria-label="Mobile navigation">

          <div className="mobile-nav-header">
            <div>
              <span>PORTFOLIO</span>
              <strong>UC</strong>
            </div>

            <span className="mobile-nav-status">
              <span />
              Available
            </span>
          </div>

          <div className="mobile-nav-links">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  activeSection === item.href
                    ? "mobile-nav-link active"
                    : "mobile-nav-link"
                }
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(item.href);
                }}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-nav-label">
                  {item.label}
                </span>

                <span className="mobile-nav-arrow">
                  <FaArrowRight />
                </span>
              </a>
            ))}
          </div>

          {/* MOBILE RESUME */}

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume"
            onClick={closeMenus}
          >
            <span className="mobile-resume-icon">
              <FaDownload />
            </span>

            <span>View Resume</span>

            <FaExternalLinkAlt />
          </a>

          {/* MOBILE SOCIALS */}

          <div className="mobile-socials">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className={social.className}
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
                >
                  <Icon />
                </a>
              );
            })}
          </div>

        </nav>
      </div>
    </header>
  );
}