import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "Personal portfolio built with React + Vite, responsive layout, contact form connected to Node + MySQL.",
    image: "/src/assets/project1.jpg",
    tools: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS", "MySQL"],
    link: "#",
  },
  {
    id: 2,
    title: "VESTRA FASHIONS-Online cloth store",
    desc: "An online clothing store with user authentication, product catalog, shopping cart, and order management using Java Spring Boot and MySQL.",
    image: "/src/assets/project2.jpg",
    tools: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS", "Java", "Spring Boot", "MySQL"],
    link: "https://github.com/uday-andra/VESTRA-E-Commerce-Store",
  },
  {
    id: 3,
    title: "BANK Management System",
    desc: "A simple banking application with authentication, account management, and transaction history using Spring Boot + MySQL.",
    image: "/src/assets/project3.jpg",
    tools: ["HTML5", "CSS3", "JSP", "Java", "Spring Boot", "MySQL"],
    link: "https://github.com/uday-andra/BankApp",
  },
  {
    id: 4,
    title: "QR Code Generator",
    desc: "Generate QR codes instantly with download functionality.",
    image: "/src/assets/project4.jpg",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/uday-andra/QR-Code-Generator",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    desc: "Interactive charts, filters, export functionality, and reusable components.",
    image: "/src/assets/project5.jpg",
    tools: ["React", "Recharts", "Vite"],
    link: "#",
  },
  {
    id: 6,
    title: "Security Scanner UI",
    desc: "UX demo showing scanning pipeline results and CVE highlights.",
    image: "/src/assets/project6.jpg",
    tools: ["React", "Bootstrap", "Node"],
    link: "#",
  },
];

function ToolBadge({ name }) {
  return <span className="proj-tool">{name}</span>;
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-card">
          <div className="projects-grid" role="list">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="project-tile tile-vertical"
                role="listitem"
                tabIndex={0}
              >
                {/* IMAGE AT TOP */}
                <div className="proj-media-vertical">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    onError={(e) => {
                      e.currentTarget.style.opacity = 0.2;
                    }}
                  />
                </div>

                {/* CONTENT BELOW */}
                <div className="proj-body-vertical">
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>

                  {/* TOOLS */}
                  <div className="proj-tools">
                    {p.tools.map((t) => (
                      <ToolBadge key={t} name={t} />
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="proj-actions">
                    <a
                      href={p.link}
                      className="btn proj-btn"
                      aria-label={`View ${p.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
