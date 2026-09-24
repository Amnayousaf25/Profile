import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          © {new Date().getFullYear()} Amna Yousaf. All rights reserved. • Software Engineer & Applied AI
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              href="#contact"
              onClick={scrollToContact}
              className="social-icon-btn"
              style={{ width: '36px', height: '36px' }}
              aria-label="Send me a message"
              title="Send me a message"
            >
              <Mail size={16} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="social-icon-btn"
            style={{ width: '36px', height: '36px', color: 'var(--primary-accent)' }}
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
