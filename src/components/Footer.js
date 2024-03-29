import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleClickGithub = () => {
    window.open('https://github.com/EliJansegers'); // Opens the link in a new tab
  };
  const handleClickTwitter = () => {
    window.open('https://twitter.com/_Eligaal_'); // Opens the link in a new tab
  };
  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/eli-jansegers-53904b1a1/'); // Opens the link in a new tab
  };

  return (
    <footer className="bg-darkBlue text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Social Media Icons */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <a onClick={handleClickTwitter} href='#footer'><FontAwesomeIcon icon={faXTwitter} className="text-offWhite mx-2 text-xl" /></a>
          <a onClick={handleClickLinkedIn} href='#footer'><FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mx-2 text-xl" /></a>
          <a onClick={handleClickGithub} href='#footer'><FontAwesomeIcon icon={faGithub} className="text-black mx-2 text-xl" /></a>
          {/* Add more icons as needed */}
        </div>
        <p className="text-sm text-offWhite sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Eli Jansegers
        </p>
      </div>
    </footer>
  );
};
export default Footer;