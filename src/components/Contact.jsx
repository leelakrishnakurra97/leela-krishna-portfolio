import React from 'react';
import { contactInfo, socialMediaLinks } from '../portfolio';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      url: socialMediaLinks.github,
      bgColor: '#333333',
      show: Boolean(socialMediaLinks.github)
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      url: socialMediaLinks.linkedin,
      bgColor: '#0077b5',
      show: Boolean(socialMediaLinks.linkedin)
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: socialMediaLinks.instagram,
      bgColor: '#e1306c',
      show: Boolean(socialMediaLinks.instagram)
    },
    {
      name: 'LeetCode',
      icon: 'fa-solid fa-code',
      url: socialMediaLinks.leetcode,
      bgColor: '#f89f1b',
      show: Boolean(socialMediaLinks.leetcode)
    }
  ];

  return (
    <section id="contact" className="section-wrapper" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          {/* Heading, Subtitle, Direct Phone & Email, Social Icons */}
          <h1
            className="contact-title"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, Inter, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap'
            }}
          >
            <span>{contactInfo.title ? contactInfo.title.replace('☎️', '').trim() : 'Contact Me'}</span>
            <img
              className="contact-call-icon"
              src="/assets/images/black-call-icon-png.png"
              alt="Phone"
              style={{
                width: 'clamp(2.2rem, 4.6vw, 3.4rem)',
                height: 'clamp(2.2rem, 4.6vw, 3.4rem)',
                objectFit: 'contain',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}
            />
          </h1>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#868e96',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 1.6,
              marginBottom: '2.25rem',
              maxWidth: '680px'
            }}
          >
            {contactInfo.subTitle}
          </p>

          <div style={{ marginBottom: '2.25rem' }}>
            {contactInfo.number && (
              <a
                href={`tel:${contactInfo.number.replace(/\s+/g, '')}`}
                className="contact-link-phone"
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
                  fontWeight: 400,
                  color: '#868e96',
                  textDecoration: 'none',
                  marginBottom: '1.25rem',
                  transition: 'all 0.25s ease',
                  wordBreak: 'break-all'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#868e96';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {contactInfo.number}
              </a>
            )}

            {contactInfo.email && (
              <div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="contact-link-email"
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(1.35rem, 2.8vw, 2.4rem)',
                    fontWeight: 400,
                    color: '#868e96',
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#868e96';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {contactInfo.email}
                </a>
              </div>
            )}
          </div>

          {/* Social Media Circular Buttons Strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              flexWrap: 'wrap',
              marginTop: '1.75rem'
            }}
          >
            {socialLinks
              .filter((item) => item.show)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: item.bgColor,
                    color: '#ffffff',
                    fontSize: '1.25rem',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease, opacity 0.2s ease',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.12)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
