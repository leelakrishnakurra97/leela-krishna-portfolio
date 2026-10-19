import React from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

export default function HeroAnimation() {
  return (
    <div className="hero-anim-wrapper">
      {/* Background Ambient Glow */}
      <div className="ambient-glow" />

      {/* Main IDE Terminal Window */}
      <div className="ide-window">
        {/* Title Bar */}
        <div className="ide-titlebar">
          <div className="window-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div className="ide-tab">
            <i className="devicon-python-plain colored" style={{ fontSize: '1rem', marginRight: '6px' }}></i>
            <span className="tab-title">cs_engineer_profile.py</span>
          </div>
        </div>

        {/* Code Body */}
        <div className="ide-content">
          <div className="line-numbers">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
          </div>

          <div className="code-lines">
            <div className="code-row">
              <span className="kw">class</span> <span className="cls">CS_ENGINEER_Profile</span>:
            </div>
            <div className="code-row ind-1">
              <span className="kw">def</span> <span className="fn">__init__</span>(<span className="self">self</span>):
            </div>
            <div className="code-row ind-2">
              <span className="self">self</span>.name = <span className="str">"Kurra Leela Krishna"</span>
            </div>
            <div className="code-row ind-2">
              <span className="self">self</span>.branch = [<span className="str">"CSE(Cyber Security)"</span>]
            </div>
            <div className="code-row ind-2">
              <span className="self">self</span>.status = <span className="str">"Open to Opportunities"</span>
            </div>
            <div className="code-row ind-1 typing-line">
              <span className="prompt">&gt;&gt;&gt;</span> <span className="cmd">deploy_production()</span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>

        {/* Terminal Bottom Status Bar */}
        <div className="ide-footer">
          <div className="footer-left">
            <Terminal size={13} color="#94a3b8" />
            <span>Terminal: zsh (main)</span>
          </div>
          <div className="footer-right">
            <CheckCircle2 size={13} color="#10b981" />
            <span>0 Vulnerabilities | Build: 200 OK</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-anim-wrapper {
          position: relative;
          width: 100%;
          max-width: 530px;
          min-height: 410px;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .ambient-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.18) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
          animation: pulseGlow 6s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.15); opacity: 1; }
        }

        /* IDE Window */
        .ide-window {
          position: relative;
          z-index: 2;
          width: 100%;
          background: #0f172a;
          border: 1.5px solid #334155;
          border-radius: 0px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: hidden;
          font-family: 'Fira Code', monospace;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .ide-window:hover {
          border-color: var(--accent-primary);
          transform: translateY(-4px);
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.25), 0 0 0 1px rgba(79, 70, 229, 0.3);
        }

        /* Titlebar */
        .ide-titlebar {
          background: #1e293b;
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1.5px solid #334155;
        }

        .window-dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .window-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .ide-tab {
          display: flex;
          align-items: center;
          background: #0f172a;
          padding: 0.25rem 0.85rem;
          border-radius: 0px;
          border: 1px solid #334155;
          border-bottom: none;
          font-size: 0.8rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        /* Code Content */
        .ide-content {
          display: flex;
          padding: 1.25rem 1rem;
          gap: 1.25rem;
          font-size: 0.85rem;
          line-height: 1.7;
          background: #0b1120;
          overflow-x: auto;
        }

        .line-numbers {
          display: flex;
          flex-direction: column;
          color: #475569;
          user-select: none;
          text-align: right;
          font-size: 0.8rem;
        }

        .code-lines {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }

        .code-row {
          color: #cbd5e1;
        }

        .ind-1 { padding-left: 1.2rem; }
        .ind-2 { padding-left: 2.4rem; }

        .kw { color: #c084fc; font-weight: 600; }
        .cls { color: #38bdf8; font-weight: 600; }
        .fn { color: #60a5fa; }
        .self { color: #f472b6; }
        .str { color: #4ade80; }
        .cmt { color: #64748b; font-style: italic; }
        .prompt { color: #fbbf24; font-weight: 700; margin-right: 6px; }
        .cmd { color: #f8fafc; font-weight: 500; }

        .cursor {
          display: inline-block;
          color: #38bdf8;
          font-weight: 700;
          animation: blinkCursor 0.9s steps(2, start) infinite;
          margin-left: 2px;
        }

        @keyframes blinkCursor {
          to { visibility: hidden; }
        }

        /* Footer */
        .ide-footer {
          background: #0f172a;
          border-top: 1px solid #1e293b;
          padding: 0.45rem 1rem;
          display: flex;
          justifyContent: space-between;
          align-items: center;
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .footer-left, .footer-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 640px) {
          .hero-anim-wrapper { min-height: auto; }
        }
      `}</style>
    </div>
  );
}
