import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import '../styles/Contact.css';

export default function Contact({ personalInfo }) {
  const githubUrl = personalInfo?.github || "https://github.com/Saicharan0127";
  const linkedinUrl = personalInfo?.linkedin || "https://www.linkedin.com/in/ankati-venkata-sai-charan-19800834a";
  const emailAddress = personalInfo?.email || "ankati.saicharan007@gmail.com";
  const phoneNumber = personalInfo?.phone || "+91 7799155870";

  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    // Construct mailto URL with pre-filled sender name, email, subject, and body
    const emailSubject = encodeURIComponent(
      formData.subject 
        ? `[Portfolio Contact] ${formData.subject} - from ${formData.name}`
        : `[Portfolio Inquiry] From ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hi Sai Charan,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    setStatusMessage('Opening your email client to send the message...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            I am actively seeking internship opportunities, collaborative coding projects, and engineering connections. Feel free to reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-column">
            {/* Email Card */}
            <div className="contact-method-card glass-card">
              <div className="method-icon-box email-icon">
                <Mail size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="method-link">
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedType === 'email' ? <Check size={18} className="copied-icon" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-method-card glass-card">
              <div className="method-icon-box phone-icon">
                <Phone size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="method-link">
                  {personalInfo.phone}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check size={18} className="copied-icon" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-method-card glass-card">
              <div className="method-icon-box location-icon">
                <MapPin size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">Current Location</span>
                <span className="method-static-text">{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="social-profiles-card glass-card">
              <h3 className="social-card-title">Professional Profiles</h3>
              <p className="social-card-desc">
                Inspect my codebase repositories on GitHub and view my academic background on LinkedIn.
              </p>

              <div className="social-action-buttons">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-btn"
                  title="Open GitHub Profile"
                >
                  <div className="social-btn-inner">
                    <Github size={20} />
                    <div className="social-btn-text">
                      <span className="platform-name">GitHub</span>
                      <span className="platform-handle">@Saicharan0127</span>
                    </div>
                  </div>
                  <ExternalLink size={16} />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-btn linkedin-btn"
                  title="Open LinkedIn Profile"
                >
                  <div className="social-btn-inner">
                    <Linkedin size={20} />
                    <div className="social-btn-text">
                      <span className="platform-name">LinkedIn</span>
                      <span className="platform-handle">ankati-venkata-sai-charan</span>
                    </div>
                  </div>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Message Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <div className="form-header-badge">
                  <MessageSquare size={16} />
                  <span>Send Direct Message</span>
                </div>
                <h3 className="form-title">Write to Sai Charan</h3>
                <p className="form-subtitle">
                  Fill in your details below and click Send to open your email client with your message pre-loaded.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Purpose
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Opportunity / Technical Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Sai Charan, we would like to invite you for an interview or discuss a project..."
                    rows={5}
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                {statusMessage && (
                  <div className="form-status-alert">
                    <Sparkles size={16} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
