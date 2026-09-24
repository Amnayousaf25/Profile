import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            6 months of combined hands-on software development and engineering internship experience across web, mobile, and data analytics.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker"></div>
              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-company">{exp.company} • {exp.location}</div>
                  </div>
                  <div className="exp-period">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', marginBottom: '0.75rem' }}>
                  {exp.description}
                </p>

                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>

                <div className="exp-tech-tags">
                  {exp.techStack.map((tech, tIdx) => (
                    <span className="exp-tech-tag" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
