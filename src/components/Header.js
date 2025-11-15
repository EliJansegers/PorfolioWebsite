import React from 'react';

const Header = () => {
  return (
    <header className="bg-blueGray text-offWhite body-font shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#About Me"  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-offWhite">Eli Jansegers</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base  justify-center">
          <a href="#About Me" className="mr-5 hover:text-lightBlue">About</a>
          <a href="#Skills" className="mr-5 hover:text-lightBlue">Skills</a>
          <a href="#Certifications" className="mr-5 hover:text-lightBlue">Certifications</a>
          <a href="#Projects" className="mr-5 hover:text-lightBlue">Portfolio</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
