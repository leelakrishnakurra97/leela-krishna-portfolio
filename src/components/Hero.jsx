import React from 'react';
import { greeting, socialMediaLinks } from '../portfolio';
import { Download, ArrowRight, Mail } from 'lucide-react';
import DisplayLottie from './DisplayLottie';
import landingPersonAnimation from '../assets/lottie/landingPerson.json';

export default function Hero() {

  return (
    <section
      id="home"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Column: Hero Content Aligned Towards Left */}
          <div
            style={{
              flex: '1 1 580px',
              maxWidth: '680px',
              minWidth: '320px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            {/* Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
                textAlign: 'left',
                width: '100%'
              }}
            >
              Hello, I'm <span className="brand-text">{greeting.username}</span>
            </h1>

            {/* SubTitle / Bio */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                maxWidth: '640px',
                marginBottom: '2.5rem',
                textAlign: 'left',
                width: '100%',
                marginLeft: 0,
                marginRight: 'auto'
              }}
            >
              {greeting.subTitle}
            </p>

            {/* CTAs aligned strictly towards left */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '0.85rem',
                marginBottom: '2.5rem',
                width: '100%'
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                style={{
                  padding: '0.8rem 1.6rem',
                  fontSize: '0.96rem',
                  borderRadius: '0px',
                  whiteSpace: 'nowrap'
                }}
              >
                Explore Projects
                <ArrowRight size={17} />
              </a>

              <a
                href={greeting.resumeLink}
                download="Kurra_Leela_Krishna_Resume.pdf"
                className="btn-secondary"
                style={{
                  padding: '0.8rem 1.45rem',
                  fontSize: '0.96rem',
                  borderRadius: '0px',
                  whiteSpace: 'nowrap'
                }}
              >
                <Download size={17} />
                Download Resume
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                style={{
                  padding: '0.8rem 1.45rem',
                  fontSize: '0.96rem',
                  borderRadius: '0px',
                  whiteSpace: 'nowrap'
                }}
              >
                <Mail size={17} />
                Contact Me
              </a>
            </div>

            {/* Social Media Links aligned towards left */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '0.85rem',
                flexWrap: 'wrap',
                width: '100%'
              }}
            >
              {/* GitHub */}
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                title="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              {/* LinkedIn */}
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                title="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              {/* LeetCode */}
              <a
                href={socialMediaLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                title="LeetCode Profile"
              >
                <i className="fa-solid fa-code"></i>
              </a>

              {/* Email */}
              <a
                href={`mailto:${greeting.email}`}
                aria-label="Send Email"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                title="Email Me"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Animation */}
          <div
            style={{
              flex: '1 1 440px',
              maxWidth: '520px',
              minWidth: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <DisplayLottie
              animationData={landingPersonAnimation}
              style={{ maxWidth: '500px', width: '100%' }}
              lottieStyle={{ height: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
