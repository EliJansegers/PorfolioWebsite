// PortfolioCard.js
import React from 'react';

function PortfolioCard({ title, description, imageUrl, category }) {
  return (
    <div className="fade-in p-4 md:w-1/3">
      <div className="h-full border-2 border-blueGray rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt="project" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-lightBlue mb-1">
            {category.toUpperCase()}
          </h2>
          <h1 className="title-font text-lg font-medium text-offWhite mb-3">{title}</h1>
          <p className="leading-relaxed text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
