import React from 'react';
import { 
  BookOpen, 
  Code, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import '../styles/Learning.css';

export default function Learning({ courses }) {
  return (
    <section id="learning" className="section learning-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Curriculum & Self-Paced Study</span>
          </div>
          <h2 className="section-title">
            Courses & <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p className="section-subtitle">
            Structured courses and deep-dive technical explorations that formed my computational logic, memory discipline, and algorithmic problem-solving mindset.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="learning-grid">
          {courses.map((course, index) => {
            const isDSA = course.title.includes('Data Structures');
            return (
              <div key={index} className="course-card glass-card">
                <div className={`course-accent-bar ${isDSA ? 'accent-java' : 'accent-c'}`}></div>

                <div className="course-card-header">
                  <div className="course-icon-wrapper">
                    {isDSA ? <Layers size={28} /> : <Terminal size={28} />}
                  </div>
                  <div className="course-header-meta">
                    <div className="course-status-row">
                      <span className={`course-status-badge ${course.status === 'Completed' ? 'status-completed' : 'status-active'}`}>
                        {course.status === 'Completed' ? (
                          <CheckCircle2 size={13} />
                        ) : (
                          <Clock size={13} />
                        )}
                        <span>{course.status}</span>
                      </span>
                      <span className="course-platform-tag">{course.platform}</span>
                    </div>
                    <h3 className="course-title">{course.title}</h3>
                  </div>
                </div>

                <p className="course-description">
                  {course.description}
                </p>

                {/* Key Syllabus / Concepts */}
                <div className="course-syllabus">
                  <h4 className="syllabus-heading">
                    <Code size={15} className="syllabus-icon" />
                    <span>Key Topics Covered:</span>
                  </h4>
                  <div className="syllabus-grid">
                    {course.keyTopics.map((topic, tIdx) => (
                      <div key={tIdx} className="syllabus-item">
                        <span className="bullet-point"></span>
                        <span className="topic-text">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Takeaway / Outcome */}
                <div className="course-outcome-box">
                  <div className="outcome-label">Key Learning Outcome:</div>
                  <p className="outcome-text">{course.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Banner */}
        <div className="learning-philosophy glass-card">
          <div className="philosophy-icon">
            <Sparkles size={24} />
          </div>
          <div className="philosophy-content">
            <h4 className="philosophy-title">Daily Problem Solving & Engineering Discipline</h4>
            <p className="philosophy-desc">
              Focusing on mastering fundamental data structures, understanding internal memory mechanics, and writing maintainable code that scales from academic exercises to industry-grade systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
