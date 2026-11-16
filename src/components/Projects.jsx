import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Code2, 
  Terminal, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import '../styles/Projects.css';

export default function Projects({ githubUrl = "https://github.com/Saicharan0127" }) {
  const techBadges = [
    { label: "Java & DSA", color: "#ea580c" },
    { label: "React.js", color: "#38bdf8" },
    { label: "Express.js", color: "#6366f1" },
    { label: "C Programming", color: "#0284c7" },
    { label: "Python", color: "#3b82f6" },
    { label: "JavaScript (ES6+)", color: "#f7df1e" }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Code & Repositories</span>
          </div>
          <h2 className="section-title">
            Projects on <span className="gradient-text">GitHub</span>
          </h2>
          <p className="section-subtitle">
            All codebases, algorithmic implementations, and active project builds are maintained and tracked on GitHub.
          </p>
        </div>

        {/* Central Premium GitHub Showcase Card */}
        <div className="github-showcase-hub glass-card">
          <div className="hub-glow-accent"></div>

          <div className="hub-content">
            {/* GitHub Avatar & Badge */}
            <div className="hub-top-row">
              <div className="hub-github-icon-box">
                <Github size={40} className="hub-github-svg" />
              </div>
              <div className="hub-profile-meta">
                <span className="hub-live-badge">
                  <span className="hub-live-dot"></span>
                  <span>Active GitHub Profile</span>
                </span>
                <h3 className="hub-profile-handle">@Saicharan0127</h3>
              </div>
            </div>

            {/* Description */}
            <h4 className="hub-heading">Explore My Source Code & Engineering Builds</h4>
            <p className="hub-desc">
              From foundational computational logic and Data Structures & Algorithms in Java to modern full-stack web applications built with React.js and Express.js, all my code repositories, commit histories, and project implementations are publicly available on GitHub.
            </p>

            {/* Tech Tags */}
            <div className="hub-tech-tags">
              {techBadges.map((badge, idx) => (
                <span 
                  key={idx} 
                  className="hub-tech-pill"
                  style={{ '--pill-color': badge.color }}
                >
                  <span className="pill-dot" style={{ backgroundColor: badge.color }}></span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>

            {/* Main Primary View on GitHub Button */}
            <div className="hub-action-row">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hub-cta-btn"
                title="Open GitHub Profile"
              >
                <Github size={22} />
                <span>View on GitHub</span>
                <ExternalLink size={18} className="hub-arrow-icon" />
              </a>

              <a
                href={`${githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hub-secondary-btn"
                title="Browse All Repositories"
              >
                <FolderGit2 size={18} />
                <span>Browse Repositories</span>
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Footer Trust Strip */}
            <div className="hub-footer-strip">
              <div className="hub-feature-item">
                <CheckCircle2 size={16} className="feature-check-icon" />
                <span>Open Source Code</span>
              </div>
              <div className="hub-feature-item">
                <CheckCircle2 size={16} className="feature-check-icon" />
                <span>Continuous Practice</span>
              </div>
              <div className="hub-feature-item">
                <CheckCircle2 size={16} className="feature-check-icon" />
                <span>Academic & Personal Builds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
