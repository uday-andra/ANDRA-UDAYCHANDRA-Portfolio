import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import ContactForm from "./ContactForm";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AnimatedCursor from "./AnimatedCursor";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // "dark" | "light"

  // Apply theme as class on <body> or root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Scroll reveal for sections
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-section");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app app-${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <div className="reveal-section variant-hero">
          <Hero />
        </div>

        <div className="reveal-section variant-left">
          <About />
        </div>

        <div className="reveal-section variant-right">
          <Experience />
        </div>

        <div className="reveal-section variant-up">
          <Skills />
        </div>

        <div className="reveal-section variant-left">
          <Projects />
        </div>

        <div className="reveal-section variant-right">
          <Certifications />
        </div>

        <div className="reveal-section variant-up">
          <ContactForm />
        </div>
      </main>

      <Footer />
      <AnimatedCursor className="animated-cursor" />
    </div>
  );
}
