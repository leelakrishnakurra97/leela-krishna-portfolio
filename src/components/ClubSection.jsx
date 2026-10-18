import React, { useState } from 'react';
import { clubSection } from '../portfolio';
import { ChevronLeft, ChevronRight, Maximize2, CheckCircle2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function ClubSection() {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + clubSection.gallery.length) % clubSection.gallery.length);
  };

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % clubSection.gallery.length);
  };

  const currentGalleryItem = clubSection.gallery[activeImgIndex];

  return (
    <section id="clubs" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <h2 className="section-title">{clubSection.title}</h2>
          <p className="section-subtitle">{clubSection.subTitle}</p>
        </div>

        {/* Main Content Card */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1.5px solid var(--border-color)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Organization Details */}
            <div>
              <h3
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}
              >
                {clubSection.clubName}
              </h3>

              <div
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  marginBottom: '1.25rem'
                }}
              >
                {clubSection.institution} • {clubSection.role}
              </div>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1.75rem'
                }}
              >
                {clubSection.description}
              </p>

              {/* Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                {clubSection.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={17}
                      style={{
                        color: 'var(--accent-primary)',
                        flexShrink: 0,
                        marginTop: '0.2rem'
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Gallery & Carousel */}
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '350px',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  backgroundColor: '#0a0d14',
                  boxShadow: 'var(--card-shadow)',
                  border: '1.5px solid var(--border-color)',
                  cursor: 'pointer'
                }}
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={currentGalleryItem.src}
                  alt={currentGalleryItem.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Expand icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#ffffff',
                    padding: '0.45rem',
                    borderRadius: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  title="Click to view full photo"
                >
                  <Maximize2 size={16} />
                </div>

                {/* Carousel Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
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
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
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
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Caption bottom bar - Solid Single Color background, zero gradients */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.92)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff'
                  }}
                >
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.2rem', color: '#ffffff' }}>
                    {currentGalleryItem.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                    {currentGalleryItem.caption}
                  </p>
                </div>
              </div>

              {/* Thumbnails strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${clubSection.gallery.length}, 1fr)`,
                  gap: '0.5rem',
                  marginTop: '0.85rem'
                }}
              >
                {clubSection.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    style={{
                      height: '52px',
                      borderRadius: '0px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border:
                        activeImgIndex === idx
                          ? '2px solid var(--accent-primary)'
                          : '1px solid var(--border-color)',
                      opacity: activeImgIndex === idx ? 1 : 0.65,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={clubSection.gallery}
        currentIndex={activeImgIndex}
        onIndexChange={setActiveImgIndex}
      />
    </section>
  );
}
