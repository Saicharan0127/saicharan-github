import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Award, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Download, 
  Send 
} from 'lucide-react';
import '../styles/About.css';

export default function About({ personalInfo, education }) {
  const highlights = [
    {
      title: "Strong Core CS Foundation",
      description: "Rooted in structured C programming, object-oriented Java concepts, and systematic software engineering fundamentals."
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Dedicated daily practice in Data Structures & Algorithms with Java, analyzing time and space complexities."
    },
    {
      title: "Full-Stack Web Readiness",
      description: "Hands-on experience building modern responsive interfaces with React.js and backend RESTful APIs using Express.js."
    },
    {
      title: "Internship & Placement Driven",
      description: "Actively seeking opportunities to apply engineering skills to real-world codebases while learning from mentor teams."
    }
  ];

  const infoGridItems = [
    { icon: <User size={18} />, label: "Full Name", value: personalInfo.name },
    { icon: <GraduationCap size={18} />, label: "College", value: education.college },
    { icon: <Award size={18} />, label: "Degree & Branch", value: `${education.degree} - ${education.branch}` },
    { icon: <Calendar size={18} />, label: "Academic Standing", value: `${education.currentYear} (Graduating ${education.graduationYear})` },
    { icon: <Award size={18} />, label: "Current CGPA", value: `${education.cgpa} / 10` },
    { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location },
    { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, isLink: true, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, isLink: true, href: `tel:${personalInfo.phone.replace(/\s+/g, '')}` }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Code, <span className="gradient-text">Committed to Growth</span>
          </h2>
          <p className="section-subtitle">
            Get to know my academic background, technical journey, and core aspirations in software engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Values */}
          <div className="about-narrative-card glass-card">
            <div className="card-top-accent"></div>
            
            <div className="narrative-content">
              <h3 className="narrative-title">
                Hello, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h3>
              
              <div className="narrative-badge-strip">
                <span className="info-chip">3rd Year Undergrad</span>
                <span className="info-chip">VVITU - CSE (CIC)</span>
                <span className="info-chip highlight-chip">7.5 CGPA</span>
              </div>

              <div className="narrative-paragraphs">
                {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="about-text">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Competency Points */}
              <div className="highlights-block">
                <h4 className="highlights-heading">What I Bring to the Table:</h4>
                <div className="highlights-grid">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="highlight-item">
                      <CheckCircle2 size={18} className="highlight-check" />
                      <div className="highlight-text-wrap">
                        <strong className="highlight-item-title">{item.title}</strong>
                        <span className="highlight-item-desc">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="about-actions">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                >
                  <Send size={15} />
                  <span>Send an Email</span>
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download="A_V_Sai_Charan_Resume.pdf"
                  className="btn btn-outline btn-sm"
                >
                  <Download size={15} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Matrix */}
          <div className="about-details-column">
            {/* Quick Information Matrix */}
            <div className="info-matrix-card glass-card">
              <h3 className="matrix-title">
                <Code2 size={20} className="matrix-icon" />
                <span>Quick Information</span>
              </h3>
              
              <div className="matrix-list">
                {infoGridItems.map((item, index) => (
                  <div key={index} className="matrix-item">
                    <div className="matrix-item-icon">
                      {item.icon}
                    </div>
                    <div className="matrix-item-content">
                      <span className="matrix-item-label">{item.label}</span>
                      {item.isLink ? (
                        <a href={item.href} className="matrix-item-value link-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="matrix-item-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="academic-snapshot-card glass-card">
              <div className="snapshot-header">
                <Cpu size={22} className="snapshot-icon" />
                <div>
                  <h4 className="snapshot-title">Engineering Focus</h4>
                  <p className="snapshot-sub">VVITU • B.Tech CSE (CIC)</p>
                </div>
              </div>
              <p className="snapshot-text">
                Specializing in Computer Science with focus on Cyber Security and Information Computation. Combining core algorithmic rigor with modern full-stack web engineering.
              </p>
              <div className="snapshot-footer">
                <span className="snapshot-badge">Graduating Class of 2028</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
