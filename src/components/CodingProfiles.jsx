import React from 'react';
import { codingProfiles } from '../portfolio';
import { ExternalLink, Terminal } from 'lucide-react';

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section-wrapper" style={{ paddingTop: '4.5rem', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Coding Profiles</h2>
          <p className="section-subtitle">
            ALGORITHMIC MASTERY & OPEN SOURCE FOOTPRINT
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            maxWidth: '100%'
          }}
        >
          {/* LeetCode Card */}
          <div className="glass-card" style={{ padding: '2rem 2.25rem' }}>
            <div className="profile-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '0px',
                    backgroundColor: 'var(--badge-bg)',
                    border: '1.5px solid #c7d2fe',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  <i className="fa-solid fa-code"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>LeetCode</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>
                    @{codingProfiles.leetcode.username}
                  </span>
                </div>
              </div>

              <a
                href={codingProfiles.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: '0.55rem 1.15rem',
                  fontSize: '0.85rem',
                  borderRadius: '0px'
                }}
              >
                View Profile
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="glass-card" style={{ padding: '2rem 2.25rem' }}>
            <div className="profile-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '0px',
                    backgroundColor: 'var(--badge-bg)',
                    border: '1.5px solid #c7d2fe',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  <i className="fa-brands fa-github"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>GitHub</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>
                    @{codingProfiles.github.username}
                  </span>
                </div>
              </div>

              <a
                href={codingProfiles.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: '0.55rem 1.15rem',
                  fontSize: '0.85rem',
                  borderRadius: '0px'
                }}
              >
                View Repos
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
