import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const SectionWithTitle = ({title,children}) => {
    const titleId = title

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
      <section  id={titleId} className="text-offWhite body-font section-offset">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold title-font text-center mb-12 text-gray-900 relative">
              {title}
          </h1>
          <div className=" inset-x-0 bottom-0 h-0.5 mx-auto bg-gradient-to-r from-darkBlue to-steelBlue rounded-full"></div>
          {children}
        </div>
      </section>
    </motion.div>
  );
};
export default SectionWithTitle;