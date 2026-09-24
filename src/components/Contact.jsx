import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Download, Send, CheckCircle2, Copy, Check, Loader2, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SubmissionsModal from './SubmissionsModal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmissionsOpen, setIsSubmissionsOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_submissions') || '[]');
      setSubmissions(stored);
    } catch (err) {
      console.warn('Error reading submissions:', err);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClearSubmissions = () => {
    if (window.confirm('Are you sure you want to clear the local submissions history?')) {
      localStorage.removeItem('portfolio_submissions');
      setSubmissions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    const submissionEntry = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleString(),
    };

    // 1. Save to local submissions database
    try {
      const updated = [submissionEntry, ...submissions];
      localStorage.setItem('portfolio_submissions', JSON.stringify(updated));
      setSubmissions(updated);
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // 2. Submit to Web3Forms API (dispatches to email & Web3Forms dashboard)
    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        personalInfo.web3formsKey ||
        'YOUR_ACCESS_KEY_HERE';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          from_name: 'Amna Yousaf Portfolio',
        }),
      });

      const data = await response.json();
      console.log('Submission response:', data);
    } catch (err) {
      console.warn('Network submission notice:', err);
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

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, minWidth: '200px' }}
              >
                <Download size={16} /> Download Resume (PDF)
              </a>

              <button
                type="button"
                onClick={() => setIsSubmissionsOpen(true)}
                className="btn btn-outline"
                style={{ fontSize: '0.85rem' }}
                title="View local database submissions"
              >
                <Database size={15} /> Submissions ({submissions.length})
              </button>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div
                style={{
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <CheckCircle2 size={44} style={{ color: 'var(--success-accent)' }} />
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', maxWidth: '400px' }}>
                  Thank you for reaching out. Your response has been recorded in the database and delivered to Amna's email.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.75rem' }}
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

      <SubmissionsModal
        isOpen={isSubmissionsOpen}
        onClose={() => setIsSubmissionsOpen(false)}
        submissions={submissions}
        onClear={handleClearSubmissions}
      />
    </section>
  );
};

export default Contact;
