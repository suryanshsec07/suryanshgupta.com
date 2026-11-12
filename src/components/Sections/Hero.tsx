import React from 'react';
import { ChevronRight, FileText, Mail, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import TypingEffect from '../TypingEffect';

// Change this version string every time you update resume.pdf to bust browser cache
const RESUME_VERSION = 'v2';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <div className="hero-layout">
          
          {/* Left: Text Content */}
          <div className="hero-text">
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
              <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', marginBottom: '0.75rem', letterSpacing: '-0.03em', fontWeight: 800 }}>
                Suryansh Gupta
              </h1>
            </div>

            <div className="fade-up stagger-3">
              <h2 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500, minHeight: '2.2em' }}>
                <TypingEffect
                  strings={[
                    'Cybersecurity Student',
                    'Learning Network Security',
                    'Google Student Ambassador',
                  ]}
                  speed={70}
                  deleteSpeed={35}
                  pause={2500}
                />
              </h2>
              <p className="hero-desc">
                I'm Suryansh Gupta, a 2nd-year B.Tech IT student at AKGEC, Ghaziabad. I spend most of my time learning cybersecurity, building small security tools, and practicing on TryHackMe. I'm also a Google Student Ambassador.
              </p>
            </div>

            <div className="fade-up stagger-4 hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <ChevronRight size={18} />
              </a>
              <a href={`/resume.pdf?${RESUME_VERSION}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FileText size={18} /> Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={18} /> Connect
              </a>
            </div>

            <div className="fade-up stagger-5 hero-socials">
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
                    className="social-icon-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="fade-up stagger-3 hero-profile-wrap">
            <div className="profile-container">
              <div className="profile-glow" />
              <div className="profile-glow-inner" />
              <div className="profile-image">
                <img src="/profile.jpg" alt="Suryansh Gupta - Cybersecurity Student" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
