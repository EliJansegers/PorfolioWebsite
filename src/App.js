// eslint-disable-next-line
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SectionWithTitle from './components/SectionWithTitle.js';
import CertificationsSection from './components/Certification.js';
import { Toaster } from 'react-hot-toast';
import './App.css'; // Import Tailwind CSS here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectDetails from './components/ProjectDetails';

function Home() {
  return (
    <div>
      <Header />
      <SectionWithTitle title="About Me">
        <About />
      </SectionWithTitle>
      <SectionWithTitle title="Skills">
        <Skills />
      </SectionWithTitle>
      <SectionWithTitle title="Certifications">
        <CertificationsSection />
      </SectionWithTitle>
      <SectionWithTitle title="Projects">
        <Portfolio />
      </SectionWithTitle>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
