import React from 'react';
import { Brain, Sparkles, BookOpen, Cpu, CheckCircle } from 'lucide-react';
import { aiMlSectionContent } from '../data/portfolioData';

const AiMlSection = () => {
  return (
    <section className="section" id="aiml">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Brain size={14} /> Emerging Discipline
          </div>
          <h2 className="section-title">{aiMlSectionContent.title}</h2>
          <p className="section-subtitle">{aiMlSectionContent.subtitle}</p>
        </div>

        <div className="aiml-container">
          <div className="aiml-grid">
            <div className="aiml-box">
              <h3 className="aiml-box-title">
                <Sparkles size={20} style={{ color: 'var(--primary-accent)' }} />
                Built & Applied AI
              </h3>
              {aiMlSectionContent.builtItems.map((item, idx) => (
                <div className="aiml-item" key={idx}>
                  <div className="aiml-item-title">{item.title}</div>
                  <div className="aiml-item-desc">{item.description}</div>
                  <span className="tech-pill">{item.tech}</span>
                </div>
              ))}
            </div>

            <div className="aiml-box">
              <h3 className="aiml-box-title">
                <BookOpen size={20} style={{ color: 'var(--secondary-accent)' }} />
                Currently Learning & Exploring
              </h3>
              {aiMlSectionContent.exploringItems.map((item, idx) => (
                <div className="aiml-item" key={idx}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div className="aiml-item-title">{item.title}</div>
                    <span className="focus-badge">{item.status}</span>
                  </div>
                  <div className="aiml-item-desc" style={{ marginTop: '0.25rem' }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMlSection;
