import React from 'react';
import { Star, Mic, ShieldCheck } from 'lucide-react';

const Achievements: React.FC = () => {
  const items = [
    {
      title: 'Google Student Ambassador',
      description: 'Selected to represent Google AI tools on campus, advocating for Gemini adoption among students and faculty.',
      icon: <Star size={22} />,
      highlight: 'Google',
    },
    {
      title: 'Campus Tech Speaker & Organizer',
      description: 'Organizing hands-on AI workshops and live demonstrations for campus communities.',
      icon: <Mic size={22} />,
      highlight: 'Workshops',
    },
    {
      title: 'Active Security Practitioner',
      description: 'Actively practicing network scanning, enumeration, privilege escalation, and basic exploitation techniques on TryHackMe.',
      icon: <ShieldCheck size={22} />,
      highlight: 'TryHackMe',
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title fade-up">
          <span className="section-number">07.</span> Achievements & Activities
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: '800px' }}>
          {items.map((item, i) => (
            <div key={i} className={`card fade-up stagger-${i + 1}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.75rem 2rem' }}>
              <div className="icon-box">
                {item.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.title}</h3>
                  <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', background: 'var(--accent-muted)', color: 'var(--accent-primary)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{item.highlight}</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
