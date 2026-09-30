import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
  FaArrowRight,
  FaCheck,
  FaCircle,
  FaCode,
  FaPaperPlane,
  FaBolt,
  FaShieldAlt,
  FaBriefcase,
  FaLayerGroup,
  FaClock,
  FaUser,
  FaTag,
} from "react-icons/fa";

import resumePdf from "../assets/ANDRA-UDAYCHANDRA_Resume.pdf";

  //  CONTACT DATA
const CONTACT_DETAILS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "udayandra003@gmail.com",
    href: "mailto:udayandra003@gmail.com",
    color: "blue",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 93812 52086",
    href: "tel:+919381252086",
    color: "violet",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Hyderabad, India",
    color: "cyan",
  },
];

const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andra-udaychandra",
    color: "linkedin",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/uday-andra",
    color: "github",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/_.mr._.cool._._",
    color: "instagram",
  },
];

const PROJECT_TYPES = [
  "Web Application",
  "Full Stack Application",
  "Backend / API",
  "Frontend Development",
  "Software Development",
  "Other",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  projectType: "",
  message: "",
};

  //  FORM FIELD
function FormField({
  number,
  label,
  icon: Icon,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  focusedField,
  disabled,
  autoComplete,
}) {
  return (
    <div
      className={`contact-field ${
        focusedField === name ? "is-focused" : ""
      } ${value ? "has-value" : ""}`}
    >
      <div className="contact-field-top">
        <label htmlFor={`contact-${name}`}>
          <span className="contact-field-icon">
            <Icon aria-hidden="true" />
          </span>
          {label}
        </label>

        <span>{number}</span>
      </div>

      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={() => onBlur()}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        disabled={disabled}
      />

      <span className="contact-field-accent" />
    </div>
  );
}

  //  COMPONENT
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: false,
  });

  const [focusedField, setFocusedField] = useState("");

    //  SUCCESS RESET
  useEffect(() => {
    if (!status.success) return;

    const timer = window.setTimeout(() => {
      setStatus((current) => ({
        ...current,
        success: false,
      }));
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [status.success]);

    //  CHANGE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status.error) {
      setStatus((current) => ({
        ...current,
        error: "",
      }));
    }

    if (status.success) {
      setStatus((current) => ({
        ...current,
        success: false,
      }));
    }
  };

    //  VALIDATION
  const validateForm = () => {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }

    if (!form.email.trim()) {
      return "Please enter your email address.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      return "Please enter a subject.";
    }

    if (!form.message.trim()) {
      return "Please enter a message.";
    }

    if (form.message.trim().length < 10) {
      return "Please enter at least 10 characters in your message.";
    }

    return null;
  };

    //  SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setStatus({
        loading: false,
        error: validationError,
        success: false,
      });

      return;
    }

    setStatus({
      loading: true,
      error: "",
      success: false,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          projectType: form.projectType,
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));

        throw new Error(
          data?.error ||
            "Unable to send your message. Please try again."
        );
      }

      setForm(INITIAL_FORM);

      setStatus({
        loading: false,
        error: "",
        success: true,
      });
    } catch (error) {
      setStatus({
        loading: false,
        error:
          error?.message ||
          "Something went wrong. Please try again.",
        success: false,
      });
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
          {/* BACKGROUND */}
      <div className="contact-background" aria-hidden="true">
        <div className="contact-bg-grid" />

        <span className="contact-bg-orb contact-bg-orb-one" />
        <span className="contact-bg-orb contact-bg-orb-two" />
        <span className="contact-bg-orb contact-bg-orb-three" />

        <span className="contact-bg-particle particle-a" />
        <span className="contact-bg-particle particle-b" />
        <span className="contact-bg-particle particle-c" />
        <span className="contact-bg-particle particle-d" />
      </div>

      <div className="container contact-container">
            {/* HEADER */}
        <header className="contact-heading">
          <div className="contact-heading-meta">
            <span className="contact-kicker">
              GET IN TOUCH
            </span>

            <span className="contact-heading-status">
              <FaCircle />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <h2 id="contact-title">
            Let&apos;s Build Something
            <span> Meaningful</span>
          </h2>

          <p>
            Have a project, opportunity or technical idea?
            Tell me what you are building and let&apos;s create
            a reliable software solution together.
          </p>
        </header>

            {/* EQUAL HEIGHT TWO COLUMN LAYOUT */}
        <div className="contact-layout">
              {/* LEFT COLUMN */}
          <aside
            className="contact-panel contact-details"
            aria-label="Contact information"
          >
            {/* 3D PROFILE VISUAL */}

            <div className="contact-visual">
              <div className="contact-visual-orbit orbit-one" />
              <div className="contact-visual-orbit orbit-two" />

              <div className="contact-visual-card">
                <span className="contact-visual-code">
                  {"</>"}
                </span>

                <span className="contact-visual-letter">
                  U
                </span>

                <span className="contact-visual-status">
                  <FaCircle />
                </span>
              </div>

              <span className="visual-particle visual-particle-one" />
              <span className="visual-particle visual-particle-two" />
              <span className="visual-particle visual-particle-three" />
            </div>

            {/* IDENTITY */}

            <div className="contact-identity">
              <span className="contact-identity-label">
                SOFTWARE DEVELOPER
              </span>

              <h3>Udaychandra Andra</h3>

              <p>Full Stack Java Developer</p>
            </div>

            {/* AVAILABILITY */}

            <div className="contact-availability">
              <span className="availability-icon">
                <FaCircle />
              </span>

              <div>
                <strong>Open to opportunities</strong>

                <span>
                  Software Development · Remote / Hybrid
                </span>
              </div>

              <FaBolt className="availability-bolt" />
            </div>

            {/* CONTACT INFORMATION */}

            <div className="contact-info-block">
              <div className="contact-block-heading">
                <span>CONTACT</span>
                <small>DIRECT CHANNELS</small>
              </div>

              <div className="contact-list">
                {CONTACT_DETAILS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`contact-detail contact-detail--${item.color}`}
                    >
                      <span className="contact-detail-icon">
                        <Icon aria-hidden="true" />
                      </span>

                      <div className="contact-detail-content">
                        <span className="contact-detail-label">
                          {item.label}
                        </span>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="contact-detail-value"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="contact-detail-value">
                            {item.value}
                          </span>
                        )}
                      </div>

                      {item.href && (
                        <FaArrowRight className="contact-detail-arrow" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SOCIAL */}

            <div className="contact-social-block">
              <div className="contact-block-heading">
                <span>CONNECT</span>
                <small>SOCIAL PROFILES</small>
              </div>

              <div className="contact-socials">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact-social contact-social--${item.color}`}
                      aria-label={item.label}
                      title={item.label}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* RESUME */}

            <a
              href={resumePdf}
              download
              className="contact-resume"
            >
              <span className="contact-resume-icon">
                <FaDownload />
              </span>

              <span className="contact-resume-content">
                <strong>Download Resume</strong>
                <small>View my professional profile</small>
              </span>

              <FaArrowRight className="contact-resume-arrow" />
            </a>

            {/* TECH STACK */}

            <div className="contact-stack">
              <span className="contact-stack-icon">
                <FaCode />
              </span>

              <div>
                <strong>
                  Java · Spring Boot · React
                </strong>

                <small>
                  Full-stack application development
                </small>
              </div>
            </div>
          </aside>

              {/* RIGHT COLUMN */}
          <div className="contact-panel contact-form-panel">
            {/* FORM HEADER */}

            <div className="contact-form-header">
              <div className="form-header-icon">
                <FaPaperPlane />
              </div>

              <div>
                <span>SEND A MESSAGE</span>

                <h3>Tell me about your idea.</h3>

                <p>
                  Share a few details and I&apos;ll get back
                  to you as soon as possible.
                </p>
              </div>
            </div>

            {/* FORM */}

            <form
              className={`contact-form ${
                status.error ? "contact-form--error" : ""
              } ${
                status.success ? "contact-form--success" : ""
              }`}
              onSubmit={handleSubmit}
              noValidate
            >
                  {/* FULL WIDTH NAME */}
              <FormField
                number="01"
                label="Full Name"
                icon={FaUser}
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField("")}
                focusedField={focusedField}
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={status.loading}
              />

                  {/* FULL WIDTH EMAIL */}
              <FormField
                number="02"
                label="Email Address"
                icon={FaEnvelope}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField("")}
                focusedField={focusedField}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={status.loading}
              />

                  {/* FULL WIDTH SUBJECT */}
              <FormField
                number="03"
                label="Subject"
                icon={FaTag}
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField("")}
                focusedField={focusedField}
                placeholder="What would you like to discuss?"
                disabled={status.loading}
              />

                  {/* FULL WIDTH PROJECT TYPE */}
              <div
                className={`contact-field contact-select-field ${
                  focusedField === "projectType"
                    ? "is-focused"
                    : ""
                } ${form.projectType ? "has-value" : ""}`}
              >
                <div className="contact-field-top">
                  <label htmlFor="contact-project-type">
                    <span className="contact-field-icon">
                      <FaLayerGroup aria-hidden="true" />
                    </span>
                    Project Type
                  </label>

                  <span>04</span>
                </div>

                <select
                  id="contact-project-type"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  onFocus={() =>
                    setFocusedField("projectType")
                  }
                  onBlur={() => setFocusedField("")}
                  disabled={status.loading}
                >
                  <option value="">
                    Select project type
                  </option>

                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <span className="contact-field-accent" />
              </div>

                  {/* FULL WIDTH MESSAGE */}
              <div
                className={`contact-field contact-message-field ${
                  focusedField === "message"
                    ? "is-focused"
                    : ""
                } ${form.message ? "has-value" : ""}`}
              >
                <div className="contact-field-top">
                  <label htmlFor="contact-message">
                    <span className="contact-field-icon">
                      <FaPaperPlane aria-hidden="true" />
                    </span>
                    Message
                  </label>

                  <span>
                    {form.message.length}/1000
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={(event) => {
                    if (event.target.value.length <= 1000) {
                      handleChange(event);
                    }
                  }}
                  onFocus={() =>
                    setFocusedField("message")
                  }
                  onBlur={() => setFocusedField("")}
                  placeholder="Tell me about your project, requirements, timeline or opportunity..."
                  rows={7}
                  maxLength={1000}
                  required
                  disabled={status.loading}
                />

                <div className="message-meta">
                  <span>
                    <FaShieldAlt />
                    Secure communication
                  </span>

                  <span>
                    {form.message.length > 0
                      ? "Message ready"
                      : "Awaiting your message"}
                  </span>
                </div>

                <span className="contact-field-accent" />
              </div>

              {/* ERROR */}

              {status.error && (
                <div
                  className="contact-error"
                  role="alert"
                >
                  <span>!</span>
                  {status.error}
                </div>
              )}

              {/* SUBMIT */}

              <div className="contact-submit-area">
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status.loading}
                  aria-busy={status.loading}
                >
                  <span className="submit-icon">
                    {status.loading ? (
                      <span className="submit-spinner" />
                    ) : (
                      <FaPaperPlane />
                    )}
                  </span>

                  <span>
                    {status.loading
                      ? "Sending Message..."
                      : "Send Message"}
                  </span>

                  {!status.loading && (
                    <FaArrowRight />
                  )}
                </button>

                <div className="submit-note">
                  <FaClock />
                  <span>
                    I&apos;ll respond as soon as possible.
                  </span>
                </div>
              </div>
            </form>

            {/* SUCCESS */}

            {status.success && (
              <div
                className="contact-success"
                role="status"
                aria-live="polite"
              >
                <div className="success-icon">
                  <FaCheck />
                </div>

                <div>
                  <strong>
                    Message sent successfully.
                  </strong>

                  <span>
                    Thank you for reaching out. I&apos;ll
                    get back to you soon.
                  </span>
                </div>
              </div>
            )}

            {/* FORM FOOTER */}

            <div className="contact-form-footer">
              <div>
                <FaBriefcase />
                <span>
                  Open to software development opportunities
                </span>
              </div>

              <div>
                <FaLayerGroup />
                <span>
                  Java · Spring Boot · React
                </span>
              </div>
            </div>
          </div>
        </div>

            {/* BOTTOM INFORMATION STRIP */}
        <div className="contact-bottom-strip">
          <div>
            <span>01</span>
            <div>
              <strong>Available</strong>
              <small>Open to opportunities</small>
            </div>
          </div>

          <div>
            <span>02</span>
            <div>
              <strong>Full Stack</strong>
              <small>Java · Spring Boot · React</small>
            </div>
          </div>

          <div>
            <span>03</span>
            <div>
              <strong>Location</strong>
              <small>Hyderabad · India</small>
            </div>
          </div>

          <div>
            <span>04</span>
            <div>
              <strong>Direct Contact</strong>
              <small>Email · Phone · Social</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}