import React from 'react';

function PortfolioCard({ title, description, imageUrl, category }) {
  return (
    <div className="h-96 flex flex-col justify-between border-2 border-steelBlue/40 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-lightBlue transition-colors bg-blueGray">
      <div className="w-full flex justify-center items-center h-40 bg-darkBlue">
        <img
          className="max-h-32 object-contain"
          src={imageUrl}
          alt="project"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h2 className="tracking-widest text-xs title-font font-medium text-lightBlue mb-1 text-center">
          {category}
        </h2>
        <h1 className="title-font text-lg font-medium text-offWhite mb-3 text-center">
          {title}
        </h1>
        <p className="leading-relaxed mb-3 text-center text-lightBlue">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
