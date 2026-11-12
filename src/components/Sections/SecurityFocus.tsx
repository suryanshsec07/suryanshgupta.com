import React from 'react';
import { Network, ShieldAlert, Search, Activity, Crosshair, Target, Unlock, Shield } from 'lucide-react';

const SecurityFocus: React.FC = () => {
  const focuses = [
    { name: 'Network Security', icon: <Network size={22} />, desc: 'How networks are secured and attacked' },
    { name: 'Vulnerability Basics', icon: <ShieldAlert size={22} />, desc: 'Spotting common security weaknesses' },
    { name: 'Security Monitoring', icon: <Search size={22} />, desc: 'Catching suspicious activity in logs and alerts' },
    { name: 'Traffic Analysis', icon: <Activity size={22} />, desc: 'Reading and filtering packet captures' },
    { name: 'Network Scanning', icon: <Crosshair size={22} />, desc: 'Finding live hosts and open ports on a network' },
    { name: 'Cybersecurity Basics', icon: <Target size={22} />, desc: 'The basics: CIA triad, common threats, defense layers' },
    { name: 'Linux & System Security', icon: <Unlock size={22} />, desc: 'Working with Linux, file permissions, and hardening' },
    { name: 'Basic Exploitation', icon: <Shield size={22} />, desc: 'Trying out simple exploits in lab environments' },
  ];

  return (
    <section id="security-focus" className="section">
      <div className="container">
        <h2 className="section-title fade-up">
          <span className="section-number">04.</span> Security Focus
        </h2>

        <div className="responsive-grid-270">
          {focuses.map((focus, i) => (
            <div key={i} className={`card fade-up stagger-${(i % 4) + 1}`} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem 1.5rem', cursor: 'default' }}>
              <div className="icon-box">
                {focus.icon}
              </div>
              <div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, display: 'block', marginBottom: '0.15rem' }}>{focus.name}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{focus.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFocus;
