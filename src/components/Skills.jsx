import React from 'react';
import { Code2, Layers, Database, Brain, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2: <Code2 size={20} />,
  Layers: <Layers size={20} />,
  Database: <Database size={20} />,
  Brain: <Brain size={20} />,
  Wrench: <Wrench size={20} />,
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Core technical stack across software engineering, AI integrations, and full-stack development.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div className="skill-category-card" key={idx}>
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">{iconMap[cat.icon]}</div>
                <h3 className="skill-category-title">{cat.category}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`skill-tag ${skill.primary ? 'primary' : ''}`}
                  >
                    <span>{skill.name}</span>
                    <span className="skill-level">• {skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
