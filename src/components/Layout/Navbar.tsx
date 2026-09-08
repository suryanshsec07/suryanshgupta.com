import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop - 120;
        if (window.scrollY >= top) {
          current = el.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isScrolled ? 'rgba(5, 8, 7, 0.88)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px) saturate(1.2)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(57, 255, 136, 0.06)' : '1px solid transparent',
      padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" aria-label="Home" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.5px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>{'<'}</span>
          SG
          <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>{'/>'}</span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--accent-muted)' : 'transparent',
                    transition: 'all 0.3s',
                  }}
                >
                  <span className="code-font" style={{ fontSize: '0.7rem', opacity: 0.6 }}>0{i + 1}.</span>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          style={{ display: 'none', color: 'var(--text-primary)', padding: '0.5rem' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'rgba(5, 8, 7, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(57, 255, 136, 0.08)',
          padding: '2rem 0',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{ fontSize: '1.05rem', fontWeight: 500, padding: '0.75rem 1.5rem', display: 'block', textAlign: 'center', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <span className="code-font text-accent" style={{ fontSize: '0.75rem', marginRight: '0.5rem' }}>0{i + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
