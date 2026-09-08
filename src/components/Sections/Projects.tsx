import React from 'react';
import { Activity, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../Icons';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="grid-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title fade-up">
          <span className="section-number">03.</span> Projects
        </h2>

        <div className="fade-up stagger-1">
          <div className="card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            {/* Top green accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent-primary), transparent 80%)' }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <p className="code-font text-accent" style={{ fontSize: '0.8rem', marginBottom: '0.5rem', opacity: 0.8 }}>
                  {'>'} featured_project.py
                </p>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Network Port Scanner</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://github.com/suryacysec/port-scanner" target="_blank" rel="noopener noreferrer" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', transition: 'all 0.3s', background: 'rgba(255,255,255,0.02)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  aria-label="View Source Code"
                >
                  <GithubIcon size={20} />
                </a>
                <a href="https://github.com/suryacysec/port-scanner" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', transition: 'all 0.3s', background: 'rgba(255,255,255,0.02)' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  aria-label="View Project"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div style={{ background: 'rgba(5, 8, 7, 0.6)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--accent-border)', marginBottom: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                A multithreaded Python port scanner with a GUI that scans custom port ranges across target IP addresses and hostnames. Designed for <span className="text-accent">high performance</span> — concurrent threading enables fast scanning of large network surfaces.
              </p>
            </div>

            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Python', 'Multithreading', 'Socket Programming', 'GUI (Tkinter)', 'Networking'].map((tech) => (
                <span key={tech} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Features Grid */}
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600 }}>Key Features</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {[
                'Multithreaded scanning',
                'GUI interface',
                'Custom port ranges',
                'IP & hostname scanning',
                'Real-time open-port results',
                'Service name detection',
                'Result logging',
                'Text-file export'
              ].map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem', padding: '0.4rem 0' }}>
                  <Activity size={14} className="text-accent" style={{ flexShrink: 0 }} /> {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
