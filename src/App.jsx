import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ClubSection from './components/ClubSection';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Education />
          <ClubSection />
          <Projects />
          <Experience />
          <Certifications />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
