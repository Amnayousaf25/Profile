import React from 'react';
import { GraduationCap, Award, BookOpen, Cpu, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { formalEducation, technicalEducation } from '../data/portfolioData';

const EducationCertifications = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Formal university degree in Computer Science combined with specialized technical education initiatives and industry certifications.
          </p>
        </div>

        {/* Section 1: Formal Education */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <GraduationCap size={20} style={{ color: 'var(--primary-accent)' }} />
            <h3 className="section-title" style={{ fontSize: '1.4rem' }}>Formal University Education</h3>
          </div>

          <div className="experience-card" style={{ borderLeft: '4px solid var(--primary-accent)' }}>
            <div className="exp-header">
              <div>
                <h4 className="exp-title" style={{ fontSize: '1.3rem' }}>{formalEducation.degree}</h4>
                <div className="exp-company">{formalEducation.institution} • {formalEducation.location}</div>
              </div>
              <span className="project-badge">{formalEducation.status}</span>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <h5 className="modal-section-title" style={{ fontSize: '0.95rem', marginBottom: '0.6rem' }}>
                Core Computer Science Coursework
              </h5>
              <div className="exp-tech-tags">
                {formalEducation.coursework.map((course, idx) => (
                  <span className="skill-tag primary" key={idx}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Education & Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <Award size={20} style={{ color: 'var(--secondary-accent)' }} />
            <h3 className="section-title" style={{ fontSize: '1.4rem' }}>Technical Education & Industry Certifications</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {technicalEducation.map((item, idx) => (
              <div className="experience-card" key={idx} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="exp-header" style={{ marginBottom: '0.75rem' }}>
                    <div>
                      <span className="focus-badge" style={{ marginBottom: '0.4rem' }}>{item.program}</span>
                      <h4 className="exp-title" style={{ fontSize: '1.15rem', marginTop: '0.2rem' }}>{item.title}</h4>
                      <div className="exp-company" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.institution}</div>
                    </div>
                  </div>

                  <p className="modal-text" style={{ fontSize: '0.925rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>

                  <div style={{ fontSize: '0.85rem', color: 'var(--primary-accent)', fontWeight: '600', marginBottom: '1rem' }}>
                    Focus: {item.focus}
                  </div>
                </div>

                <div className="exp-tech-tags" style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                  {item.technologies.map((tech, tIdx) => (
                    <span className="exp-tech-tag" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
