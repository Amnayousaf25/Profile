import React from 'react';
import { User, Award, BookOpen, Code2 } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';

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
