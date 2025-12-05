import React, { useState } from "react";
import resumePdf from "../assets/ANDRA-UDAYCHANDRA_Resume.pdf";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: "", success: false });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status.error) setStatus((s) => ({ ...s, error: "" }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(form.email)) return "Enter a valid email.";
    if (!form.message.trim()) return "Message cannot be empty.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: false });

    const err = validate();
    if (err) {
      setStatus({ loading: false, error: err, success: false });
      return;
    }

    try {
      const url = "/api/contact"; // change if your backend is on different origin

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Server error");
      }

      // success
      setForm({ name: "", email: "", message: "" });
      setStatus({ loading: false, error: "", success: true });

      setTimeout(() => setStatus((s) => ({ ...s, success: false })), 3000);
    } catch (err) {
      setStatus({ loading: false, error: err.message || "Request failed", success: false });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          {/* LEFT: Contact Info Panel */}
          <aside className="contact-info" aria-label="Contact information">
            <div className="info-head">
              <div className="info-avatar" aria-hidden="true">U</div>
              <div>
                <h3 className="info-name">UDAYCHANDRA ANDRA</h3>
                <p className="info-role">Full Stack Java Developer</p>
              </div>
            </div>

            <div className="info-block">
              <h4>Get in touch</h4>
              <ul className="info-list">
                <li><FaEnvelope className="icon" /> <a href="mailto:udayandra003@gmail.com">udayandra003@gmail.com</a></li>
                <li><FaPhone className="icon" /> <a href="tel:+919381252086">+91 93812 52086</a></li>
                <li><FaMapMarkerAlt className="icon" /> <span>Bangalore, India</span></li>
              </ul>
            </div>

            <div className="info-block">
              <h4>Social</h4>
              <div className="social-row">
                <a href="mailto:udayandra003@gmail.com" aria-label="Email"><FaEnvelope /></a>
                <a href="https://www.linkedin.com/in/andra-udaychandra" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/uday-andra" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://instagram.com/_.mr._.cool._._" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            <div className="info-block">
              <a className="resume-btn" href={resumePdf} download>
                <FaFileDownload /> Download Resume
              </a>
            </div>

            <div className="info-note">
              <strong>Availability:</strong> Open to work · Remote / Hybrid
            </div>
          </aside>

          {/* RIGHT: Form Card */}
          <div
            className={`contact-card ${status.error ? "shake" : ""} ${status.success ? "succeeded" : ""}`}
            role="region"
            aria-live="polite"
          >
            <form className="contact-form" onSubmit={onSubmit} noValidate>

              <div className="input-group">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                  placeholder=" "
                  required
                />
                <label htmlFor="name">Name</label>
                <span className="input-underline" />
              </div>

              <div className="input-group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Email</label>
                <span className="input-underline" />
              </div>

              <div className="input-group textarea-group">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="6"
                  placeholder=" "
                  required
                />
                <label htmlFor="message">Message</label>
                <span className="input-underline" />
              </div>

              <div className="form-actions">
                <button
                  className="btn submit-btn"
                  type="submit"
                  disabled={status.loading}
                  aria-busy={status.loading}
                >
                  <span className="btn-label">
                    {status.loading ? "Sending..." : "Send Message"}
                  </span>

                  <svg
                    className="btn-arrow"
                    width="18"
                    height="12"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="status-area">
                  {status.error && <div className="error">{status.error}</div>}
                </div>
              </div>
            </form>

            {/* SUCCESS BADGE */}
            {status.success && (
              <div className="success-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 52 52"
                  className="check-svg"
                  width="52"
                  height="52"
                >
                  <circle
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                  />
                  <path
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27l6 6 18-18"
                  />
                </svg>
                <div className="success-text">Message sent — thank you!</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
