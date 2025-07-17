// src/components/ProjectPortfolio.jsx
import React from "react";
import "./ProjectPortfolio.scss";

const projects = [
  {
    title: "Echo",
    description: "End-to-end encrypted chat app with Rust + WebAssembly + React.",
    tech: ["Rust", "React", "WASM", "X3DH", "Double Ratchet"],
  },
  {
    title: "Image Keyword Generator",
    description: "AI-powered tool to auto-tag book cover images using OpenAI.",
    tech: ["Node.js", "React", "OpenAI", "Google Drive API"],
  },
];

function ProjectPortfolio({ visible }) {
  return (
    <section
      id="main-content"
      className={`portfolio-section ${visible ? "visible" : ""}`}
    >
      <div className="portfolio-header">
        <h2>Featured Projects</h2>
        <p>A selection of professional and personal work.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPortfolio;
