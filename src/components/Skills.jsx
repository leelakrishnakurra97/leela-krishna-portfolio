import React, { useState, useMemo } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Languages',
    'Databases',
    'Cybersecurity',
    'DevOps & Tools'
  ];

  const skillCategories = [
    {
      id: "Frontend",
      name: "Frontend",
      title: "Frontend",
      skills: [
        { name: "React 18", icon: "devicon-react-original colored" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" }
      ]
    },
    {
      id: "Backend",
      name: "Backend",
      title: "Backend & Systems",
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
      title: "Databases",
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
      skills: [
        { name: "Network Security", icon: "fa-solid fa-shield-halved", iconColor: "#4f46e5" },
        { name: "Wireshark", image: "./assets/images/wireshark.png" }
      ]
    },
    {
      id: "DevOps & Tools",
      name: "DevOps & Tools",
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Linux CLI", icon: "devicon-linux-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" }
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
      className="skill-tile"
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
        className="skill-tile-icon"
        style={{
          fontSize: '2.85rem',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.65rem'
        }}
      >
        {skill.image ? (
          <img
            src={skill.image}
            alt={skill.name}
            style={{
              height: '46px',
              width: '46px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        ) : skill.customIcon ? (
          skill.customIcon
        ) : (
          <i
            className={skill.icon}
            style={skill.iconColor ? { color: skill.iconColor } : undefined}
          ></i>
        )}
      </div>
      <span
        className="skill-tile-name"
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
          className="skills-categories-wrap"
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
          className="glass-card skills-card-container"
          style={{
            padding: '2.5rem',
            border: '1.5px solid var(--border-color)',
            backgroundColor: '#ffffff'
          }}
        >
          {activeCategory === 'All' || !activeCategoryData ? (
            /* ALL SKILLS UNIFIED IN ONE SINGLE GRID (NO CATEGORY SEPARATION) */
            <div
              className="skills-tile-grid"
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
            <div>
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-color)'
                  }}
                >
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

                {/* Grid of Big Logo Tiles */}
                <div
                  className="skills-tile-grid"
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
          )}
        </div>
      </div>
    </section>
  );
}
