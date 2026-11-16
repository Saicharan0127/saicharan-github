import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Calendar, 
  ChevronDown, 
  ExternalLink 
} from 'lucide-react';
import '../styles/Hero.css';

export default function Hero({ personalInfo }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.typewriterRoles || [
    "Computer Science Student",
    "Aspiring Full-Stack Developer",
    "Java & DSA Enthusiast",
    "Problem Solver"
  ];

  const githubUrl = personalInfo.github || "https://github.com/Saicharan0127";
  const linkedinUrl = personalInfo.linkedin || "https://www.linkedin.com/in/ankati-venkata-sai-charan-19800834a";
  const emailAddress = personalInfo.email || "ankati.saicharan007@gmail.com";

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        // Pause at full word
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content-centered">
          {/* Status Pill */}
          <div className="hero-status-pill">
            <span className="status-indicator">
              <span className="status-ping"></span>
              <span className="status-dot"></span>
            </span>
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="hero-typewriter-container">
            <span className="typewriter-prefix">I am a </span>
            <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          {/* Brief Bio */}
          <p className="hero-description">
            {personalInfo.heroIntro}
          </p>

          {/* Academic & Location Quick Pills */}
          <div className="hero-meta-strip">
            <div className="meta-pill">
              <GraduationCap size={15} className="meta-icon" />
              <span>VVITU • B.Tech CSE (CIC)</span>
            </div>
            <div className="meta-pill">
              <Award size={15} className="meta-icon" />
              <span>7.5 CGPA</span>
            </div>
            <div className="meta-pill">
              <Calendar size={15} className="meta-icon" />
              <span>Class of 2028 (3rd Year)</span>
            </div>
            <div className="meta-pill">
              <MapPin size={15} className="meta-icon" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Call To Actions */}
          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn btn-primary hero-btn"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={personalInfo.resumeUrl || '/resume.pdf'}
              download="A_V_Sai_Charan_Resume.pdf"
              className="btn btn-outline hero-btn"
              title="Download Resume"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero-btn github-cta-btn"
            >
              <Github size={18} />
              <span>View GitHub</span>
              <ExternalLink size={14} className="cta-ext-icon" />
            </a>
          </div>

          {/* Social Icons Bar */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-row">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="social-icon-btn"
                aria-label="Email Address"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-indicator-container">
          <button 
            type="button"
            className="scroll-indicator-btn"
            onClick={() => handleScrollTo('about')}
            aria-label="Scroll down to About section"
          >
            <span>Explore More</span>
            <ChevronDown size={18} className="scroll-arrow-anim" />
          </button>
        </div>
      </div>
    </section>
  );
}
