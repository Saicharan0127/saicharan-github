import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import '../styles/Education.css';

export default function Education({ education }) {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal undergraduate computer science training at VVITU focusing on algorithms, computing systems, and engineering fundamentals.
          </p>
        </div>

        <div className="education-grid">
          {/* Main Academic Degree Card */}
          <div className="education-main-card glass-card">
            <div className="edu-card-glow"></div>

            <div className="edu-header">
              <div className="edu-icon-badge">
                <GraduationCap size={32} />
              </div>
              <div className="edu-title-block">
                <div className="edu-meta-row">
                  <span className="edu-badge">{education.status}</span>
                  <span className="edu-timeline">
                    <Calendar size={14} />
                    <span>{education.timeline}</span>
                  </span>
                </div>
                <h3 className="edu-degree">
                  {education.degree} in {education.branch}
                </h3>
                <h4 className="edu-college">
                  {education.college} <span className="college-full">({education.collegeFullName})</span>
                </h4>
              </div>
            </div>

            <div className="edu-body">
              <div className="edu-details-list">
                <div className="edu-detail-item">
                  <span className="detail-label">Current Academic Standing:</span>
                  <span className="detail-value">{education.currentYear} Undergraduate</span>
                </div>
                <div className="edu-detail-item">
                  <span className="detail-label">Expected Graduation:</span>
                  <span className="detail-value">{education.graduationYear}</span>
                </div>
                <div className="edu-detail-item">
                  <span className="detail-label">Campus Location:</span>
                  <span className="detail-value">
                    <MapPin size={14} className="inline-icon" />
                    <span>{education.location}</span>
                  </span>
                </div>
              </div>

              {/* Core Coursework Tags */}
              <div className="coursework-section">
                <h5 className="coursework-title">
                  <BookOpen size={16} className="coursework-icon" />
                  <span>Key Coursework & Curriculum Subjects:</span>
                </h5>
                <div className="coursework-tags">
                  {education.coursework.map((course, idx) => (
                    <span key={idx} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="highlights-list">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="edu-highlight-row">
                    <CheckCircle size={16} className="highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CGPA Score Card & Academic Highlights */}
          <div className="education-stats-col">
            {/* CGPA Card */}
            <div className="cgpa-card glass-card">
              <div className="cgpa-glow"></div>
              
              <div className="cgpa-header">
                <Award size={24} className="cgpa-trophy" />
                <span className="cgpa-label">Cumulative GPA</span>
              </div>

              <div className="cgpa-score-wrap">
                <span className="cgpa-number gradient-text">{education.cgpa}</span>
                <span className="cgpa-scale">/ 10.0</span>
              </div>

              <div className="cgpa-bar-container">
                <div 
                  className="cgpa-bar-fill"
                  style={{ width: `${(parseFloat(education.cgpa) / 10) * 100}%` }}
                ></div>
              </div>

              <p className="cgpa-caption">
                Consistent academic performance maintained across foundational computer science and engineering coursework.
              </p>

              <div className="cgpa-tags">
                <span className="cgpa-pill">Verified Academic Record</span>
                <span className="cgpa-pill highlight">VVITU Undergraduate</span>
              </div>
            </div>

            {/* Quick Specialization Note */}
            <div className="specialization-card glass-card">
              <div className="spec-icon-wrap">
                <TrendingUp size={20} />
              </div>
              <div className="spec-text-wrap">
                <h4 className="spec-title">Specialization: CSE (CIC)</h4>
                <p className="spec-desc">
                  Focused on Computer Science & Engineering with specialized curriculum in Cyber Security and Information Computation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
