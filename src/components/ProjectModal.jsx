import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-project-title"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="project-badge">{project.type}</span>
          <h3 className="section-title" id="modal-project-title" style={{ marginTop: '0.5rem' }}>
            {project.title}
          </h3>
          <div className="project-tech-stack" style={{ marginTop: '0.75rem' }}>
            {project.technologies.map((tech, idx) => (
              <span className="tech-pill" key={idx}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Problem Statement</h4>
          <p className="modal-text">{project.problem}</p>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Solution & Approach</h4>
          <p className="modal-text">{project.solution}</p>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Architecture & Engineering</h4>
          <ul className="arch-list">
            {project.architecture.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">My Technical Contributions</h4>
          <ul className="arch-list">
            {project.contributions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title">Engineering Outcome</h4>
          <p className="modal-text">{project.outcomes}</p>
        </div>

        <div className="project-actions" style={{ marginTop: '2rem' }}>
          <div className="project-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Github size={16} /> GitHub Repository
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
