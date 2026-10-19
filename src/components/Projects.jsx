import React, { useState } from 'react';
import { projects } from '../portfolio';
import {
  Layers,
  ShieldCheck,
  Gamepad2,
  Building2,
  Github,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

function NexoraPlanetLogo({ size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="nexoraPlanetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="nexoraRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Back orbital ring */}
      <path
        d="M12 58 C15 46, 85 38, 88 50"
        stroke="url(#nexoraRingGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Planet Sphere Core */}
      <circle
        cx="50"
        cy="50"
        r="26"
        fill="url(#nexoraPlanetGrad)"
      />

      {/* Elegant white 'N' inside the planet core */}
      <path
        d="M 38 36 L 38 64 L 43 64 L 43 44 L 57 64 L 62 64 L 62 36 L 57 36 L 57 56 L 43 36 Z"
        fill="white"
      />

      {/* Front orbital ring */}
      <path
        d="M88 50 C85 62, 15 70, 12 58"
        stroke="url(#nexoraRingGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Cybersecurity', 'Frontend & Gaming'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'lms':
        return <Layers size={22} color="#ffffff" />;
      case 'netsentinel':
        return <ShieldCheck size={22} color="#ffffff" />;
      case 'play-horizon':
        return <Gamepad2 size={22} color="#ffffff" />;
      case 'smart-society':
        return <Building2 size={22} color="#ffffff" />;
      default:
        return <Layers size={22} color="#ffffff" />;
    }
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <h2 className="section-title">Projects & Open Source</h2>
          <p className="section-subtitle">
            APPLICATIONS, NETWORK FORENSICS & HIGH-PERFORMANCE PLATFORMS
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            justifyContent: 'flex-start',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.4rem',
                  borderRadius: '0px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                  border: isActive
                    ? '1.5px solid var(--accent-primary)'
                    : '1.5px solid var(--border-color)',
                  backgroundColor: isActive ? 'var(--accent-primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects List: Row by Row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '100%'
          }}
        >
          {filteredProjects.map((project) => {
            const isLive = project.liveDemo && project.liveDemo !== project.github;

            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem',
                  position: 'relative'
                }}
              >
                {/* Header: Project Icon & Meta Badges */}
                <div
                  className="project-card-header"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.4rem'
                  }}
                >
                  {project.id === 'lms' ? (
                    <div
                      style={{
                        width: '58px',
                        height: '58px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <NexoraPlanetLogo size={58} />
                    </div>
                  ) : project.id === 'play-horizon' ? (
                    <div
                      style={{
                        height: '58px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1.5px solid var(--border-color)',
                        borderRadius: '0px',
                        overflow: 'hidden',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <img
                        src="/assets/projects/play_horizon_logo.png"
                        alt="Play Horizon"
                        style={{
                          height: '58px',
                          width: 'auto',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    </div>
                  ) : project.id === 'smart-society' ? (
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1.5px solid var(--border-color)',
                        borderRadius: '0px',
                        overflow: 'hidden',
                        backgroundColor: '#ffffff',
                        padding: '2px'
                      }}
                    >
                      <img
                        src="/assets/projects/smart_society_logo.png"
                        alt="Smart Society Management System"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    </div>
                  ) : project.id === 'netsentinel' ? (
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1.5px solid #1e293b',
                        borderRadius: '0px',
                        overflow: 'hidden',
                        backgroundColor: '#050914'
                      }}
                    >
                      <img
                        src="/assets/projects/netsentinel_logo.png"
                        alt="NetSentinel DNS Threat Intelligence"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '0px',
                        backgroundColor: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {getProjectIcon(project.id)}
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--accent-primary)',
                        backgroundColor: 'var(--badge-bg)',
                        padding: '0.35rem 0.8rem',
                        borderRadius: '0px',
                        border: '1px solid #c7d2fe'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.32rem',
                    fontWeight: 800,
                    marginBottom: '0.4rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3
                  }}
                >
                  {project.title}
                </h3>

                {/* Subtitle Pitch */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Standout Engineering Highlights (Uniform 3 high-impact bullets) */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginBottom: '1.75rem',
                    flex: 1
                  }}
                >
                  {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem'
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{
                          color: 'var(--accent-primary)',
                          flexShrink: 0,
                          marginTop: '0.2rem'
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55
                        }}
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>



                {/* Action Buttons: Clean inline-flex aligned to left */}
                <div
                  className="project-actions-row"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.85rem',
                    borderTop: '1.5px solid var(--border-color)',
                    paddingTop: '1.25rem',
                    marginTop: 'auto'
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      height: '42px',
                      padding: '0 1.5rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      borderRadius: '0px',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid var(--border-color)',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={16} />
                    Source Code
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      height: '42px',
                      padding: '0 1.5rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      borderRadius: '0px',
                      backgroundColor: 'var(--accent-primary)',
                      border: '1.5px solid var(--accent-primary)',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={15} />
                    {isLive ? 'Live Demo' : 'Live / Repo'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
