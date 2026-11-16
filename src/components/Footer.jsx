import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Heart, 
  Code2, 
  Terminal 
} from 'lucide-react';
import '../styles/Footer.css';

export default function Footer({ personalInfo }) {
  const currentYear = new Date().getFullYear();
  const githubUrl = personalInfo?.github || "https://github.com/Saicharan0127";
  const linkedinUrl = personalInfo?.linkedin || "https://www.linkedin.com/in/ankati-venkata-sai-charan-19800834a";
  const emailAddress = personalInfo?.email || "ankati.saicharan007@gmail.com";
  const phoneNumber = personalInfo?.phone || "+91 7799155870";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Learning', href: '#learning' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        {/* Footer Top Strip */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand" onClick={(e) => handleNavClick(e, '#home')}>
              <div className="brand-badge">
                <span className="brand-code">&lt;</span>
                <span className="brand-initials">SC</span>
                <span className="brand-code">/&gt;</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">{personalInfo.name}</span>
                <span className="brand-role">Computer Science Student & Aspiring Developer</span>
              </div>
            </a>
            <p className="footer-tagline">
              B.Tech CSE (CIC) undergraduate at VVITU. Focused on Data Structures & Algorithms, Java, and modern web application development.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">Direct Channels</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${emailAddress}`} className="footer-contact-link">
                <Mail size={16} />
                <span>{emailAddress}</span>
              </a>
              <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="footer-contact-link">
                <Phone size={16} />
                <span>{phoneNumber}</span>
              </a>
            </div>

            <div className="footer-social-strip">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="footer-social-icon"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} <span className="highlight-text">{personalInfo.name}</span>. All rights reserved.
          </p>

          <div className="footer-tech-note">
            <span>Built with React.js & Vite</span>
            <span className="dot-divider">•</span>
            <span>VVITU • CSE (CIC)</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
