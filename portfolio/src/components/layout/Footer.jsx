import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section footer-brand">
          <h3 className="footer-title">Andra Udaychandra</h3>
          <p className="footer-role">Full Stack Developer</p>
          <p className="footer-description">
            Building fast, scalable web experiences with modern Java &amp; React
            stacks. Always open to interesting collaborations and roles.
          </p>
        </div>

        {/* Middle Section – Quick Links */}
        <div className="footer-section footer-links-section">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links-grid">
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="#experience">Experience</a></li>
              <li><a href="#certifications">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#hero">Back to Top</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section – Contact / Social */}
        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Contact Me</h4>
          <ul className="contact-list">
            <li>
              <a href="mailto:udayandra003@gmail.com">
                <span className="contact-icon">
                  <FaEnvelope />
                </span>
                <span>Email</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/andra-udaychandra"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/uday-andra"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/_.mr._.cool._._"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <FaInstagram />
                </span>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-bottom-line" />
        <p>
          © {year} <strong>Andra Udaychandra</strong> — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
