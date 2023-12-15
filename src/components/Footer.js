import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, translateX: 0 },
    hidden: { opacity: 0, translateX: -100 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Social Media Icons */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-500 mx-2 text-xl" />
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mx-2 text-xl" />
          <FontAwesomeIcon icon={faGithub} className="text-black mx-2 text-xl" />
          {/* Add more icons as needed */}
        </div>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Eli Jansegers
        </p>
      </div>
    </footer>
    </motion.div>
  );
};
export default Footer;