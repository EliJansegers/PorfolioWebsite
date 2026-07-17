import React from 'react';
import profilePic from '../images/PF-Picture.jpg';
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
    <section id="about" className="text-offWhite body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Profile Picture Section */}
        <div className="lg:max-w-sm w-64 mb-10 md:mb-0 mx-auto md:mx-0">
          <img
            className="object-cover object-center w-full aspect-square rounded-full ring-4 ring-steelBlue/40 shadow-lg shadow-black/40"
            alt="Eli Jansegers"
            src={profilePic}
          />
        </div>
        {/* Information Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-offWhite">
            About Eli Jansegers
          </h1>
          <p className="mb-4 text-lightBlue">
            I'm a passionate Data & AI Engineer, currently working as a Data & AI Engineer with a Bachelor's in Applied Informatics (Specialized in Data & AI). <br/>
            Trying to look at Data through a consultant's eye.
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-offWhite">Education</h2>
            <p className="text-lightBlue">Bachelor in Applied Informatics (Data Science & AI) - HOGENT Gent (2021 - 2025)</p>
            <p className="text-lightBlue">Secondary in Computer Management - Broederschool Sint-Niklaas (2019 - 2021)</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-offWhite">Work Experience</h2>
            <p className="text-lightBlue">Currently Working at Cloubis as a Data & AI Engineer (Jun 2026 - Present)</p>
            <p className="text-lightBlue">Data Analyst at Datashift (Jan 2026 - Mar 2026)</p>
            <p className="text-lightBlue">Junior Data Engineer at Xylos (Oct 2024 - Jan 2026)</p>
            <p className="text-lightBlue">Application Development at Conway Temse (July 2024)</p>
            <p className="text-lightBlue">Intership at Infofarm (Feb 2024 - May 2024)</p>
            <p className="text-lightBlue">Production Worker at Lonza Bornem (2019 - 2023)</p>
            <p className="text-lightBlue">Waiter at t'Zandhof Bornem (2018 - 2019)</p>

          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-offWhite">Hobbies</h2>
            <p className="text-lightBlue">Coding, Muay Thai, Fitness, Snowboarding</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-offWhite">Personal Qualities</h2>
            <p className="text-lightBlue">Eager to learn, Flexible, Spontaneous, Conversationally skilled and Independent </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-offWhite">Professional Qualities</h2>
            <p className="text-lightBlue">Working Agile, Applying Scrum and Presenting </p>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};
export default About;
