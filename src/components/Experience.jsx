import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

  //  EDUCATION DATA
const educationData = [
  {
    period: "2021 – 2025",
    title: "B.Tech in Information Technology",
    place: "PACE Institute of Technology and Sciences, Ongole",
    description:
      "Built a strong foundation in information technology, software development, problem-solving, data structures and algorithms.",
    focus: [
      "Information Technology",
      "Software Development",
      "Problem Solving",
    ],
  },
  {
    period: "2019 – 2021",
    title: "Intermediate Education (MPC)",
    place: "Vijetha Junior College, Kanigiri",
    description:
      "Studied mathematics and science with emphasis on physics and mathematical problem-solving.",
    focus: ["Mathematics", "Physics", "Science"],
  },
  {
    period: "2018 – 2019",
    title: "SSC Education",
    place: "Z.P High School, Pedacherlopalli",
    description:
      "Completed secondary education with an academic interest in science and mathematics.",
    focus: ["Science", "Mathematics", "Foundation"],
  },
];

  //  EXPERIENCE DATA
const experienceData = [
  {
    period: "July 2026 – Present",
    title: "Software Developer",
    place: "K Quality Soft Private Limited, Hyderabad",
    description:
      "Working as a Software Developer on software development and technology-driven solutions within a professional engineering environment.",
    focus: [
      "Software Development",
      "Application Engineering",
      "IT Solutions",
    ],
    current: true,
  },
  {
    period: "Jan 2026 – June 2026",
    title: "Software Developer",
    place: "Nimblix Technologies OPC Pvt Ltd, Bengaluru",
    description:
      "Worked on software development and technology-driven solutions as part of a professional engineering team.",
    focus: [
      "Software Development",
      "Engineering",
      "Technology Solutions",
    ],
  },
  {
    period: "June 2025 – Dec 2025",
    title: "Java Full-Stack Developer Intern",
    place: "AI Variant, Bengaluru",
    description:
      "Worked on developing and maintaining web applications using Java, Spring Boot and React while collaborating with cross-functional teams to deliver software solutions.",
    focus: [
      "Java",
      "Spring Boot",
      "React",
      "Full-Stack Development",
    ],
  },
];

  //  TIMELINE ITEM
function JourneyItem({ item, type, index }) {
  const isEducation = type === "education";

  return (
    <article
      className={`journey-item ${
        item.current ? "journey-item--current" : ""
      }`}
    >
      <div className="journey-marker" aria-hidden="true">
        <span className="journey-marker-ring" />
        <span className="journey-marker-dot" />
      </div>

      <div className="journey-content">
        <div className="journey-content-glow" aria-hidden="true" />

        <div className="journey-meta">
          <span className="journey-period">
            <FaCalendarAlt aria-hidden="true" />
            {item.period}
          </span>

          {item.current && (
            <span className="journey-current">
              <span />
              Current
            </span>
          )}
        </div>

        <span className="journey-item-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="journey-title">{item.title}</h3>

        <div className="journey-place">
          {isEducation ? (
            <FaUniversity aria-hidden="true" />
          ) : (
            <FaBriefcase aria-hidden="true" />
          )}

          <span>{item.place}</span>
        </div>

        <p className="journey-description">{item.description}</p>

        <div className="journey-focus">
          {item.focus.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="journey-card-line" aria-hidden="true">
          <span />
        </div>
      </div>
    </article>
  );
}

  //  TIMELINE COLUMN
function JourneyColumn({ label, type, items, icon: Icon }) {
  return (
    <section
      className={`journey-column journey-column--${type}`}
      aria-labelledby={`journey-${type}-title`}
    >
      <header className="journey-column-header">
        <div className="journey-column-icon">
          <Icon aria-hidden="true" />
        </div>

        <div className="journey-column-heading">
          <span className="journey-column-label">
            {type === "education"
              ? "ACADEMIC BACKGROUND"
              : "PROFESSIONAL EXPERIENCE"}
          </span>

          <h2 id={`journey-${type}-title`}>{label}</h2>
        </div>

        <span className="journey-column-count">
          {String(items.length).padStart(2, "0")}
        </span>
      </header>

      <div className="journey-timeline">
        {items.map((item, index) => (
          <JourneyItem
            key={`${type}-${index}`}
            item={item}
            type={type}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

  //  EXPERIENCE / JOURNEY
export default function Experience() {
  return (
    <section
      id="experience"
      className="journey-section"
      aria-labelledby="journey-title"
    >
      {/* Decorative background */}
      <div className="journey-background" aria-hidden="true">
        <span className="journey-orb journey-orb-one" />
        <span className="journey-orb journey-orb-two" />
        <span className="journey-orb journey-orb-three" />
        <span className="journey-grid-pattern" />
      </div>

      <div className="container journey-container">
            {/* SECTION HEADER */}
        <header className="journey-header">
          <div className="journey-heading-top">
            <span className="journey-kicker">
              EXPERIENCE &amp; EDUCATION
            </span>

            <span className="journey-heading-line" />
          </div>

          <h1 id="journey-title">
            My <span>Professional Journey</span>
          </h1>

          <p>
            From building my academic foundation in Information
            Technology to developing professional software
            experience across full-stack development and
            technology-driven solutions.
          </p>
        </header>

            {/* SUMMARY */}
        <div className="journey-summary">
          <div className="journey-summary-item">
            <div className="journey-summary-icon journey-summary-icon--blue">
              <FaGraduationCap aria-hidden="true" />
            </div>

            <div>
              <strong>B.Tech IT</strong>
              <span>2021 – 2025</span>
            </div>
          </div>

          <div className="journey-summary-divider" />

          <div className="journey-summary-item">
            <div className="journey-summary-icon journey-summary-icon--purple">
              <FaCode aria-hidden="true" />
            </div>

            <div>
              <strong>Full-Stack Development</strong>
              <span>Java • Spring Boot • React</span>
            </div>
          </div>

          <div className="journey-summary-divider" />

          <div className="journey-summary-item">
            <div className="journey-summary-icon journey-summary-icon--pink">
              <FaLaptopCode aria-hidden="true" />
            </div>

            <div>
              <strong>Software Development</strong>
              <span>Professional Experience</span>
            </div>
          </div>
        </div>

            {/* TWO TIMELINES */}
        <div className="journey-grid">
          <JourneyColumn
            label="Education"
            type="education"
            items={educationData}
            icon={FaGraduationCap}
          />

          <JourneyColumn
            label="Experience"
            type="experience"
            items={experienceData}
            icon={FaBriefcase}
          />
        </div>

            {/* CAREER DIRECTION */}
        <div className="journey-footer">
          <div className="journey-footer-decoration" aria-hidden="true" />

          <div className="journey-footer-icon">
            <FaCode aria-hidden="true" />
          </div>

          <div className="journey-footer-content">
            <span className="journey-footer-label">
              CURRENT DIRECTION
            </span>

            <h3>
              Building reliable, maintainable
              <span> software solutions.</span>
            </h3>

            <p>
              Focused on growing as a software developer while
              working across backend, frontend and modern
              application development technologies.
            </p>

            <div className="journey-footer-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>Software Engineering</span>
            </div>
          </div>

          <div className="journey-footer-arrow">
            <FaArrowRight aria-hidden="true" />
          </div>
        </div>

            {/* LOCATION STRIP */}
        <div className="journey-location">
          <FaMapMarkerAlt aria-hidden="true" />
          <span>India</span>
          <i />
          <span>Software Developer</span>
          <i />
          <span>Open to professional opportunities</span>
        </div>
      </div>
    </section>
  );
}