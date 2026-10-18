import React, { useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onIndexChange,
  isPdf = false
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && items && items.length > 1) {
        onIndexChange((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight' && items && items.length > 1) {
        onIndexChange((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items, onClose, onIndexChange]);

  if (!isOpen) return null;

  const currentItem = items ? items[currentIndex] : null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: isPdf ? '900px' : '960px',
          width: '100%',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '0px',
          border: '1.5px solid var(--border-color)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1.5px solid var(--border-color)',
            backgroundColor: '#f8fafc'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>
              {currentItem?.title || 'Preview'}
            </h4>
            {items && items.length > 1 && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {currentIndex + 1} of {items.length}
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {currentItem?.src && (
              <a
                href={currentItem.src}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.4rem',
                  borderRadius: '0px',
                  border: '1px solid var(--border-color)'
                }}
                title="Open original"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                color: 'var(--text-primary)',
                padding: '0.4rem',
                borderRadius: '0px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0d14',
            minHeight: '380px'
          }}
        >
          {isPdf ? (
            <iframe
              src={currentItem?.src}
              title={currentItem?.title || 'Document Preview'}
              style={{ width: '100%', height: '70vh', border: 'none' }}
            />
          ) : (
            <img
              src={currentItem?.src}
              alt={currentItem?.title || 'Preview'}
              style={{
                maxWidth: '100%',
                maxHeight: '65vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          )}

          {/* Navigation Controls */}
          {items && items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((currentIndex - 1 + items.length) % items.length);
                }}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#ffffff',
                  borderRadius: '0px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((currentIndex + 1) % items.length);
                }}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#ffffff',
                  borderRadius: '0px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        {currentItem?.caption && (
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#f8fafc',
              borderTop: '1.5px solid var(--border-color)',
              fontSize: '0.92rem',
              color: 'var(--text-secondary)'
            }}
          >
            {currentItem.caption}
          </div>
        )}
      </div>
    </div>
  );
}
