import React from 'react';
import { contactInfo, socialMediaLinks } from '../portfolio';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {

  const socialChannels = [
    {
      name: 'GitHub',
      handle: 'leelakrishnakurra97',
      url: socialMediaLinks.github,
      icon: 'fa-brands fa-github',
      color: '#181717',
      show: Boolean(socialMediaLinks.github)
    },
    {
      name: 'LinkedIn',
      handle: 'leela-krishna-kurra',
      url: socialMediaLinks.linkedin,
      icon: 'fa-brands fa-linkedin-in',
      color: '#0a66c2',
      show: Boolean(socialMediaLinks.linkedin)
    },
    {
      name: 'Instagram',
      handle: '@leelakrishna_123',
      url: socialMediaLinks.instagram,
      icon: 'fa-brands fa-instagram',
      color: '#e4405f',
      show: Boolean(socialMediaLinks.instagram)
    },
    {
      name: 'LeetCode',
      handle: 'leelakrishna_101',
      url: socialMediaLinks.leetcode,
      icon: 'fa-solid fa-code',
      color: '#ffa116',
      show: Boolean(socialMediaLinks.leetcode)
    }
  ];

  return (
    <section id="contact" className="section-wrapper" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Section Title Header */}
        <div className="section-title-wrap">

          <h2 className="section-title">
            {contactInfo.title ? contactInfo.title.replace(/[☎️📞]/g, '').trim() : 'Contact Me'}
          </h2>
          <p className="section-subtitle">
            {contactInfo.subTitle || 'DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.'}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '2rem'
          }}
        >
          {/* Email Card */}
          {contactInfo.email && (
            <div
              className="glass-card"
              style={{
                padding: '2rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    backgroundColor: 'var(--badge-bg)',
                    border: '1px solid #c7d2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <Mail size={22} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)'
                  }}
                >
                  Direct Email
                </span>
              </div>

              <h3
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.35rem'
                }}
              >
                Email Address
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  wordBreak: 'break-all',
                  display: 'block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {contactInfo.email}
              </a>
            </div>
          )}

          {/* Phone Card */}
          {contactInfo.number && (
            <div
              className="glass-card"
              style={{
                padding: '2rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    backgroundColor: 'var(--badge-bg)',
                    border: '1px solid #c7d2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <Phone size={22} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)'
                  }}
                >
                  Phone & WhatsApp
                </span>
              </div>

              <h3
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.35rem'
                }}
              >
                Call or Message
              </h3>
              <a
                href={`tel:${contactInfo.number.replace(/\s+/g, '')}`}
                style={{
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {contactInfo.number}
              </a>
            </div>
          )}


        </div>

        {/* Social & Developer Profiles Container */}
        <div className="glass-card" style={{ padding: '2rem 2.25rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1.5px solid var(--border-color)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                Connect Online
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                Explore open source repositories, coding profiles, and professional networks.
              </p>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem'
            }}
          >
            {socialChannels
              .filter((ch) => ch.show)
              .map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.95rem 1.15rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1.5px solid var(--border-color)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = channel.color;
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: channel.color,
                        fontSize: '1.1rem'
                      }}
                    >
                      <i className={channel.icon}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {channel.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {channel.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-muted)" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
