import React, { useState, useEffect } from 'react';
import { workExperiences } from '../portfolio';
import { Calendar, MapPin, CheckCircle2, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Experience() {
  if (!workExperiences.display) return null;

  const [activePhoto, setActivePhoto] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const nextPhoto = () => {
    const images = workExperiences.experience[0]?.images || [];
    if (images.length) setCurrentImgIdx((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = () => {
    const images = workExperiences.experience[0]?.images || [];
    if (images.length) setCurrentImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhoto === null) return;
      if (e.key === 'Escape') setActivePhoto(null);
      if (e.key === 'ArrowRight') {
        const images = workExperiences.experience[0]?.images || [];
        if (images.length) setActivePhoto((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        const images = workExperiences.experience[0]?.images || [];
        if (images.length) setActivePhoto((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto]);

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">PRACTICAL INDUSTRY APPLICATION & ENGINEERING CONTRIBUTIONS</p>
        </div>

        <div style={{ maxWidth: '100%' }}>
          {workExperiences.experience.map((exp, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.5rem' }}>
              <div className="experience-split-grid">
                {/* Left Column: Experience Content */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span>{exp.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.45rem 1rem',
                    borderRadius: '0px',
                    backgroundColor: 'var(--code-bg)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)'
                  }}
                >
                  <Calendar size={14} style={{ color: 'var(--accent-primary)' }} />
                  {exp.date}
                </div>
              </div>

              {/* Summary Description */}
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}
              >
                {exp.desc}
              </p>

              {/* Bullet Points */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  marginBottom: '2rem'
                }}
              >
                {exp.descBullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{
                        color: 'var(--accent-primary)',
                        flexShrink: 0,
                        marginTop: '0.25rem'
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65
                      }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>


                </div>

                {/* Right Column: Copter Code On-Site Internship Gallery */}
                {exp.images && exp.images.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--text-primary)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        On-Site Internship Gallery
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {currentImgIdx + 1} of {exp.images.length} • Click to enlarge
                    </span>
                  </div>

                  {/* Main Single Photo Display */}
                  <div
                    className="experience-gallery-main"
                    onClick={() => setActivePhoto(currentImgIdx)}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '330px',
                      borderRadius: '0px',
                      overflow: 'hidden',
                      backgroundColor: '#0a0d14',
                      border: '1.5px solid var(--border-color)',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src={exp.images[currentImgIdx].src}
                      alt={exp.images[currentImgIdx].title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />

                    {/* Expand icon in top-right */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#ffffff',
                        padding: '0.4rem',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                      title="Click to view full photo"
                    >
                      <Maximize2 size={15} />
                    </div>

                    {/* Previous Photo Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevPhoto();
                      }}
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#ffffff',
                        width: '36px',
                        height: '36px',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer'
                      }}
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    {/* Next Photo Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextPhoto();
                      }}
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#ffffff',
                        width: '36px',
                        height: '36px',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer'
                      }}
                      aria-label="Next photo"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Caption overlay at bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '0.85rem 1.15rem',
                        backgroundColor: 'rgba(15, 23, 42, 0.92)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff'
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '0.96rem',
                          fontWeight: 700,
                          marginBottom: exp.images[currentImgIdx].caption ? '0.2rem' : 0,
                          color: '#ffffff'
                        }}
                      >
                        {exp.images[currentImgIdx].title}
                      </h4>
                      {exp.images[currentImgIdx].caption && (
                        <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4, margin: 0 }}>
                          {exp.images[currentImgIdx].caption}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Selector Strip Below */}
                  <div
                    className="experience-thumb-strip"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${exp.images.length}, 1fr)`,
                      gap: '0.5rem',
                      marginTop: '0.75rem'
                    }}
                  >
                    {exp.images.map((img, iIdx) => (
                      <div
                        key={iIdx}
                        onClick={() => setCurrentImgIdx(iIdx)}
                        style={{
                          height: '56px',
                          borderRadius: '0px',
                          overflow: 'hidden',
                          border: currentImgIdx === iIdx ? '2px solid var(--accent-primary)' : '1.5px solid var(--border-color)',
                          opacity: currentImgIdx === iIdx ? 1 : 0.65,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          backgroundColor: '#0a0d14'
                        }}
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>

              {/* Lightbox Modal */}
              {activePhoto !== null && exp.images && (
                <div
                  onClick={() => setActivePhoto(null)}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    backgroundColor: 'rgba(0, 0, 0, 0.88)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem'
                  }}
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      position: 'relative',
                      maxWidth: '920px',
                      width: '100%',
                      backgroundColor: '#0f172a',
                      border: '1.5px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0px',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActivePhoto(null)}
                      aria-label="Close modal"
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        width: '38px',
                        height: '38px',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <X size={20} />
                    </button>

                    {/* Prev Button */}
                    <button
                      onClick={() => setActivePhoto((prev) => (prev - 1 + exp.images.length) % exp.images.length)}
                      aria-label="Previous photo"
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        width: '42px',
                        height: '42px',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={() => setActivePhoto((prev) => (prev + 1) % exp.images.length)}
                      aria-label="Next photo"
                      style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        width: '42px',
                        height: '42px',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Main Image Display */}
                    <div
                      style={{
                        height: '62vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000000'
                      }}
                    >
                      <img
                        src={exp.images[activePhoto].src}
                        alt={exp.images[activePhoto].title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    </div>

                    {/* Caption Bar */}
                    <div style={{ padding: '1rem 1.5rem', backgroundColor: '#0f172a', color: '#ffffff' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: exp.images[activePhoto].caption ? '0.25rem' : 0
                        }}
                      >
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                          {exp.images[activePhoto].title}
                        </h4>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          {activePhoto + 1} / {exp.images.length}
                        </span>
                      </div>
                      {exp.images[activePhoto].caption && (
                        <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>
                          {exp.images[activePhoto].caption}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
