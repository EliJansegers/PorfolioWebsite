// PortfolioCard.js
import React from 'react';

function PortfolioCard({ title, description, imageUrl, category , link }) {
  const handleClick = () => {
    window.open(link); // Opens the link in a new tab
  };
  return (
    <div 
      className="cursor-pointer transform transition duration-500 hover:scale-105" 
      onClick={handleClick}
    >
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt="project"/>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
