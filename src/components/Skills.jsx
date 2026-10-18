import React, { useState } from 'react';
import { skillsSection } from '../portfolio';
import DisplayLottie from './DisplayLottie';
import codingPersonAnimation from '../assets/lottie/codingPerson.json';
import { Code2, Layers, Server, Database, ShieldCheck, Cloud } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Languages',
    'Databases',
    'Cybersecurity',
    'Cloud & DevOps'
  ];

  const skillCategories = [
    {
      id: "Frontend",
      name: "Frontend",
      title: "Frontend & Full Stack",
      icon: <Layers size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Developing responsive, accessible, and high-performance user interfaces and real-time client applications.",
      skills: [
        { name: "React 18", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "Vite", icon: "devicon-vite-original colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "LiveKit WebRTC", icon: "fa-solid fa-video" }
      ]
    },
    {
      id: "Backend",
      name: "Backend",
      title: "Backend & Systems",
      icon: <Server size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Engineering scalable backend architectures, high-throughput microservices, and secure RESTful APIs.",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
        { name: "RESTful APIs", icon: "fa-solid fa-network-wired" },
        { name: "JWT Auth", icon: "fa-solid fa-key" },
        { name: "RBAC", icon: "fa-solid fa-user-shield" },
        { name: "Microservices", icon: "fa-solid fa-cubes" }
      ]
    },
    {
      id: "Languages",
      name: "Languages",
      title: "Programming Languages",
      icon: <Code2 size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Proficient across compiled, interpreted, and scripting languages with strong algorithmic foundations.",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "Bash", icon: "devicon-bash-plain colored" }
      ]
    },
    {
      id: "Databases",
      name: "Databases",
      title: "Databases & ORMs",
      icon: <Database size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Relational database schema modeling, indexing, ACID compliance, and document store optimization.",
      skills: [
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Prisma ORM", icon: "devicon-prisma-original colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Relational SQL", icon: "fa-solid fa-database" }
      ]
    },
    {
      id: "Cybersecurity",
      name: "Cybersecurity",
      title: "Cybersecurity & Forensics",
      icon: <ShieldCheck size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Deep packet inspection, network anomaly detection, DNS threat analysis, and secure coding standards.",
      skills: [
        { name: "Network Security", icon: "fa-solid fa-shield-halved" },
        { name: "Wireshark", icon: "fa-solid fa-network-wired" },
        { name: "Packet Inspection (.pcap)", icon: "fa-solid fa-file-code" },
        { name: "DNS Forensics", icon: "fa-solid fa-magnifying-glass" },
        { name: "DGA Detection", icon: "fa-solid fa-bug-slash" }
      ]
    },
    {
      id: "Cloud & DevOps",
      name: "Cloud & DevOps",
      title: "Cloud, DevOps & Tools",
      icon: <Cloud size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Cloud computing governance, container lifecycle management, CI/CD pipelines, and infrastructure tools.",
      skills: [
        { name: "Microsoft Azure (AZ-104)", icon: "devicon-azure-plain colored" },
        { name: "AWS Cloud", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Linux CLI", icon: "devicon-linux-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub CI/CD", icon: "devicon-github-original" }
      ]
    }
  ];

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Section Header */}
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

        {/* Category Filter Tabs: All | Frontend | Backend | ... */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            justifyContent: 'flex-start',
            marginBottom: '2rem'
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

        {/* Categorized Skills Display: Filtered by active tab */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeCategory === 'All' ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            gap: '1.75rem',
            maxWidth: '100%'
          }}
        >
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: activeCategory === 'All' ? '1.75rem 1.5rem' : '2.25rem 2rem',
                border: '1.5px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                  <div>
                    <h4
                      style={{
                        fontSize: '1.12rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0
                      }}
                    >
                      {cat.title}
                    </h4>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    backgroundColor: 'var(--code-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {cat.skills.length} Skills
                </span>
              </div>

              {activeCategory !== 'All' && (
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5
                  }}
                >
                  {cat.description}
                </p>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tech-pill"
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      padding: '0.45rem 0.85rem',
                      borderRadius: '0px',
                      backgroundColor: 'var(--code-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className={skill.icon} style={{ fontSize: '1.1rem' }}></i>
                    {skill.name}
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
