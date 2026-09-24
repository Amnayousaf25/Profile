import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem('portfolio_theme') || 'light';
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('portfolio_theme', theme);
      }
    } catch {
      // fallback
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Check current section in viewport
      const sections = ['contact', 'education', 'projects', 'experience', 'skills', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="navbar">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container nav-container">
        <a href="#" className="brand-logo" onClick={handleNavClick('hero')}>
          <span className="brand-badge"></span>
          Amna Yousaf
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={handleNavClick(item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ marginLeft: '0.25rem' }}
            >
              <Download size={14} /> Resume
            </a>
          </div>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
