import React, { useState, useEffect, useRef } from "react";
import {
  FaSun,
  FaMoon,
  FaUserCircle,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import avatarSrc from "../../assets/selfie_Image.jpg";

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const profileBtnRef = useRef(null);

  // Close profile menu on outside click or ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (
        menuRef.current.contains(e.target) ||
        (profileBtnRef.current &&
          profileBtnRef.current.contains(e.target))
      ) {
        return;
      }
      setMenuOpen(false);
    };

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="site-header header-tall">
      <div className="container header-inner header-with-profile">

        {/* BRAND */}
        <div className="brand-wrap">
          <a className="brand" href="#hero">
            <img src={avatarSrc} alt="Uday" className="brand-avatar" />
            <span className="brand-text">
              Uday <span className="brand-sub">| Portfolio</span>
            </span>
          </a>
        </div>

        {/* MAIN NAV */}
        <nav className="nav hide-on-mobile">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="header-actions">

          {/* THEME TOGGLE (PROP-BASED) */}
          <button
            className="icon-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
            title={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* PROFILE BUTTON */}
          <div className="profile-wrap">
            <button
              ref={profileBtnRef}
              className="icon-btn profile-btn"
              onClick={() => setMenuOpen((s) => !s)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              aria-label="Open profile menu"
              title="Profile"
            >
              <FaUserCircle />
            </button>

            {/* DROPDOWN PANEL */}
            <div
              ref={menuRef}
              className={`profile-panel ${menuOpen ? "open" : ""}`}
              role="menu"
              aria-hidden={!menuOpen}
            >
              <div className="profile-card">

                {/* PROFILE TOP */}
                <div className="profile-card-top">
                  <img
                    src={avatarSrc}
                    alt="Uday"
                    className="profile-card-avatar"
                  />
                  <div className="profile-card-info">
                    <div className="profile-name">Uday</div>
                    <div className="profile-role">
                      Full Stack Java Developer
                    </div>
                  </div>
                </div>

                {/* INTERNAL LINKS */}
                <div className="profile-links">
                  <a href="#experience" className="profile-link">Experience</a>
                  <a href="#skills" className="profile-link">Skills</a>
                  <a href="#projects" className="profile-link">Projects</a>
                  <a href="#certifications" className="profile-link">Certifications</a>
                  <a href="#contact" className="profile-link">Contact</a>
                  <a
                    href="/resume.pdf"
                    className="profile-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>

                {/* SOCIAL LINKS */}
                <div className="profile-socials">
                  <a
                    href="mailto:udayandra003@gmail.com"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andra-udaychandra"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/uday-andra"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://instagram.com/_.mr._.cool._._"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* MOBILE NAV */}
        <div className="mobile-nav hide-on-desktop">
          <nav className="nav-mobile">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

      </div>
    </header>
  );
}
