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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '0px',
              backgroundColor: '#ffffff',
              border: '1.5px solid var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: 'var(--card-shadow)'
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
                color: 'var(--text-primary)'
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href={greeting.resumeLink}
            download="Kurra_Leela_Krishna_Resume.pdf"
            className="btn-primary"
            style={{
              justifyContent: 'center',
              padding: '0.75rem 1.25rem',
              fontSize: '0.95rem',
              borderRadius: '0px'
            }}
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls { display: none !important; }
        }
      `}</style>
    </header>
  );
}
