import React from 'react';
import { educationInfo } from '../portfolio';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  if (!educationInfo.display) return null;

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">ACADEMIC EXCELLENCE & SPECIALIZED TECHNICAL TRAINING</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: '100%'
          }}
        >
          {educationInfo.schools.map((school, index) => (
            <div key={index} className="glass-card" style={{ padding: '2.25rem' }}>
              <div
                className="education-header-row"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  className="education-school-info"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flex: 1, minWidth: 0 }}
                >
                  {/* Institution Logo / Icon */}
                  <div
                    className="education-logo-box"
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '0px',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid var(--border-color)',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {school.logo ? (
                      <img
                        src={school.logo}
                        alt={school.schoolName}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '0px'
                        }}
                      />
                    ) : (
                      <GraduationCap size={28} style={{ color: 'var(--accent-primary)' }} />
                    )}
                  </div>

                  <div>
                    <h3
                      className="education-school-title"
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {school.schoolName}
                    </h3>
                    <div
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {school.subHeader}
                    </div>
                    <div
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <MapPin size={14} />
                      {school.location}
                    </div>
                  </div>
                </div>

                <div
                  className="education-meta-col"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '0px',
                      backgroundColor: 'var(--code-bg)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <Calendar size={13} style={{ color: 'var(--accent-primary)' }} />
                    {school.duration}
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '0px',
                      backgroundColor: 'var(--code-bg)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#000000'
                    }}
                  >
                    <Award size={14} style={{ color: '#000000' }} />
                    {school.grade}
                  </div>
                </div>
              </div>

              {school.desc && (
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: school.descBullets?.length ? '1.25rem' : 0
                  }}
                >
                  {school.desc}
                </p>
              )}

              {school.descBullets && school.descBullets.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                  {school.descBullets.map((bullet, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2
                        size={16}
                        style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.25rem' }}
                      />
                      <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
