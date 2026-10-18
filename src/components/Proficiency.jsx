import React from 'react';
import { techStack } from '../portfolio';
import { BarChart3 } from 'lucide-react';

export default function Proficiency() {
  if (!techStack.viewSkillBars) return null;

  return (
    <section id="proficiency" className="section-wrapper" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Technical Proficiency</h2>
          <p className="section-subtitle">RELATIVE PROFICIENCY & DEPTH ACROSS DOMAINS</p>
        </div>

        <div className="glass-card" style={{ maxWidth: '850px', margin: '0 auto', padding: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {techStack.experience.map((exp, index) => (
              <div key={index}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.65rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {exp.Stack}
                  </span>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      fontFamily: 'Fira Code, monospace'
                    }}
                  >
                    {exp.progressPercentage}
                  </span>
                </div>

                {/* Progress track */}
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '0px',
                    backgroundColor: 'var(--code-bg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    position: 'relative'
                  }}
                >
                  {/* Progress bar fill - Single Solid Color & Sharp */}
                  <div
                    style={{
                      height: '100%',
                      width: exp.progressPercentage,
                      backgroundColor: 'var(--accent-primary)',
                      borderRadius: '0px',
                      transition: 'width 0.8s ease'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
