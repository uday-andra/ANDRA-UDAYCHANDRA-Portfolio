import React from "react";

import { FaJava, FaMagic, FaFish } from "react-icons/fa";
import { TbRadar } from "react-icons/tb";
import { GiShield } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";

import {
  SiSpringboot,
  SiKalilinux,
  SiWireshark,
  SiBurpsuite,
  SiOwasp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDocker,
  SiIntellijidea,
  SiEclipseide,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";


const GROUPS = [
  {
    key: "frontend",
    title: "Frontend Development",
    description: "Modern interfaces & responsive web experiences",
    className: "frontend-group",
    items: [
      {
        id: "html5",
        Icon: SiHtml5,
        name: "HTML5",
        color: "#ff6b00",
      },
      {
        id: "css3",
        Icon: SiCss3,
        name: "CSS3",
        color: "#2563eb",
      },
      {
        id: "javascript",
        Icon: SiJavascript,
        name: "JavaScript",
        color: "#eab308",
      },
      {
        id: "tailwind",
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        color: "#06b6d4",
      },
      {
        id: "react",
        Icon: SiReact,
        name: "React",
        color: "#06b6d4",
      },
    ],
  },

  {
    key: "backend",
    title: "Backend Development",
    description: "APIs, server-side applications & databases",
    className: "backend-group",
    items: [
      {
        id: "java",
        Icon: FaJava,
        name: "Java",
        color: "#e11d48",
      },
      {
        id: "springboot",
        Icon: SiSpringboot,
        name: "Spring Boot",
        color: "#16a34a",
      },
      {
        id: "mysql",
        Icon: SiMysql,
        name: "MySQL",
        color: "#00758f",
      },
      {
        id: "mongodb",
        Icon: SiMongodb,
        name: "MongoDB",
        color: "#16a34a",
      },
      {
        id: "express",
        Icon: SiExpress,
        name: "Express",
        color: "#64748b",
      },
      {
        id: "node",
        Icon: SiNodedotjs,
        name: "Node.js",
        color: "#22c55e",
      },
      {
        id: "docker",
        Icon: SiDocker,
        name: "Docker",
        color: "#2496ed",
      },
    ],
  },

  {
    key: "tools",
    title: "Software Tools",
    description: "Development, API testing & productivity tools",
    className: "tools-group",
    items: [
      {
        id: "vscode",
        Icon: VscVscode,
        name: "VS Code",
        color: "#007acc",
      },
      {
        id: "intellij",
        Icon: SiIntellijidea,
        name: "IntelliJ IDEA",
        color: "#fe315d",
      },
      {
        id: "eclipse",
        Icon: SiEclipseide,
        name: "Eclipse",
        color: "#9c4dcc",
      },
      {
        id: "cursor",
        Icon: FaMagic,
        name: "Cursor AI",
        color: "#8b5cf6",
      },
      {
        id: "postman",
        Icon: SiPostman,
        name: "Postman",
        color: "#ff6c37",
      },
    ],
  },

  {
    key: "cybersecurity",
    title: "Cybersecurity Tools",
    description: "Security testing, analysis & vulnerability assessment",
    className: "cyber-group",
    items: [
      {
        id: "kali",
        Icon: SiKalilinux,
        name: "Kali Linux",
        color: "#557c94",
      },
      {
        id: "nmap",
        Icon: TbRadar,
        name: "Nmap",
        color: "#2563eb",
      },
      {
        id: "wireshark",
        Icon: SiWireshark,
        name: "Wireshark",
        color: "#1679a7",
      },
      {
        id: "burp",
        Icon: SiBurpsuite,
        name: "Burp Suite",
        color: "#f97316",
      },
      {
        id: "zphisher",
        Icon: FaFish,
        name: "Zphisher",
        color: "#ec4899",
      },
      {
        id: "owasp",
        Icon: SiOwasp,
        name: "OWASP ZAP",
        color: "#00549e",
      },
      {
        id: "metasploit",
        Icon: GiShield,
        name: "Metasploit",
        color: "#ef4444",
      },
    ],
  },
];

const VERSION_CONTROL = [
  {
    id: "git",
    Icon: SiGit,
    name: "Git",
    color: "#f05032",
  },
  {
    id: "github",
    Icon: SiGithub,
    name: "GitHub",
    color: "#111827",
  },
];


function TechItem({ Icon, name, color }) {
  return (
    <div
      className="tech-item"
      style={{ "--skill-color": color }}
    >
      <span className="tech-icon" aria-hidden="true">
        <Icon />
      </span>

      <span className="tech-name">{name}</span>

      <span
        className="tech-item-glow"
        aria-hidden="true"
      />
    </div>
  );
}


function SkillGroup({
  group,
  index,
}) {
  return (
    <section
      className={`skill-group ${group.className}`}
      aria-labelledby={`skill-${group.key}`}
      style={{ "--group-index": index }}
    >
      <div className="skill-group-heading">
        <div className="skill-group-title">
          <span className="skill-group-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 id={`skill-${group.key}`}>
              {group.title}
            </h3>

            <p>{group.description}</p>
          </div>
        </div>

        <span
          className="skill-group-line"
          aria-hidden="true"
        />
      </div>

      <div className="tech-list">
        {group.items.map((item) => (
          <TechItem
            key={item.id}
            Icon={item.Icon}
            name={item.name}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}


export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="skills-background" aria-hidden="true">
        <div className="skills-grid-bg" />

        <span className="skills-orb skills-orb-one" />
        <span className="skills-orb skills-orb-two" />
        <span className="skills-orb skills-orb-three" />

        <span className="skills-particle particle-1" />
        <span className="skills-particle particle-2" />
        <span className="skills-particle particle-3" />
        <span className="skills-particle particle-4" />
      </div>

      <div className="container">
            {/* HEADER */}
        <header className="skills-heading">
          <div className="skills-heading-top">
            <span className="skills-kicker">
              TECHNICAL EXPERTISE
            </span>

            <span className="skills-heading-line" />
          </div>

          <h2 id="skills-title">
            Skills <span>&amp;</span> Tools
          </h2>

          <p>
            A practical technology stack covering frontend,
            backend, databases, development tools,
            cybersecurity and modern application
            development.
          </p>

          <div className="skills-summary">
            <span>
              <strong>05</strong>
              Frontend
            </span>

            <span>
              <strong>07</strong>
              Backend
            </span>

            <span>
              <strong>05</strong>
              Dev Tools
            </span>

            <span>
              <strong>07</strong>
              Security
            </span>

            <span>
              <strong>02</strong>
              Git
            </span>
          </div>
        </header>

        <div className="skills-groups">
          {GROUPS.map((group, index) => (
            <SkillGroup
              key={group.key}
              group={group}
              index={index}
            />
          ))}

              {/* VERSION CONTROL */}
          <section
            className="skill-group version-control-group"
            aria-labelledby="skill-version-control"
          >
            <div className="skill-group-heading">
              <div className="skill-group-title">
                <span className="skill-group-number">
                  05
                </span>

                <div>
                  <h3 id="skill-version-control">
                    Version Control
                  </h3>

                  <p>
                    Source control &amp; collaborative
                    development
                  </p>
                </div>
              </div>

              <span
                className="skill-group-line"
                aria-hidden="true"
              />
            </div>

            <div className="tech-list">
              {VERSION_CONTROL.map((item) => (
                <TechItem
                  key={item.id}
                  Icon={item.Icon}
                  name={item.name}
                  color={item.color}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}