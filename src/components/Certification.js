import React, { useState } from "react";

const certifications = [
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
    <section id='Certifications' className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg" style={{ color: "#0D1B2A" }}>
      <ul className="space-y-4">
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`cursor-pointer rounded-lg p-4 transition-transform transform shadow-md
              ${
                activeIndex === idx
                  ? "bg-blue-100 scale-105 shadow-blue-400"
                  : "bg-blue-50 hover:bg-blue-100"
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
