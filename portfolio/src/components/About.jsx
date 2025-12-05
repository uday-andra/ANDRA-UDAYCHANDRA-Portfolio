import React, { useRef, useEffect } from "react";
import aboutImg from "../assets/selfie_Image.jpg";

export default function About() {
  const hexRef = useRef(null);
  const cardRef = useRef(null);

  // Hex image micro-tilt (scoped)
  useEffect(() => {
    const hex = hexRef.current;
    if (!hex) return;

    const handleMove = (e) => {
      const rect = hex.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1;
      const py = (y / rect.height) * 2 - 1;
      const rotateY = px * 8;
      const rotateX = -py * 8;
      hex.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const reset = () => {
      hex.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    hex.addEventListener("mousemove", handleMove);
    hex.addEventListener("mouseleave", reset);
    hex.addEventListener("touchmove", handleMove);
    hex.addEventListener("touchend", reset);
    return () => {
      hex.removeEventListener("mousemove", handleMove);
      hex.removeEventListener("mouseleave", reset);
      hex.removeEventListener("touchmove", handleMove);
      hex.removeEventListener("touchend", reset);
    };
  }, []);

  // Card tilt effect (small) and reveal on scroll
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // reveal on scroll
    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              card.classList.add("inview");
              io.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      io.observe(card);
    } else {
      card.classList.add("inview");
    }

    // small tilt while hovering the card
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1;
      const py = (y / rect.height) * 2 - 1;
      const rotateY = px * 3;
      const rotateX = -py * 3;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleLeave = () => {
      card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    card.addEventListener("touchmove", handleMove);
    card.addEventListener("touchend", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
      card.removeEventListener("touchmove", handleMove);
      card.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container about-card-wrapper">
        <div className="about-card" ref={cardRef}>
          <div className="about-left">
            <div className="hex-wrap" ref={hexRef} tabIndex={0} aria-hidden="false">
              <div className="hex-border" />
              <div className="hex-image">
                <img src={aboutImg} alt="Uday" />
              </div>
              <svg className="hex-glow" viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <radialGradient id="g1" cx="50%" cy="40%">
                    <stop offset="0%" stopColor="#3af0ff" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#1e90ff" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <polygon
                  points="100,6 183,55 183,145 100,194 17,145 17,55"
                  fill="url(#g1)"
                />
              </svg>
            </div>
          </div>

          <div className="about-right">
            <div className="eyebrow">
              <span>About</span>
              <span className="eyebrow-accent">Me</span>
            </div>

            <h2 className="about-title">UDAYCHANDRA ANDRA</h2>

            <p className="about-text">
              I’m Andra Udaychandra, a Full Stack Java Developer with a B.Tech in IT (2025). <br />
              I build clean, efficient, and user-friendly web applications using Java, Spring Boot, React, and modern frontend technologies.
              My strengths include crafting responsive UIs, writing maintainable backend logic, and delivering smooth, reliable performance.
              I’m currently open to full-time or internship roles in full stack or backend Java development.
            </p>

            <p className="about-text small">
              I enjoy turning ideas into clean, maintainable code and partnering with teams to ship polished, production-ready features.
            </p>

            <div className="about-cta">
              <a className="cta-btn" href="#projects">
                View Projects
              </a>
              <a
                className="cta-ghost"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
