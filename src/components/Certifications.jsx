import React, { useState } from 'react';
import { certificationsSection } from '../portfolio';
import LightboxModal from './LightboxModal';

export default function Certifications() {
  const [previewCert, setPreviewCert] = useState(null);

  const handleAction = (item, certTitle) => {
    if (item.isPdf) {
      setPreviewCert({ src: item.url, title: certTitle });
    } else if (item.isInternal) {
      const el = document.querySelector(item.url);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certifications" className="section-wrapper">
      <div className="container">
        {/* Section Heading - Exact match to developerFolio reference */}
        <div className="section-title-wrap" style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
            {certificationsSection.title}
          </h2>
          <p className="section-subtitle">
            {certificationsSection.subTitle}
          </p>
        </div>

        {/* Achievements / Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            maxWidth: '100%'
          }}
        >
          {certificationsSection.certifications.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid var(--border-color)',
                borderRadius: '0px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Centered Image Container */}
              <div
                style={{
                  height: '210px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt || card.title}
                  style={{
                    maxHeight: '190px',
                    maxWidth: '85%',
                    objectFit: 'contain',
                    borderRadius: '0px'
                  }}
                />
              </div>

              {/* Title & Subtitle */}
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '1.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {card.subtitle}
                </p>
              </div>

              {/* Footer Pill/Sharp Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: 'auto'
                }}
              >
                {card.footer &&
                  card.footer.map((tag, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => handleAction(tag, card.title)}
                      style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: '#ffffff',
                        border: '1.5px solid var(--accent-primary)',
                        borderRadius: '0px',
                        padding: '0.45rem 1.15rem',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        lineHeight: 1.5
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
                        e.currentTarget.style.borderColor = 'var(--accent-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      }}
                    >
                      {tag.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal Preview */}
      <LightboxModal
        isOpen={!!previewCert}
        onClose={() => setPreviewCert(null)}
        items={previewCert ? [previewCert] : []}
        currentIndex={0}
        onIndexChange={() => {}}
        isPdf={true}
      />
    </section>
  );
}
