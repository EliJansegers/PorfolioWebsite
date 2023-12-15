import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SectionWithTitle from './components/SectionWithTitle.js';
import './App.js'; // Make sure to import TailwindCSS here

function App() {
  return (
    <div className="App">
      <Header />
      <SectionWithTitle title="About Me">
      <About />
      </SectionWithTitle>
      <SectionWithTitle title="Skills">
      <Skills />
      </SectionWithTitle>
      <SectionWithTitle title="Projects">
      <Portfolio />
      </SectionWithTitle>
      <SectionWithTitle title="Contact me">
      <Contact />
      </SectionWithTitle>
      <Footer />
    </div>
  );
}

export default App;
