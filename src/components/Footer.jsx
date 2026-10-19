import React, { useState, useEffect } from 'react';
import { greeting, socialMediaLinks } from '../portfolio';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1.5px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3.5rem 0 2.5rem',
        marginTop: '3rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem'
          }}
        >
          {/* Logo */}
          <span className="script-logo brand-text" style={{ fontSize: '2.2rem' }}>
            {greeting.username}
          </span>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', maxWidth: '550px' }}>
            Computer Science & Engineering (Cyber Security) • Vellore Institute of Technology (VIT)
          </p>

          {/* Social Icons row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                fontSize: '1.3rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{
                fontSize: '1.3rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href={socialMediaLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              style={{
                fontSize: '1.3rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <i className="fa-solid fa-code"></i>
            </a>

            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{
                fontSize: '1.3rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e1306c')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              title="Instagram Profile"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

          {/* Copyright text */}
          <div
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '1.5rem',
              width: '100%',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <span>Designed & Built by Leela Krishna Kurra • © {new Date().getFullYear()} All Rights Reserved.</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button - Sharp Borders */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '42px',
            height: '42px',
            borderRadius: '0px',
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--card-shadow)',
            zIndex: 999,
            transition: 'all 0.2s ease',
            border: '1.5px solid var(--accent-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
