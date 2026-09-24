import React from 'react';
import { X, Trash2, Mail, Calendar, User, MessageSquare } from 'lucide-react';

const SubmissionsModal = ({ isOpen, onClose, submissions, onClear }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '680px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close submissions modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header" style={{ marginBottom: '1.5rem' }}>
          <h3 className="modal-title" style={{ fontSize: '1.4rem' }}>
            Form Submissions Database
          </h3>
          <p className="modal-type" style={{ marginTop: '0.25rem' }}>
            Local database archive of all inquiries submitted through your portfolio contact form.
          </p>
        </div>

        {submissions.length === 0 ? (
          <div
            style={{
              padding: '2.5rem 1rem',
              textAlign: 'center',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <MessageSquare size={36} style={{ color: 'var(--text-dim)' }} />
            <p>No messages in your database yet.</p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              When someone submits the contact form, their message will appear here and in your email.
            </span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '55vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
            {submissions.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.65rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      <User size={15} style={{ color: 'var(--primary-accent)' }} />
                      {item.name}
                    </div>
                    <a
                      href={`mailto:${item.email}?subject=Re:%20Portfolio%20Inquiry`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.875rem',
                        color: 'var(--primary-accent)',
                        marginTop: '0.2rem',
                      }}
                    >
                      <Mail size={13} /> {item.email}
                    </a>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.775rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    <Calendar size={13} />
                    {item.formattedDate || item.timestamp}
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {item.message}
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <span style={{ fontSize: '0.825rem', color: 'var(--text-dim)' }}>
            Total Submissions: {submissions.length}
          </span>
          {submissions.length > 0 && (
            <button
              onClick={onClear}
              className="btn btn-outline btn-sm"
              style={{ color: '#EF4444', borderColor: 'rgba(239, 68, 68, 0.4)' }}
            >
              <Trash2 size={14} /> Clear Database
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionsModal;
