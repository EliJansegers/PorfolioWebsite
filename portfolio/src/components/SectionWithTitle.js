import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const SectionWithTitle = ({title,children}) => {
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
      <section className="text-offWhite body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold title-font text-center mb-12 text-gray-900 relative">
              {title}
          </h1>
          <div className=" inset-x-0 bottom-0 h-1 mx-auto bg-gradient-to-r from-darkBlue to-steelBlue rounded-full"></div>
          {children}
        </div>
      </section>
    </motion.div>
  );
};
export default SectionWithTitle;