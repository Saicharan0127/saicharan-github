import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Learning from './components/Learning';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { 
    personalInfo, 
    education, 
    skills, 
    courses, 
    projectsConfig, 
    upcomingProjects, 
    socialLinks 
  } = portfolioData;

  return (
    <div className="portfolio-app">
      {/* Background ambient orbs and grid */}
      <BackgroundEffects />

      {/* Fixed Navigation Header */}
      <Navbar personalInfo={personalInfo} />

      {/* Main Page Content */}
      <main id="main-content">
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} education={education} />
        <Skills skills={skills} />
        <Education education={education} />
        <Learning courses={courses} />
        <Projects githubUrl={socialLinks.github || personalInfo.github} />
        <Contact personalInfo={personalInfo} />
      </main>

      {/* Global Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
