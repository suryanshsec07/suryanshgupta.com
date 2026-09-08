import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Programming Languages', icon: '{ }', skills: ['C', 'Python'] },
    { title: 'Security Tools', icon: '🛡', skills: ['Nmap', 'Wireshark', 'BeEF', 'Kali Linux'] },
    { title: 'Operating Systems', icon: '💻', skills: ['Kali Linux', 'Windows'] },
    { title: 'Security Domains', icon: '🔒', skills: ['Network Security', 'Vulnerability Assessment', 'Threat Analysis', 'Traffic Analysis'] },
    { title: 'Platforms', icon: '🌐', skills: ['TryHackMe', 'GitHub'] }
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="grid-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title fade-up">
          <span className="section-number">05.</span> Skills & Arsenal
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`card fade-up stagger-${(index % 4) + 1}`} style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.3rem' }}>{category.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
