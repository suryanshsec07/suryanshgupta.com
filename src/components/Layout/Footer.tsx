import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '3rem 0',
      borderTop: '1px solid rgba(57, 255, 136, 0.08)',
      backgroundColor: 'var(--bg-surface)',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
          {[
            { href: 'https://github.com/suryanshsec07', label: 'GitHub', icon: <GithubIcon size={18} /> },
            { href: 'https://linkedin.com/in/suryanshsec07', label: 'LinkedIn', icon: <LinkedinIcon size={18} /> },
            { href: 'mailto:suryanshgupta1250@gmail.com', label: 'Email', icon: <Mail size={18} /> },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, color: 'var(--text-secondary)', transition: 'all 0.3s', border: '1px solid transparent' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-border)'; }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
          © 2026 Suryansh Gupta
        </p>
        <p className="code-font text-secondary" style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          Built with curiosity, code, and a passion for cybersecurity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
