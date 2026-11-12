import React from 'react';
import { Star, Mic, ShieldCheck } from 'lucide-react';

const Achievements: React.FC = () => {
  const items = [
    {
      title: 'Google Student Ambassador',
      description: 'Got selected to represent Google AI tools on campus. I help students and faculty get started with Gemini.',
      icon: <Star size={22} />,
      highlight: 'Google',
    },
    {
      title: 'Campus Tech Speaker & Organizer',
      description: 'I organize hands-on AI workshops and run live demos for students on campus.',
      icon: <Mic size={22} />,
      highlight: 'Workshops',
    },
    {
      title: 'Security Learner',
      description: 'I practice network scanning, enumeration, and basic exploitation on TryHackMe. Still learning privilege escalation.',
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
            <div key={i} className={`card fade-up stagger-${i + 1} achievement-card`}>
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
