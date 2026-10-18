import React from 'react';
import { skillsSection } from '../portfolio';
import DisplayLottie from './DisplayLottie';
import codingPersonAnimation from '../assets/lottie/codingPerson.json';
import { Code2, Layers, Server, Database, ShieldCheck, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code2 size={20} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "C", "SQL", "Bash"]
    },
    {
      name: "Frontend & Full Stack",
      icon: <Layers size={20} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["React 18", "Next.js", "Vite", "HTML5", "CSS3", "LiveKit WebRTC", "Tailwind CSS"]
    },
    {
      name: "Backend & Systems",
      icon: <Server size={20} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Auth", "RBAC", "Microservices"]
    },
    {
      name: "Databases & ORMs",
      icon: <Database size={20} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "MySQL", "Relational SQL"]
    },
    {
      name: "Cybersecurity & Forensics",
      icon: <ShieldCheck size={20} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["Network Security", "Wireshark", "Packet Inspection (.pcap/.pcapng)", "DNS Forensics", "DGA Detection"]
    },
    {
      name: "Cloud, DevOps & Tools",
      icon: <Cloud size={20} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["Microsoft Azure (AZ-104)", "AWS Cloud", "Docker", "Linux CLI", "Git", "GitHub CI/CD"]
    }
  ];

  return (
    <section id="skills" className="section-wrapper" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Section Header - Clean left-aligned matching other sections */}
        <div className="section-title-wrap">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">TECHNICAL EXPERTISE, PROGRAMMING LANGUAGES & DOMAIN CAPABILITIES</p>
        </div>

        {/* Top Feature: What I do overview with Coding Lottie Animation */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '2.5rem',
            border: '1.5px solid var(--border-color)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '3rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Left Column: Coding Person Animation */}
            <div
              style={{
                flex: '1 1 400px',
                maxWidth: '480px',
                minWidth: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <DisplayLottie
                animationData={codingPersonAnimation}
                style={{ maxWidth: '440px', width: '100%' }}
                lottieStyle={{ height: '360px' }}
              />
            </div>

            {/* Right Column: What I do Capabilities & Dev Icons */}
            <div
              style={{
                flex: '1 1 500px',
                minWidth: '300px'
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.2
                }}
              >
                {skillsSection.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.04em',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase'
                }}
              >
                {skillsSection.subTitle}
              </p>

              {/* Dev Icons strip */}
              <ul className="dev-icons" style={{ margin: '1rem 0 1.5rem 0' }}>
                {skillsSection.devIcons.map((skill, index) => (
                  <li key={index} className="software-skill-inline" title={skill.skillName}>
                    <i className={skill.fontAwesomeClassname}></i>
                    <p>{skill.skillName}</p>
                  </li>
                ))}
              </ul>

              {/* Capability Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skillsSection.skills.map((skillText, index) => (
                  <div key={index} className="skills-bullet">
                    <span className="bullet-icon">⚡</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {skillText.replace(/^⚡\s*/, '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            maxWidth: '100%'
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                border: '1.5px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    backgroundColor: 'var(--badge-bg)',
                    border: '1px solid #c7d2fe',
                    borderRadius: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {cat.icon}
                </div>
                <h4
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  {cat.name}
                </h4>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tech-pill"
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0px',
                      backgroundColor: 'var(--code-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
