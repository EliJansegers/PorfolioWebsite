import React from 'react';

function PortfolioCard({ title, description, imageUrl, category }) {
  return (
    <div className="h-96 flex flex-col justify-between border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl bg-white">
      <div className="w-full flex justify-center items-center h-40 bg-gray-50">
        <img
          className="max-h-32 object-contain"
          src={imageUrl}
          alt="project"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 text-center">
          {category}
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center">
          {title}
        </h1>
        <p className="leading-relaxed mb-3 text-center">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
