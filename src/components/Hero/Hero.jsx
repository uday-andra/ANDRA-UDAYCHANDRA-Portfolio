import React, { useRef, useEffect } from "react";
import avatarSrc from "../../assets/Selfie_Image.jpg";
import resumePdf from "../../assets/ANDRA-UDAYCHANDRA_Resume.pdf";
export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Tilt effect limited to the card element only
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      const px = (x / rect.width) * 2 - 1; // -1 .. 1
      const py = (y / rect.height) * 2 - 1; // -1 .. 1
      const rotateY = px * 6; // left-right tilt
      const rotateX = -py * 6; // top-bottom tilt
      el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
      el.style.setProperty("--glow-x", `${px * 60}px`);
      el.style.setProperty("--glow-y", `${py * 40}px`);
    };

    const handleLeave = () => {
      el.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
      el.style.setProperty("--glow-x", `0px`);
      el.style.setProperty("--glow-y", `0px`);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero-section bg-hero">
      <div className="hero-inner container">
        <div ref={cardRef} className="hero-card hero-card-full">
          {/* left: avatar + text */}
          <div className="card-top-horizontal">
            <div className="avatar-wrap">
              {avatarSrc ? (
                <img src={avatarSrc} alt="Uday" className="avatar-img" />
              ) : (
                <div className="avatar-fallback" aria-hidden="true" />
              )}
            </div>

            <div className="card-info">
              <h1 className="card-name">Hi, I'm UDAYCHANDRA</h1>
              <p className="card-role">Full Stack Java Developer</p>
              <p className="card-bio">
                Passionate about crafting efficient and scalable web applications with a focus on seamless user experiences.

              </p>

              <div className="chips">
                <span className="chip">HTML5</span>
                <span className="chip">CSS3</span>
                <span className="chip">JavaScript</span>
                <span className="chip">React</span>
                <span className="chip">Node.js</span>
                <span className="chip">Java</span>
                <span className="chip">Spring Boot</span>
                <span className="chip">MySQL</span>
                <span className="chip">Git | GitHub</span>
              </div>
            </div>
          </div>

          <div className="card-divider" />

          {/* bottom: stats + actions */}
          <div className="card-bottom-horizontal">
            <div className="stats">
              <div className="stat">
                <div className="stat-number">06</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">02</div>
                <div className="stat-label">Certs</div>
              </div>
              <div className="stat">
                <div className="stat-number">1y+</div>
                <div className="stat-label">Experience</div>
              </div>
            </div>

            <div className="card-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
              <a href={resumePdf} className="btn btn-ghost" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>

          <div className="card-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
