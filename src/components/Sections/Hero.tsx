import React from 'react';
import { ChevronRight, FileText, Mail, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import TypingEffect from '../TypingEffect';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>
          
          {/* Left: Text Content */}
          <div style={{ flex: '1 1 500px', maxWidth: '650px' }}>
            <div className="fade-up stagger-1">
              <div className="status-badge" style={{ marginBottom: '1.5rem' }}>
                <span className="pulse-dot" />
                Open to Opportunities
              </div>
            </div>

            <div className="fade-up stagger-2">
              <p className="code-font text-accent" style={{ marginBottom: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>
                $ whoami
              </p>
              <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', marginBottom: '0.75rem', letterSpacing: '-0.03em', fontWeight: 800 }}>
                Suryansh Gupta
              </h1>
            </div>

            <div className="fade-up stagger-3">
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500, minHeight: '2.2em' }}>
                <TypingEffect
                  strings={[
                    'Cybersecurity Enthusiast',
                    'Network Security Explorer',
                    'Vulnerability Researcher',
                    'Security Tool Developer',
                  ]}
                  speed={70}
                  deleteSpeed={35}
                  pause={2500}
                />
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: '560px' }}>
                B.Tech Information Technology student building practical experience in cybersecurity, network security, vulnerability assessment, and security tooling.
              </p>
            </div>

            <div className="fade-up stagger-4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ChevronRight size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FileText size={18} /> Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={18} /> Connect
              </a>
            </div>

            <div className="fade-up stagger-5" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span className="code-font text-secondary" style={{ fontSize: '0.85rem', opacity: 0.7 }}>// find_me:</span>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { href: 'https://github.com/suryanshsec07', label: 'GitHub', icon: <GithubIcon size={20} /> },
                  { href: 'https://linkedin.com/in/suryanshsec07', label: 'LinkedIn', icon: <LinkedinIcon size={20} /> },
                  { href: '#', label: 'TryHackMe', icon: <Shield size={20} /> },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = 'var(--accent-primary)';
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(57,255,136,0.15)';
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="fade-up stagger-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
            <div className="profile-container">
              <div className="profile-glow" />
              <div className="profile-glow-inner" />
              <div className="profile-image">
                <img src="/profile.jpg" alt="Suryansh Gupta - Cybersecurity Enthusiast" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
