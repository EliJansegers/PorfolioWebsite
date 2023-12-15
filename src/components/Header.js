import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  return (
    <header className="bg-blueGray text-offWhite body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about"  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-offWhite">Eli Jansegers</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base  justify-center">
          <a href="#about" className="mr-5 hover:text-lightBlue">About</a>
          <a href="#skills" className="mr-5 hover:text-lightBlue">Skills</a>
          <a href="#portfolio" className="mr-5 hover:text-lightBlue">Portfolio</a>
          <a href="#contact" className="mr-5 hover:text-lightBlue">Contact</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
