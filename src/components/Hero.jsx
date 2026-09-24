import React, { useState } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (id === 'contact') {
        setTimeout(() => {
          const input = document.getElementById('name');
          if (input) input.focus();
        }, 600);
      }
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Amna Yousaf</span>
            </h1>

            <p className="hero-subtitle">
              Computer Science Student | Software Developer | AI/ML Enthusiast
            </p>

            <p className="hero-description">
              I build practical full-stack web applications, cross-platform mobile solutions, and intelligent AI integrations. Leveraging a strong foundation in Data Structures, OS concepts, and Relational Databases, I turn business and user requirements into clean, production-ready software.
            </p>

            <div className="hero-ctas">
              <a
                href="#projects"
                onClick={scrollToSection('projects')}
                className="btn btn-primary"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#contact"
                onClick={scrollToSection('contact')}
                className="social-icon-btn"
                aria-label="Send me a message"
                title="Send me a message"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-photo-container">
              {!imageError ? (
                <img
                  src={personalInfo.photo}
                  alt="Amna Yousaf - Computer Science Student & Software Developer"
                  className="hero-photo"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-photo-fallback">
                  AY
                  <span>Amna Yousaf</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
