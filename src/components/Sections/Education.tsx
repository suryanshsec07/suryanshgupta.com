import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title fade-up">
          <span className="section-number">08.</span> Education
        </h2>

        <div className="card fade-up stagger-1" style={{ maxWidth: '800px', padding: '2rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent-primary), transparent 60%)' }} />
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', fontWeight: 700 }}>Bachelor of Technology (B.Tech)</h3>
              <p className="text-accent" style={{ fontSize: '1rem', fontWeight: 600 }}>Information Technology</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'flex-end' }}>
              <span className="code-font text-secondary" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={13} /> 2025–2029
              </span>
              <span className="code-font text-secondary" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} /> Ghaziabad, UP, India
              </span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="icon-box" style={{ width: 36, height: 36 }}>
              <GraduationCap size={18} />
            </div>
            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Ajay Kumar Garg Engineering College</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
