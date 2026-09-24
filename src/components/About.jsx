import React from 'react';
import { Briefcase, GitBranch, GraduationCap, Calendar } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';

const statIcons = [
  <Briefcase size={18} key="exp" style={{ color: 'var(--primary-accent)', marginBottom: '0.35rem' }} />,
  <GitBranch size={18} key="repo" style={{ color: 'var(--secondary-accent)', marginBottom: '0.35rem' }} />,
  <GraduationCap size={18} key="degree" style={{ color: 'var(--primary-accent)', marginBottom: '0.35rem' }} />,
  <Calendar size={18} key="grad" style={{ color: 'var(--secondary-accent)', marginBottom: '0.35rem' }} />
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">{aboutContent.headline}</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {aboutContent.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="about-stats-grid">
            {aboutContent.stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                {statIcons[idx]}
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
