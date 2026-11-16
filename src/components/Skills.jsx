import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Terminal, 
  Globe, 
  Server, 
  Sparkles, 
  CheckCircle, 
  Filter 
} from 'lucide-react';
import '../styles/Skills.css';

// Custom SVG Icons for the 8 specific technical skills
const TechIcons = {
  C: () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M116.5 76.6c-4.4 14.8-15.5 26.6-30.2 32.2-22.3 8.5-47.5-1.5-58.4-23.2C17 64 21.6 38.3 38.6 22.8c20.3-18.4 51.5-16.7 69.8 3.8 2.6 2.9 2.2 7.4-.8 9.9-2.9 2.5-7.3 2.2-9.9-.7-13.6-15.3-37-16.6-52.2-2.9-12.7 11.5-16.2 30.6-8.3 46.1 8.2 16.2 27 23.7 43.7 17.3 10.9-4.2 19.2-13 22.5-24 1.1-3.7 5-5.8 8.7-4.7 3.7 1.1 5.8 5 4.7 8.6z" />
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M46.7 97.4c-4.2 2.6-1.5 5.5 4.5 7.6 15.6 5.4 35.8 4.3 49.3-.9 0 0-4-3.1-9.9-4-15.3-2.3-39.7-5.3-43.9-2.7zM42.8 114.3c15 3.3 46.6 3.7 67.8-2 0 0-4.1-3.2-12.2-4.2-16.2-2.1-40.4-3.5-55.6 6.2zM80.2 61.6c6.2 7.2 3.6 13.9-4.8 21.5 13.8-7.3 19.8-16.9 11.6-26.6-9.1-10.7-18.1-16.4-9.3-29.5-17.7 5.7-18.5 20.3 2.5 34.6zM46.1 82.2c-5.7 4.1-2 7.3 5.3 10.1 19.6 7.4 46.5 5.7 64.1-.7 0 0-4.6-4.6-14.7-6-19.5-2.7-48.9-7.5-54.7-3.4zM70.9 2.4c3.9 4.6-.2 9.5-6.7 15.3 13-5 19.3-12.5 10.7-19-6.3-4.8-13.6-2.5-15.8 8.6 6.4-3.3 9.4-4.2 11.8-4.9z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M63.3 0c-15.8 0-29.4 2.4-29.4 14.6v11.1h29.8v3.8H23.5C9.7 29.5 0 38.3 0 54.4c0 14.8 8.3 24.3 23.5 24.9h7.4v-10.9c0-8.8 7.6-16.3 16.4-16.3h28.8c7.4 0 13.4-6.3 13.4-13.7V14.6C89.5 2.4 79 0 63.3 0zm-15.7 8.6c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1zM104.5 48.7h-7.4v10.9c0 8.8-7.6 16.3-16.4 16.3H51.9c-7.4 0-13.4 6.3-13.4 13.7v23.8c0 12.2 10.5 14.6 26.2 14.6 15.8 0 29.4-2.4 29.4-14.6v-11.1H64.3v-3.8h40.2c13.8 0 23.5-8.8 23.5-24.9 0-14.8-8.3-24.3-23.5-24.9zm-24.1 70.7c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z" />
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M19.1 11.2l8.8 98.7L64 121.2l36.1-11.3 8.8-98.7H19.1zm69.9 31.9H44.3l1.3 14.7h42.1l-3.5 39.5-20.2 5.6-20.2-5.6-1.4-15.5h14.4l.7 7.7 6.5 1.8 6.5-1.8 1-11.8H31.1L27.6 28.5h72.8l-1.4 14.6z" />
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M19.1 11.2l8.8 98.7L64 121.2l36.1-11.3 8.8-98.7H19.1zm71.4 28.6l-1.3 14.6H47l1.3 14.6h39.9l-3.5 39.6-20.7 5.7-20.7-5.7-1.4-15.5h14.4l.7 7.7 7 1.9 7-1.9 1-11.8H34.4l-3.5-39.6h60.8l1.3-14.6H29.6L27 12.3h74.9l-1.4 27.5z" />
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M0 0h128v128H0z" fill="#f7df1e" />
      <path d="M67.3 100c3.2 5.3 7.4 9.3 15 9.3 6.3 0 10.3-3.1 10.3-7.5 0-5.2-4.1-7.1-11.1-10.1l-3.8-1.6c-11-4.7-18.3-10.6-18.3-23.2 0-11.6 9-20.4 23.1-20.4 10 0 17.2 3.5 22.3 12.4l-11.4 7.3c-2.5-4.5-5.3-6.3-10.9-6.3-4.8 0-8.2 3.1-8.2 6.8 0 4.6 3.3 6.4 9.5 9.1l3.8 1.6c13 5.6 20.3 11.2 20.3 24.3 0 13.9-10.9 21.6-25.7 21.6-14.4 0-23.4-6.9-27.9-16.2L67.3 100zm-39.7.7c2.5 4.3 5.4 7.9 10.9 7.9 5.6 0 9.2-2.3 9.2-11.2V47.5h14.5v49.8c0 16.7-9.8 24.3-23.9 24.3-12.7 0-20.3-6.4-24.1-15.5l13.4-5.4z" fill="#000" />
    </svg>
  ),
  "React.js": () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="none">
      <ellipse cx="64" cy="64" rx="14" ry="14" fill="#61dafb" />
      <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#61dafb" strokeWidth="6" transform="rotate(30 64 64)" />
      <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#61dafb" strokeWidth="6" transform="rotate(90 64 64)" />
      <ellipse cx="64" cy="64" rx="54" ry="20" stroke="#61dafb" strokeWidth="6" transform="rotate(150 64 64)" />
    </svg>
  ),
  "Express.js": () => (
    <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
      <path d="M128 64c0 35.3-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0s64 28.7 64 64z" fill="#1e293b" />
      <path d="M32 46h17v8.5H39v12.2h8.8V75H39v13h10.4V96H32V46zm23.8 27.5l8.6-13.8h8.8l-12.8 19.3L74 96h-9l-9.2-14.4V96h-7V46h7v27.5zm27.6 10.3c1.7 2.4 4.5 3.9 8 3.9 3.9 0 6.6-1.8 6.6-4.6 0-3-2.6-4.2-7.1-5.7l-2.4-.8c-7-2.4-11.7-5.8-11.7-12.5 0-7.3 6.1-12.6 15.3-12.6 6.5 0 11.2 2.3 14.5 7.6l-6.4 4.1c-1.6-2.5-4-3.6-7.8-3.6-3.8 0-6.1 1.7-6.1 4.2 0 2.6 2.1 3.7 6.1 5.1l2.5.8c8.3 2.9 12.8 6.5 12.8 13.1 0 8.3-6.8 13.1-16.1 13.1-7.8 0-13.5-3.2-16.8-9.4l7.9-4.7z" fill="#38bdf8" />
    </svg>
  )
};

export default function Skills({ skills }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Core Languages', 'Frontend Development', 'Backend Development'];

  const filteredSkills = activeFilter === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, foundational web standards, and modern application frameworks cultivated through rigorous coursework and practical development.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-wrapper">
          <div className="skills-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = TechIcons[skill.name];
            return (
              <div 
                key={skill.name} 
                className="skill-card glass-card"
                style={{ '--skill-accent': skill.color }}
              >
                {/* Glow border gradient */}
                <div className="skill-card-glow"></div>

                <div className="skill-card-header">
                  <div className="skill-icon-box">
                    {IconComponent ? <IconComponent /> : <Code2 size={32} />}
                  </div>
                  <div className="skill-meta">
                    <span className="skill-category-tag">{skill.category}</span>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                </div>

                <p className="skill-description">
                  {skill.description}
                </p>

                <div className="skill-footer">
                  <div className="skill-level-badge">
                    <CheckCircle size={14} className="level-check-icon" />
                    <span>{skill.level}</span>
                  </div>
                  <span className="skill-badge-tag">{skill.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Skill Proficiency Highlights Strip */}
        <div className="skills-footer-banner glass-card">
          <div className="banner-icon-col">
            <Sparkles size={28} className="banner-sparkle-icon" />
          </div>
          <div className="banner-text-col">
            <h4 className="banner-title">Balanced Systems & Web Stack</h4>
            <p className="banner-desc">
              Strong grasp of lower-level computing (C pointers & memory, Java object-oriented principles & DSA) seamlessly paired with contemporary UI development (React.js, semantic HTML/CSS, JavaScript) and backend APIs (Express.js).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
