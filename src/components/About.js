import React from 'react';
// Assuming you have an image named 'profile.jpg' in your public folder or an external URL
import profilePic from '../images/profilepicture.jpg'; // Update with the correct path
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
    <section id="about" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Profile Picture Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img 
            className="object-cover object-center rounded-full shadow-lg" 
            alt="Eli Jansegers" 
            src={profilePic}
            style={{ filter: 'brightness(80%)' }} // Adjust the percentage to make it darker as needed
          />
        </div>
        {/* Information Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Eli Jansegers
          </h1>
          <p className="mb-4">
            I'm a passionate student in Informatics, currently pursuing a Bachelor's in Applied Informatics with a specialization in Data Science & AI at HOGENT Gent.
          </p>
          <p className="mb-4">
            Contact me at <a href="mailto:eli.jansegers27@gmail.com" className="text-blue-500">eli.jansegers27@gmail.com</a> or call me at 0484170254.
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Education</h2>
            <p>Bachelor in Applied Informatics (Data Science & AI) - HOgent Gent (2021 - Present)</p>
            <p>Secondary in Computer Management - Broederschool Sint-Niklaas (2019 - 2021)</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Work Experience</h2>
            <p>Production Worker at Lonza Bornem (2019 - Present)</p>
            <p>Café Worker at t'Zandhof Bornem (2018 - 2019)</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Hobbies</h2>
            <p>Coding, Muay Thai, Fitness</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Personal Qualities</h2>
            <p>Quick Learner, Flexible, Spontaneous</p>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};
export default About;
