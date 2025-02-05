// eslint-disable-next-line
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SectionWithTitle from './components/SectionWithTitle.js';
import { Toaster } from 'react-hot-toast';
import './App.css'; // Make sure to import TailwindCSS here

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Header/>
      <SectionWithTitle title="About Me">
      <About />
      </SectionWithTitle>
      <SectionWithTitle title="Skills">
      <Skills />
      </SectionWithTitle>
      <SectionWithTitle title="Projects">
      <Portfolio />
      </SectionWithTitle>
      <Footer />
    </div>
  );
}

export default App;
