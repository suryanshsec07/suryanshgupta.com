import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    { title: 'Pre-Security', issuer: 'TryHackMe', color: '#88cc14' },
    { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', color: '#049fd9' },
    { title: 'Generative AI Essentials', issuer: 'AI for All Program, MPIT–CoE & TCS iON', color: '#8b5cf6' },
    { title: 'Cybersecurity Analyst Job Simulation', issuer: 'Tata, Forage', color: '#f59e0b' }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title fade-up">
          <span className="section-number">06.</span> Certifications
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          {certs.map((cert, i) => (
            <div key={i} className={`card cert-card fade-up stagger-${(i % 4) + 1}`} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 2rem', position: 'relative' }}>
              {/* Color accent dot */}
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: 8, height: 8, borderRadius: '50%', background: cert.color, boxShadow: `0 0 8px ${cert.color}40` }} />
              <div className="icon-box" style={{ borderColor: `${cert.color}30`, background: `${cert.color}10` }}>
                <Award size={22} style={{ color: cert.color }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.2rem', fontWeight: 600, lineHeight: 1.4 }}>{cert.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
