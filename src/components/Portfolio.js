import React from 'react';
import PortfolioCard from './PortfolioCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';  // Import Link

const projects = [
  {
    id: 1,
    title: "Infofarm : Computer Vision Model in the Cloud",
    description: "For my internship I chose to work at infofarm where I developed a Proof of concept Computer Vision model to detect defects on tomatoes for Belorta.",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/9842a918416769.562f32cc26026.png",
    category: "Data Engineering, Data Science",
  },
  {
    id: 2,
    title: "Fedrus : CSRD Reporting",
    description: "The first project I did when working as a junior data engineer for Xylos was about CSRD reporting.",
    imageUrl: "https://fedrusinternational.com/wp-content/uploads/2023/10/Fedrus-International_logo.png",
    category: "Data Engineering",
    // Remove external link, we'll use internal routing
  },
];

const Portfolio = () => {
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
      <section id="portfolio" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map(project => (
              <Link key={project.id} to={`/project/${project.id}`} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <PortfolioCard 
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
export default Portfolio;
