import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, FileCode } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'Mobile', 'Backend', 'AI/ML'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'AI/ML') return project.isAiMl;
    return project.category === filter;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Curated selection of full-stack, mobile, and backend projects built with modern frameworks and practical engineering standards.
          </p>
        </div>

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div>
                <div className="project-card-header">
                  <span className="project-badge">{project.type}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-pill" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setSelectedProject(project)}
                >
                  <FileCode size={14} /> Case Study
                </button>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    style={{ width: '34px', height: '34px' }}
                    aria-label="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      style={{ width: '34px', height: '34px' }}
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
