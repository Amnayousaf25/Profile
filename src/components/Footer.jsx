import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const handleEmailClick = (e) => {
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio%20Inquiry`;
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          © {new Date().getFullYear()} Amna Yousaf. All rights reserved. • Built with React & TypeScript
        </div>

        <div className="social-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry`}
            onClick={handleEmailClick}
            className="social-icon-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="Send me a message"
            title="Send me a message"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
