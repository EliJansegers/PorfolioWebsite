import React, { useState } from "react";

const certifications = [
  "DP-600: Microsoft Certified Fabric Analytics Engineer Associate",
  "AZ-900: Microsoft Azure Fundamentals",
  "DP-900: Microsoft Azure Data Fundamentals",
  "AI-900: Microsoft Azure AI Fundamentals",
  "PL-900: Microsoft Power Platform Fundamentals",
  "SC-900: Microsoft Security, Compliance, and Identity Fundamentals",
  "MS-900: Microsoft 365 Fundamentals",
  "MB-910: Microsoft Dynamics 365 Fundamentals (CRM)"
];

const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id='Certifications' className="max-w-lg mx-auto p-6 bg-blueGray rounded-xl shadow-lg border border-steelBlue/40">
      <ul className="space-y-4">
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`cursor-pointer rounded-lg p-4 transition-transform transform shadow-md text-offWhite
              ${
                activeIndex === idx
                  ? "bg-steelBlue scale-105 shadow-steelBlue"
                  : "bg-darkBlue hover:bg-steelBlue/60"
              }
              `}
          >
            <span className="text-xl font-medium">{cert}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
