import React from 'react';
import { Terminal, Shield, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="grid-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title fade-up">
          <span className="section-number">01.</span> About Me
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }} className="fade-up stagger-1">
          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--accent-border)', borderRadius: '12px', padding: '2rem', borderLeft: '3px solid var(--accent-primary)' }}>
              <p className="code-font text-accent" style={{ fontSize: '0.8rem', marginBottom: '1rem', opacity: 0.8 }}>
                {'>'} cat about.txt
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
                I am a B.Tech Information Technology student specializing in cybersecurity. My focus is on understanding how networks operate, how they can be compromised, and how to defend them effectively.
              </p>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
              I have hands-on experience in <strong style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>network scanning</strong>, <strong style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>traffic analysis</strong>, and <strong style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>vulnerability assessment</strong>. I actively develop my knowledge through practical labs, security projects, and continuous learning on platforms like TryHackMe.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
              Beyond security, I currently serve as a <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Google Student Ambassador</strong>, where I promote AI adoption and lead campus technology initiatives.
            </p>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { icon: <Shield size={24} />, title: 'Security Focus', desc: 'Network scanning, traffic analysis, vulnerability assessment.' },
              { icon: <Terminal size={24} />, title: 'Security Tools', desc: 'Nmap, Wireshark, BeEF, Kali Linux.' },
              { icon: <Award size={24} />, title: 'Leadership', desc: 'Google Student Ambassador for AI initiatives.' },
              { icon: <BookOpen size={24} />, title: 'Active Learner', desc: 'TryHackMe labs and hands-on projects.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', transform: i % 2 === 1 ? 'translateY(1.5rem)' : 'none' }}>
                <div className="icon-box" style={{ width: 40, height: 40 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
