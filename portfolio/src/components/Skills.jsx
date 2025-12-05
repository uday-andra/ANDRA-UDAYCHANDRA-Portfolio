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
    title: "Frontend",
    items: [
      { id: "html5", Icon: SiHtml5, name: "HTML5" },
      { id: "css3", Icon: SiCss3, name: "CSS3" },
      { id: "js", Icon: SiJavascript, name: "JavaScript" },
      { id: "tailwind", Icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "react", Icon: SiReact, name: "React" },
    ],
  },

  {
    key: "backend",
    title: "Backend",
    items: [
      { id: "java", Icon: FaJava, name: "Java" },
      { id: "springboot", Icon: SiSpringboot, name: "Spring Boot" },
      { id: "mysql", Icon: SiMysql, name: "MySQL" },
      { id: "mongo", Icon: SiMongodb, name: "MongoDB" },
      { id: "express", Icon: SiExpress, name: "Express" },
      { id: "node", Icon: SiNodedotjs, name: "Node.js" },
      { id: "docker", Icon: SiDocker, name: "Docker" },
    ],
  },

  {
    key: "tools",
    title: "Software Tools",
    items: [
      { id: "vscode", Icon: VscVscode, name: "VS Code" },
      { id: "intellij", Icon: SiIntellijidea, name: "IntelliJ IDEA" },
      { id: "eclipse", Icon: SiEclipseide, name: "Eclipse" },
      { id: "cursor", Icon: FaMagic, name: "Cursor.ai" },
      { id: "postman", Icon: SiPostman, name: "Postman" },
    ],
  },

  {
    key: "cyber",
    title: "Cybersecurity Tools",
    items: [
      { id: "kali", Icon: SiKalilinux, name: "Kali Linux" },
      { id: "nmap", Icon: TbRadar, name: "Nmap" },
      { id: "wireshark", Icon: SiWireshark, name: "Wireshark" },
      { id: "burp", Icon: SiBurpsuite, name: "Burp Suite" },
      { id: "zphisher", Icon: FaFish, name: "Zphisher" },
      { id: "owasp", Icon: SiOwasp, name: "OWASP ZAP" },
      { id: "meta", Icon: GiShield, name: "Metasploit" },
    ],
  },
];

const VERSION = [
  { id: "git", Icon: SiGit, name: "Git" },
  { id: "github", Icon: SiGithub, name: "GitHub" },
];

function TechChip({ Icon, name }) {
  return (
    <button className="tech-chip" type="button" aria-label={name}>
      <div className="tech-icon">
        <Icon />
      </div>
      <div className="tech-name">{name}</div>
    </button>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container skills-container">
        <div className="skills-card-outer">
          <header className="skills-card-head">
            <h2>Skills &amp; Tools</h2>
            <p>
              Grouped by role: frontend, backend, tools, cybersecurity, version
              control
            </p>
          </header>

          <div className="skills-card">
            {/* 2 rows x 2 columns of mini-cards */}
            <div className="grid-2x2">
              {GROUPS.map((g) => (
                <section key={g.key} className="group-card">
                  <h3 className="group-title">{g.title}</h3>
                  <div className="chips">
                    {g.items.map((it) => (
                      <TechChip key={it.id} Icon={it.Icon} name={it.name} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Version Control as its own card below */}
            <div className="version-row">
              <section className="group-card group-card-version">
                <h3 className="group-title">Version Control</h3>
                <div className="chips chips-row">
                  {VERSION.map((v) => (
                    <TechChip key={v.id} Icon={v.Icon} name={v.name} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
