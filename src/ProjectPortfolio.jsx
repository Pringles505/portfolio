import React, { useEffect, useState } from "react";
import "./ProjectPortfolio.scss";

// Project data with direct image reference
const PROJECTS_DATA = [
  {
    id: "echo-chat",
    title: "Echo Chat",
    apiUrl: "https://api.github.com/repos/Pringles505/Echo-Chat",
    image: "/echo-logo.png", 
    fallbackDescription: "A real-time chat application"
  },
  {
    id: "image-keyword-generator",
    title: "Image Keyword Generator",
    apiUrl: "https://api.github.com/repos/Pringles505/ImageKeywordGenerator",
    fallbackDescription: "Generates keywords from images"
  }
];

function ProjectPortfolio({ visible }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectsWithData = await Promise.all(
          PROJECTS_DATA.map(async (project) => {
            try {
              const response = await fetch(project.apiUrl, {
                headers: {
                  Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                  Accept: "application/vnd.github.mercy-preview+json",
                },
              });

              if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
              }

              const data = await response.json();

              return {
                id: project.id,
                title: project.title,
                description: data.description || project.fallbackDescription,
                tech: data.topics || [],
                url: data.html_url || "#",
                image: project.image || null
              };
            } catch (err) {
              console.error(`Failed to fetch ${project.title}:`, err);
              return {
                ...project,
                description: project.fallbackDescription,
                tech: [],
                url: "#",
                image: project.image || null
              };
            }
          })
        );

        setProjects(projectsWithData);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Showing cached data.");
        setProjects(PROJECTS_DATA.map(p => ({
          id: p.id,
          title: p.title,
          description: p.fallbackDescription,
          tech: [],
          url: "#",
          image: p.image || null
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading projects...</div>;
  }

  return (
    <section className={`portfolio-section ${visible ? "visible" : ""}`}>
      <div className="portfolio-header">
        <h2>Featured Projects</h2>
        <p>A selection of my GitHub projects</p>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            {/* Project Image - Only shows if image exists */}
            {project.image && (
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Failed to load image: ${project.image}`);
                  }}
                />
              </div>
            )}


            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.tech.length > 0 && (
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPortfolio;