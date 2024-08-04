import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ProjectCard = ({ title, description, image, url, software }) => {
  // Determine the button type based on the URL
  const buttonType = url && url.includes('github.com') ? 'github' : 'live';

  return (
    <div className="project-card border border-white rounded-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      {software.length > 0 && (
        <div className="border-t border-white">
          <div className="p-1">
            <div className="flex flex-wrap gap-2 text-secondary-text">
              {software.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="border-t border-white p-2">
        <div className="mb-4">
          <p className="text-secondary-text">{description}</p>
        </div>
        {url && (
          <div className="text-right">
            <Button type={buttonType} href={url} />
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  software: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;