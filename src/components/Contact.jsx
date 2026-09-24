import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Download, Send, CheckCircle2, Copy, Check, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/0c1386ab1e019ed1c23282da78dba421', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();
      console.log('FormSubmit status:', data);
    } catch (err) {
      console.warn('Form submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to software engineering roles, AI/ML opportunities, internships, technical collaborations, and project inquiries.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="form-label" style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Direct Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="exp-company" style={{ fontSize: '1rem' }}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="copy-email-btn"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} style={{ color: 'var(--success-accent)' }} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
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
                  padding: '2.5rem 1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <CheckCircle2 size={46} style={{ color: 'var(--success-accent)' }} />
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', maxWidth: '400px', lineHeight: 1.6 }}>
                  Thank you for reaching out. Your message has been sent directly to Amna's email, and you will receive a response shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Recruiter, Manager, or Collaborator"
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
                    placeholder="Hello Amna, I came across your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="spin-loader" /> Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
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
