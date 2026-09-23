import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Download, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> Get in Touch
          </div>
          <h2 className="section-title">Let's Build Something Meaningful</h2>
          <p className="section-subtitle">
            Open to software engineering roles, AI/ML opportunities, internships, technical collaborations, and project inquiries.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">
                <Mail size={20} />
              </div>
              <div>
                <div className="form-label" style={{ color: 'var(--text-dim)' }}>Direct Email</div>
                <a href={`mailto:${personalInfo.email}`} className="exp-company" style={{ fontSize: '1.05rem' }}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="form-label" style={{ color: 'var(--text-dim)' }}>Location</div>
                <div style={{ fontWeight: 600 }}>{personalInfo.location}</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Github size={20} />
              </div>
              <div>
                <div className="form-label" style={{ color: 'var(--text-dim)' }}>GitHub & Open Source</div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-company"
                >
                  github.com/Amnayousaf25
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Linkedin size={20} />
              </div>
              <div>
                <div className="form-label" style={{ color: 'var(--text-dim)' }}>LinkedIn Profile</div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-company"
                >
                  linkedin.com/in/amna-yousaf
                </a>
              </div>
            </div>

            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <Download size={18} /> Download Official Resume (PDF)
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'var(--success-accent)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <CheckCircle2 size={40} />
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Recruiter, Manager, or Client"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message Details</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Hello Amna, I came across your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message <Send size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
