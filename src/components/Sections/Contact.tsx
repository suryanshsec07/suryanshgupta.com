import React from 'react';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';

const Contact: React.FC = () => {
  const links = [
    { label: 'Email', value: 'suryanshgupta1250@gmail.com', href: 'mailto:suryanshgupta1250@gmail.com', icon: <Mail size={20} /> },
    { label: 'GitHub', value: 'suryanshsec07', href: 'https://github.com/suryanshsec07', icon: <GithubIcon size={20} /> },
    { label: 'LinkedIn', value: 'suryanshsec07', href: 'https://linkedin.com/in/suryanshsec07', icon: <LinkedinIcon size={20} /> },
  ];

  return (
    <section id="contact" className="section" style={{ position: 'relative', paddingBottom: '4rem' }}>
      <div className="grid-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Resume CTA */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p className="code-font text-accent" style={{ fontSize: '0.85rem', marginBottom: '0.5rem', opacity: 0.8 }}>{'>'} want_to_know_more?</p>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>Download My Resume</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            A concise overview of my experience, projects, skills, and certifications.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            <FileText size={20} /> Download Resume <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Contact */}
        <div className="fade-up stagger-1" style={{ textAlign: 'center' }}>
          <p className="section-number" style={{ marginBottom: '0.5rem' }}>09. What's Next?</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', fontWeight: 800 }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 3rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
            I am always open to discussing cybersecurity, technology, new projects, learning opportunities, and potential collaborations.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="mailto:suryanshgupta1250@gmail.com" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              <Mail size={18} /> Say Hello
            </a>
          </div>

          {/* Contact Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', textDecoration: 'none', minWidth: '220px' }}
              >
                <div className="icon-box" style={{ width: 36, height: 36 }}>
                  {link.icon}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>{link.label}</span>
                  <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
