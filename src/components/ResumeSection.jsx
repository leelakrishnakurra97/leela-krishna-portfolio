import React, { useState } from 'react';
import { greeting } from '../portfolio';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section-wrapper">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Resume & Qualifications</h2>
          <p className="section-subtitle">COMPREHENSIVE OVERVIEW OF ACADEMIC & TECHNICAL EXPERTISE</p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '100%',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Decorative Icon - Single Solid Color */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '0px',
              backgroundColor: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: '#ffffff'
            }}
          >
            <FileText size={32} />
          </div>

          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem' }}>
            Kurra Leela Krishna - Resume
          </h3>


          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <a
              href={greeting.resumeLink}
              download="Kurra_Leela_Krishna_Resume.pdf"
              className="btn-primary"
              style={{ padding: '0.8rem 2rem', fontSize: '0.98rem', borderRadius: '0px' }}
            >
              <Download size={18} />
              Download Resume (PDF)
            </a>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="btn-secondary"
              style={{ padding: '0.8rem 1.75rem', fontSize: '0.98rem', borderRadius: '0px' }}
            >
              <Eye size={18} />
              Preview in Browser
            </button>

            <a
              href={greeting.resumeDriveLink}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.8rem 1.75rem', fontSize: '0.98rem', borderRadius: '0px' }}
            >
              <ExternalLink size={18} />
              Open Google Drive Link
            </a>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <LightboxModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        items={[{ src: greeting.resumeLink, title: 'Kurra Leela Krishna - Resume' }]}
        currentIndex={0}
        onIndexChange={() => {}}
        isPdf={true}
      />
    </section>
  );
}
