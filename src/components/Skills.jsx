import React, { useState, useMemo } from 'react';
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
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" }
      ]
    },
    {
      id: "Backend",
      name: "Backend",
      title: "Backend & Systems",
      icon: <Server size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Engineering scalable backend architectures, high-throughput services, and RESTful APIs.",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" }
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
        { name: "C", icon: "devicon-c-plain colored" }
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
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" }
      ]
    },
    {
      id: "Cybersecurity",
      name: "Cybersecurity",
      title: "Cybersecurity & Forensics",
      icon: <ShieldCheck size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Deep packet inspection, network anomaly detection, DNS threat analysis, and secure coding standards.",
      skills: [
        { name: "Network Security", icon: "fa-solid fa-shield-halved", iconColor: "#4f46e5" },
        { name: "Wireshark", icon: "fa-solid fa-network-wired", iconColor: "#0284c7" }
      ]
    },
    {
      id: "Cloud & DevOps",
      name: "Cloud & DevOps",
      title: "Cloud, DevOps & Tools",
      icon: <Cloud size={20} style={{ color: 'var(--accent-primary)' }} />,
      description: "Cloud computing governance, container lifecycle management, CI/CD pipelines, and infrastructure tools.",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Linux CLI", icon: "devicon-linux-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub CI/CD", icon: "devicon-github-original" }
      ]
    }
  ];

  // Flatten and deduplicate skills for the 'All' view
  const allSkills = useMemo(() => {
    const seen = new Set();
    const list = [];
    skillCategories.forEach((cat) => {
      cat.skills.forEach((skill) => {
        if (!seen.has(skill.name)) {
          seen.add(skill.name);
          list.push(skill);
        }
      });
    });
    return list;
  }, [skillCategories]);

  const activeCategoryData = skillCategories.find((cat) => cat.id === activeCategory);

  const renderSkillTile = (skill, key) => (
    <div
      key={key}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.35rem 0.85rem',
        backgroundColor: '#ffffff',
        border: '1.5px solid var(--border-color)',
        borderRadius: '0px',
        textAlign: 'center',
        minHeight: '120px',
        transition: 'all 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-color)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          fontSize: '2.85rem',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.65rem'
        }}
      >
        {skill.customIcon ? (
          skill.customIcon
        ) : (
          <i
            className={skill.icon}
            style={skill.iconColor ? { color: skill.iconColor } : undefined}
          ></i>
        )}
      </div>
      <span
        style={{
          fontSize: '0.88rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 1.3
        }}
      >
        {skill.name}
      </span>
    </div>
  );

  return (
    <section id="skills" className="section-wrapper" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">TECHNICAL EXPERTISE, PROGRAMMING LANGUAGES & DOMAIN CAPABILITIES</p>
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

        {/* ONE SINGLE BOX WITH BIGGER LOGOS */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            border: '1.5px solid var(--border-color)',
            backgroundColor: '#ffffff'
          }}
        >
          {activeCategory === 'All' ? (
            /* ALL SKILLS UNIFIED IN ONE SINGLE GRID (NO CATEGORY SEPARATION) */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
                gap: '1.15rem'
              }}
            >
              {allSkills.map((skill, idx) => renderSkillTile(skill, `all-${idx}-${skill.name}`))}
            </div>
          ) : (
            /* SPECIFIC CATEGORY SELECTED */
            activeCategoryData && (
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: 'var(--badge-bg)',
                        border: '1px solid #c7d2fe',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {activeCategoryData.icon}
                    </div>
                    <h4
                      style={{
                        fontSize: '1.18rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0
                      }}
                    >
                      {activeCategoryData.title}
                    </h4>
                  </div>

                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      backgroundColor: 'var(--code-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {activeCategoryData.skills.length} Skills
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.55
                  }}
                >
                  {activeCategoryData.description}
                </p>

                {/* Grid of Big Logo Tiles */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
                    gap: '1.15rem'
                  }}
                >
                  {activeCategoryData.skills.map((skill, sIdx) =>
                    renderSkillTile(skill, `${activeCategoryData.id}-${sIdx}-${skill.name}`)
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
