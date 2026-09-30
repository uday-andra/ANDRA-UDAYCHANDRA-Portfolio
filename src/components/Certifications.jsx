import React, { useState } from "react";

import {
  FaAward,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaGlobe,
  FaPython,
  FaJava,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";

import fsdIntern from "./certifications/FSD-Intern.png";
import ethicalHacker from "./certifications/Ethical_Hacker_certificate.pdf";
import cyberAicte from "./certifications/Cybersecurity-AICTE.pdf";
import androidAicte from "./certifications/Android-Developer-AICTE.pdf";
import awsCloudAicte from "./certifications/AWS-Cloud-AICTE.pdf";
import cyberPrivacy from "./certifications/Cybersecurity-and-Privacy.pdf";
import iotIntro from "./certifications/Introduction-to-IOT.pdf";
import powerBI from "./certifications/PowerBI.pdf";
import introJava from "./certifications/Introduction-to-java-programming.pdf";
import pythonCisco from "./certifications/Python_certificate-CISCO.pdf";
import pythonDjango from "./certifications/Python-Django.pdf";
import responsiveWeb from "./certifications/Responsive-Web-Development.pdf";

const certificates = [
  {
    id: 1,
    title: "Full Stack Java Developer Intern",
    subtitle: "AI Variant",
    provider: "AI Variant",
    category: "Full Stack Development",
    icon: FaJava,
    link: fsdIntern,
    type: "Internship",
    accent: "blue",
  },
  {
    id: 2,
    title: "Certified Ethical Hacker",
    subtitle: "CISCO",
    provider: "CISCO",
    category: "Cybersecurity",
    icon: FaShieldAlt,
    link: ethicalHacker,
    type: "Certification",
    accent: "red",
  },
  {
    id: 3,
    title: "Cyber Security Virtual Internship",
    subtitle: "AICTE",
    provider: "AICTE",
    category: "Cybersecurity",
    icon: FaShieldAlt,
    link: cyberAicte,
    type: "Virtual Internship",
    accent: "violet",
  },
  {
    id: 4,
    title: "Android Developer Virtual Internship",
    subtitle: "AICTE",
    provider: "AICTE",
    category: "Mobile Development",
    icon: FaMobileAlt,
    link: androidAicte,
    type: "Virtual Internship",
    accent: "green",
  },
  {
    id: 5,
    title: "AWS Cloud Virtual Internship",
    subtitle: "AICTE",
    provider: "AICTE",
    category: "Cloud",
    icon: FaCloud,
    link: awsCloudAicte,
    type: "Virtual Internship",
    accent: "orange",
  },
  {
    id: 6,
    title: "Cybersecurity and Privacy",
    subtitle: "NPTEL",
    provider: "NPTEL",
    category: "Cybersecurity",
    icon: FaShieldAlt,
    link: cyberPrivacy,
    type: "Certification",
    accent: "pink",
  },
  {
    id: 7,
    title: "Introduction to Internet of Things",
    subtitle: "NPTEL",
    provider: "NPTEL",
    category: "IoT",
    icon: FaGlobe,
    link: iotIntro,
    type: "Certification",
    accent: "cyan",
  },
  {
    id: 8,
    title: "Analyzing and Visualizing Data with PowerBI",
    subtitle: "Edx",
    provider: "Edx",
    category: "Data Analytics",
    icon: FaDatabase,
    link: powerBI,
    type: "Certification",
    accent: "yellow",
  },
  {
    id: 9,
    title: "Introduction to Java Programming",
    subtitle: "Edx",
    provider: "Edx",
    category: "Programming",
    icon: FaJava,
    link: introJava,
    type: "Certification",
    accent: "indigo",
  },
  {
    id: 10,
    title: "Programming Essentials in Python",
    subtitle: "CISCO",
    provider: "CISCO",
    category: "Programming",
    icon: FaPython,
    link: pythonCisco,
    type: "Certification",
    accent: "sky",
  },
  {
    id: 11,
    title: "Python Django",
    subtitle: "Infosys Springboard",
    provider: "Infosys Springboard",
    category: "Backend Development",
    icon: FaPython,
    link: pythonDjango,
    type: "Certification",
    accent: "teal",
  },
  {
    id: 12,
    title: "Responsive Web Development",
    subtitle: "Infosys Springboard",
    provider: "Infosys Springboard",
    category: "Frontend Development",
    icon: FaCode,
    link: responsiveWeb,
    type: "Certification",
    accent: "magenta",
  },
];

const INITIAL_VISIBLE_COUNT = 4;

  //  CERTIFICATION CARD
function CertificationCard({ certificate, index }) {
  const Icon = certificate.icon;

  return (
    <article
      className={`cert-card cert-card--${certificate.accent}`}
      style={{
        "--cert-delay": `${index * 70}ms`,
      }}
    >
      {/* Decorative glow */}
      <span className="cert-card-glow" aria-hidden="true" />

      {/* Top visual area */}
      <div className="cert-card-top">
        <span className="cert-number">
          {String(certificate.id).padStart(2, "0")}
        </span>

        <span className="cert-type">
          {certificate.type}
        </span>

        <div className="cert-icon-scene">
          <div className="cert-icon-ring cert-icon-ring-one" />
          <div className="cert-icon-ring cert-icon-ring-two" />

          <div className="cert-icon-wrap">
            <Icon aria-hidden="true" />
          </div>

          <span className="cert-icon-particle cert-icon-particle-one" />
          <span className="cert-icon-particle cert-icon-particle-two" />
        </div>

        <span className="cert-code-symbol" aria-hidden="true">
          {"</>"}
        </span>
      </div>

      {/* Content */}
      <div className="cert-card-content">
        <span className="cert-provider-label">
          {certificate.provider}
        </span>

        <h3>{certificate.title}</h3>

        <p>{certificate.subtitle}</p>

        <div className="cert-meta">
          <span>{certificate.category}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="cert-card-footer">
        <span className="cert-credential">
          CREDENTIAL #{String(certificate.id).padStart(2, "0")}
        </span>

        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-view-btn"
          aria-label={`View ${certificate.title}`}
        >
          <span>View</span>

          <span className="cert-view-icon">
            <FaExternalLinkAlt aria-hidden="true" />
          </span>
        </a>
      </div>
    </article>
  );
}

  //  CERTIFICATIONS
export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, INITIAL_VISIBLE_COUNT);

  const domainCount = new Set(
    certificates.map((certificate) => certificate.category)
  ).size;

  return (
    <section
      id="certifications"
      className="cert-section"
      aria-labelledby="certifications-title"
    >
          {/* BACKGROUND */}
      <div className="cert-background" aria-hidden="true">
        <div className="cert-grid-pattern" />

        <span className="cert-bg-orb cert-bg-orb-one" />
        <span className="cert-bg-orb cert-bg-orb-two" />
        <span className="cert-bg-orb cert-bg-orb-three" />

        <span className="cert-background-dot cert-bg-dot-one" />
        <span className="cert-background-dot cert-bg-dot-two" />
        <span className="cert-background-dot cert-bg-dot-three" />
      </div>

      <div className="container cert-container">
            {/* HEADER */}
        <header className="cert-heading">
          <div className="cert-heading-top">
            <div className="cert-heading-label">
              <span className="section-kicker">
                PROFESSIONAL DEVELOPMENT
              </span>

              <span className="cert-heading-line" />
            </div>

            <span className="cert-heading-count">
              {String(certificates.length).padStart(2, "0")} CREDENTIALS
            </span>
          </div>

          <h2 id="certifications-title">
            Certifications &amp; <span>Learning</span>
          </h2>

          <p>
            A collection of certifications, internships and technical
            learning across software development, cloud, cybersecurity,
            programming and related technologies.
          </p>
        </header>

            {/* 3D OVERVIEW */}
        <div className="cert-overview">
          <div className="cert-overview-visual">
            <div className="cert-main-orbit cert-main-orbit-one" />
            <div className="cert-main-orbit cert-main-orbit-two" />
            <div className="cert-main-orbit cert-main-orbit-three" />

            <div className="cert-overview-icon">
              <FaAward aria-hidden="true" />
            </div>

            <span className="cert-overview-particle cert-overview-particle-one" />
            <span className="cert-overview-particle cert-overview-particle-two" />
            <span className="cert-overview-particle cert-overview-particle-three" />
          </div>

          <div className="cert-overview-main">
            <span>VERIFIED LEARNING PORTFOLIO</span>

            <strong>
              {certificates.length} Certificates
            </strong>

            <p>
              Continuous learning across software development,
              cybersecurity, cloud, data, programming and modern
              application technologies.
            </p>
          </div>

          <div className="cert-overview-stats">
            <div className="cert-stat cert-stat-blue">
              <strong>{certificates.length}</strong>
              <span>Credentials</span>
            </div>

            <div className="cert-stat cert-stat-violet">
              <strong>{domainCount}+</strong>
              <span>Domains</span>
            </div>

            <div className="cert-stat cert-stat-pink">
              <strong>
                {showAll
                  ? certificates.length
                  : INITIAL_VISIBLE_COUNT}
              </strong>
              <span>Visible</span>
            </div>
          </div>
        </div>

            {/* CERTIFICATION GRID */}
        <div
          className={`cert-grid ${
            showAll ? "cert-grid--expanded" : ""
          }`}
        >
          {visibleCertificates.map((certificate, index) => (
            <CertificationCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

            {/* VIEW MORE */}
        {certificates.length > INITIAL_VISIBLE_COUNT && (
          <div className="cert-more-wrapper">
            <button
              type="button"
              className="cert-more-btn"
              onClick={() =>
                setShowAll((current) => !current)
              }
              aria-expanded={showAll}
            >
              <span className="cert-more-number">
                {showAll
                  ? String(certificates.length).padStart(2, "0")
                  : String(INITIAL_VISIBLE_COUNT).padStart(2, "0")}
              </span>

              <span>
                {showAll
                  ? "View Less"
                  : `View More (${certificates.length - INITIAL_VISIBLE_COUNT} more)`}
              </span>

              <span className="cert-more-icon">
                {showAll ? (
                  <FaChevronUp aria-hidden="true" />
                ) : (
                  <FaChevronDown aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
        )}

            {/* BOTTOM STRIP */}
        <div className="cert-bottom-strip">
          <div className="cert-bottom-item cert-bottom-blue">
            <span>01</span>

            <div>
              <strong>Development</strong>
              <small>Java · Web · Full Stack</small>
            </div>
          </div>

          <div className="cert-bottom-item cert-bottom-violet">
            <span>02</span>

            <div>
              <strong>Security</strong>
              <small>Cybersecurity · Privacy</small>
            </div>
          </div>

          <div className="cert-bottom-item cert-bottom-cyan">
            <span>03</span>

            <div>
              <strong>Cloud &amp; Data</strong>
              <small>AWS · PowerBI · IoT</small>
            </div>
          </div>

          <div className="cert-bottom-item cert-bottom-pink">
            <span>04</span>

            <div>
              <strong>Continuous Learning</strong>
              <small>Technical development</small>
            </div>
          </div>
        </div>

            {/* FOOTER MICRO LABEL */}
        <div className="cert-footer-note">
          <span className="cert-footer-dot" />

          <span>
            Learning • Building • Improving
          </span>

          <FaArrowRight aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}