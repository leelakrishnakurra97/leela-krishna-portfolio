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
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.4rem'
                  }}
                >
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

                {/* Tech Stack Pills (Clean, compact, monospace font) */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    marginBottom: '1.75rem'
                  }}
                >
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '0px',
                        backgroundColor: 'var(--code-bg)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        fontFamily: 'Fira Code, monospace'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Clean inline-flex aligned to left */}
                <div
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
