import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // import useNavigate
import Header from './Header';
import Footer from './Footer';
import SectionWithTitle from './SectionWithTitle';
import BPpic from '../images/BP-Kick.png'; // Update with the correct path


// Example projects data (ideally move this to a shared file or fetch from a service)
const projects = [
  {
    id: 1,
    title: "Bachelor Paper : Detection of Muay Thai movements with recurrent Neural Networks",
    description: "For My bachelor paper I developed a model to detect Muay Thai movements with recurrent Neural Networks.",
    imageUrl: BPpic,
    category: "Data Engineering, Deep learning, Data Science",
    skillsUsed: ["Data engineering", "ETL", 'Python', 'Deep Learning', 'RNN', 'LSTM'],
    detailedDescription:
    'In my bachelor paper, I developed a recurrent neural network model using LSTM architecture to accurately detect Muay Thai movements based on coordinates predicted via pose estimation with the YOLOv8 model. I made the LSTM learn the difference in pose estimation coordinates over 20 evenly spread frames from every video. This approach allowed the model to effectively capture temporal patterns in the movement data, leading to improved recognition accuracy. The project provided valuable insights into the application of deep learning techniques for human activity recognition and demonstrated the potential of combining pose estimation with sequence modeling for sports analytics.',
  },
 {
    id: 2,
    title: "Infofarm : Computer Vision Model in the Cloud",
    description: "For my internship I chose to work at infofarm where I developed a Proof of concept Computer Vision model to detect defects on tomatoes for Belorta.",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/9842a918416769.562f32cc26026.png",
    category: "Data Engineering, Deep learning, Data Science",
    skillsUsed: ["Data engineering", "Computer Vision", "SageMaker", "ETL", 'AWS', 'Streamlit', 'Python'],
    detailedDescription: 'In this project I developed a computer vision model to identify defects on tomatoes using AWS SageMaker. I handled data collection, preprocessing, model training, deployement and a small frot end with authentication from AWS inside a Streamlit app. This proof of concept was recieved really well and was one of the first steps for me to become familiar with a cloud environment and MLOps practices.',
  },
  {
    id: 3,
    title: "Fedrus : CSRD Reporting",
    description: "The first project I did when working as a junior data engineer for Xylos was about CSRD reporting.",
    imageUrl: "https://fedrusinternational.com/wp-content/uploads/2023/10/Fedrus-International_logo.png",
    category: "Data Engineering",
    skillsUsed: ["Data engineering", "CSRD reporting", "SQL", "ETL", 'Fabric', 'Medaillion Architecture', 'Data Flows', 'Python', 'English'],
    detailedDescription:
      "In this project, I built data pipelines for CSRD reporting inside a fabric environment, worked with large datasets spread over multiple sites worldwide, ensured data quality and consistency, and collaborated with cross-functional teams to gather requirements and deliver insights.",
  },
  // Add more projects if needed
];

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();  // set up navigate
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <>
        <Header />
        <SectionWithTitle title="Project Not Found">
          <p className="text-center text-red-600">Sorry, the project you are looking for does not exist.</p>
        </SectionWithTitle>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <SectionWithTitle title={project.title}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-contain"
          />
          <p className="mb-6 text-gray-700">{project.detailedDescription}</p>
          <h3 className="text-xl text-gray-700 font-semibold mb-2">Skills Used</h3>
          <ul className="list-disc list-inside mb-6">
            {project.skillsUsed.map((skill) => (
              <li key={skill} className="text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
          <p className="italic text-gray-500">Category: {project.category}</p>
        </SectionWithTitle>
        <button 
          onClick={() => navigate('/')} 
          className="mb-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          &larr; Go Back
        </button>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetails;
