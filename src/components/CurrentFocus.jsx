import React from 'react';
import { Flame } from 'lucide-react';
import { currentFocusData } from '../data/portfolioData';

const CurrentFocus = () => {
  return (
    <section className="section" id="focus" style={{ borderBottom: 'none', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Flame size={14} /> Active Trajectory
          </div>
          <h2 className="section-title">Current Technical Focus</h2>
        </div>

        <div className="focus-grid">
          {currentFocusData.map((item, idx) => (
            <div className="focus-card" key={idx}>
              <div>
                <span className="focus-badge">{item.badge}</span>
                <h3 className="service-title" style={{ fontSize: '1.15rem' }}>
                  {item.title}
                </h3>
                <p className="service-desc" style={{ marginBottom: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
