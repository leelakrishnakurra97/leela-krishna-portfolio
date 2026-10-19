import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { greeting } from '../portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'IEEE ITS Club', href: '#clubs' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.2s ease',
          backgroundColor: isScrolled ? 'var(--navbar-bg)' : '#ffffff',
          borderBottom: '1.5px solid var(--border-color)',
          padding: isScrolled ? '0.75rem 0' : '1.15rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}

            {/* Resume link - Sharp Single Color */}
            <a
              href={greeting.resumeLink}
              download="Kurra_Leela_Krishna_Resume.pdf"
              className="btn-primary"
              style={{
                padding: '0.5rem 1.15rem',
                fontSize: '0.88rem',
                borderRadius: '0px'
              }}
            >
              <FileText size={15} />
              Resume
            </a>
          </nav>

          {/* Mobile controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-controls">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '0px',
                backgroundColor: mobileMenuOpen ? 'var(--badge-bg)' : '#ffffff',
                border: '1.5px solid var(--border-color)',
                color: mobileMenuOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
                transition: 'all 0.15s ease'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              borderBottom: '1.5px solid var(--border-color)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  padding: '0.65rem 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                {link.name}
              </a>
            ))}

            <div style={{ paddingTop: '0.75rem' }}>
              <a
                href={greeting.resumeLink}
                download="Kurra_Leela_Krishna_Resume.pdf"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.95rem',
                  borderRadius: '0px'
                }}
              >
                <FileText size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}

        <style>{`
          @media (min-width: 992px) {
            .desktop-nav { display: flex !important; }
            .mobile-controls { display: none !important; }
          }
        `}</style>
      </header>

      {/* Dimmed backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(2px)'
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
