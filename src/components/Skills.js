import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ level }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: `${level}%` });
    } else {
      controls.start({width: 0});
    }
  }, [controls, inView, level]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ width: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-2 rounded-full bg-blue-500"
    />
  );
};
// Example skills data structure
const skills = [
  { name: 'Python', level: 90 },
  { name: 'Machine learning', level: 80 },
  { name: 'Deep Learning', level: 80}, 
  { name: 'SQL', level: 75 },
  { name: 'Java', level: 65 },
  { name: 'APIs', level: 65 },
  { name: 'AWS', level: 65 },
  { name: 'React Framework', level: 60 },
  { name: 'PowerBI', level: 50 },
  { name: 'Linux', level: 50 },
  { name: '.NET', level: 50 },
  { name: 'Bash', level: 40 },
  // Add more skills as needed
];

function Skills() {
    return (
      <section id="skills" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {skills.map(skill => (
              <div key={skill.name} className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-200 rounded overflow-hidden">
                  <div className="w-full p-4">
                    <h2 className="title-font font-medium text-3xl text-gray-900">{skill.name}</h2>
                    <SkillBar level={skill.level} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;