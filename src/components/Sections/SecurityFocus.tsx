import React from 'react';
import { Network, ShieldAlert, Search, Activity, Crosshair, Target, Unlock, Shield } from 'lucide-react';

const SecurityFocus: React.FC = () => {
  const focuses = [
    { name: 'Network Security', icon: <Network size={22} />, desc: 'Protecting network infrastructure' },
    { name: 'Vulnerability Assessment', icon: <ShieldAlert size={22} />, desc: 'Identifying security weaknesses' },
    { name: 'Threat Analysis', icon: <Search size={22} />, desc: 'Analyzing potential threats' },
    { name: 'Traffic Analysis', icon: <Activity size={22} />, desc: 'Monitoring network traffic' },
    { name: 'Network Scanning', icon: <Crosshair size={22} />, desc: 'Discovering network assets' },
    { name: 'Enumeration', icon: <Target size={22} />, desc: 'Gathering system intelligence' },
    { name: 'Privilege Escalation', icon: <Unlock size={22} />, desc: 'Understanding access control' },
    { name: 'Basic Exploitation', icon: <Shield size={22} />, desc: 'Learning attack vectors' },
  ];

  return (
    <section id="security-focus" className="section">
      <div className="container">
        <h2 className="section-title fade-up">
          <span className="section-number">04.</span> Security Focus
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1rem' }}>
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
