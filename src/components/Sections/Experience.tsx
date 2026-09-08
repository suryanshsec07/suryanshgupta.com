import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Google Student Ambassador',
      company: 'Google',
      location: 'Remote',
      period: 'May 2026 – Present',
      type: 'Ongoing',
      responsibilities: [
        'Represent Google Gemini on campus as a student advocate.',
        'Promote AI tool adoption among students and faculty.',
        'Organize workshops and live demonstrations showcasing Gemini\'s capabilities.',
        'Act as a student representative for Google\'s AI tools.'
      ]
    },
    {
      title: 'Cybersecurity Virtual Intern',
      company: 'VOIS (Vodafone Intelligent Solutions) – Edunet Foundation',
      location: 'Remote',
      period: 'March 2026 – April 2026',
      type: 'Internship',
      responsibilities: [
        'Conducted network reconnaissance and host discovery using Nmap.',
        'Identified open ports, running services, and potential attack surfaces in simulated lab environments.',
        'Performed network traffic capture and packet analysis using Wireshark.',
        'Studied TCP/IP communication protocols and anomalous traffic behavior.',
        'Performed browser exploitation exercises using BeEF.',
        'Studied client-side attack vectors and defensive security awareness.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title fade-up">
          <span className="section-number">02.</span> Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item fade-up stagger-${index + 1}`}>
              <div className="card" style={{ padding: '2rem 2.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 8 }}>
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.3 }}>{exp.title}</h3>
                        <p className="text-accent" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-primary)', background: 'var(--accent-muted)', padding: '0.2rem 0.75rem', borderRadius: '12px', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                      {exp.type}
                    </span>
                    <span className="code-font text-secondary" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="code-font text-secondary" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.responsibilities.map((task, taskIdx) => (
                    <li key={taskIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      <span className="text-accent" style={{ marginTop: '0.4rem', fontSize: '0.5rem' }}>◆</span>
                      <span style={{ fontSize: '0.92rem' }}>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
