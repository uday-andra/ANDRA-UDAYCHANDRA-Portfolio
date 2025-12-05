'use client';
import React from 'react';

const educationData = [
  {
    period: '2021 – 2025',
    title: 'B.Tech in Information Technology',
    place: 'PACE Institute of Technology and Sciences, Ongole',
    description:
      'Focused on computer science and software development with a strong foundation in data structures and algorithms and a passion for problem-solving.',
  },
  {
    period: '2019 – 2021',
    title: 'Intermediate Education (MPC)',
    place: 'Vijetha Junior College, Kanigiri',
    description:
      'Studied mathematics and science with a strong focus on physics and mathematics.',
  },
  {
    period: '2018 – 2019',
    title: 'SSC Education',
    place: 'Z.P High School, Pedacherlopalli',
    description:
      'Completed schooling with strong interest in science and mathematics.',
  },
];

const experienceData = [
  {
    period: '2025 – Present',
    title: 'Java Full-Stack Developer intern',
    place: 'Tech Company',
    description:
      'Working on developing and maintaining secure web applications using Java, Spring Boot, and React. Collaborating with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    period: '2023 – 2024',
    title: 'Freelance Web Developer and Data Analytics Intern',
    place: 'Remote',
    description:
      'Worked on various freelance projects, including web development, data analytics, and visualization. Utilized technologies such as HTML, CSS, JavaScript for web development, Python for data analytics, and Tableau for visualization.',
  },
  {
    period: '2022 – 2023',
    title: 'System Administrator',
    place: 'NEET Academy, Ongole',
    description:
      'Managed and maintained the server infrastructure, installed and configured software, and provided technical support where I balanced my work responsibilities with my studies.',
  },
];

function TimelineColumn({ label, accentClass, items }) {
  return (
    <div className="exp-column">
      <h2 className={`exp-column-title ${accentClass}`}>{label}</h2>
      <div className="exp-timeline">
        {items.map((item, idx) => (
          <div className="exp-timeline-node" key={idx}>
            <span className="exp-timeline-dot" />
            <article className="exp-card">
              <div className="exp-card-header">
                <span className="exp-period">{item.period}</span>
                <h3 className="exp-role">{item.title}</h3>
                <p className="exp-place">{item.place}</p>
              </div>
              <p className="exp-description">{item.description}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-inner">
        <div className="exp-section-header">
          <h1 className="exp-main-title">Journey</h1>
          <p className="exp-main-subtitle">
            A quick timeline of my education and professional experience.
          </p>
        </div>

        <div className="exp-grid">
          <TimelineColumn
            label="Education"
            accentClass="exp-column-title--edu"
            items={educationData}
          />
          <TimelineColumn
            label="Experience"
            accentClass="exp-column-title--exp"
            items={experienceData}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
