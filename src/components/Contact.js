import React from 'react';
import ContactForm from './ContactForm';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
    <section id="contact">
      {/* ... other contact content */}
      <ContactForm />
    </section>
    </motion.div>
  );
};
export default Contact;
