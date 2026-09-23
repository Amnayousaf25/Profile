import React from 'react';
import { Globe, Smartphone, Sparkles, Database, Check } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Globe: <Globe size={24} />,
  Smartphone: <Smartphone size={24} />,
  Sparkles: <Sparkles size={24} />,
  Database: <Database size={24} />,
};

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Globe size={14} /> Capabilities
          </div>
          <h2 className="section-title">What I Can Build</h2>
          <p className="section-subtitle">
            Core software engineering services and practical technical solutions supported by my experience and project work.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">{iconMap[service.icon]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="deliverables-list">
                {service.deliverables.map((item, dIdx) => (
                  <li key={dIdx}>
                    <Check size={14} style={{ color: 'var(--primary-accent)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
