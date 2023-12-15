// Portfolio.js
import React from 'react';
import PortfolioCard from './PortfolioCard';
import docomImg from '../images/docom.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Example projects data
const projects = [
  {
    id: 1,
    title: "DoCom",
    description: "DoCom was my first completed react website.",
    imageUrl: docomImg,
    category: "Web Design"
  },
];

const Portfolio = () => {
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
    <section id="portfolio" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map(project => (
            <PortfolioCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
    </motion.div>
  );
};
export default Portfolio;
