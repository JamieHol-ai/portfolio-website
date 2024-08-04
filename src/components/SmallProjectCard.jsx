import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SmallProjectCard = ({ title, description, url }) => {
  // Determine the button type based on the URL
  const buttonType = url && url.includes('github.com') ? 'github' : 'live';

  return (
    <div className="small-project-card border border-white rounded-lg overflow-hidden">
      <div className="p-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      </div>
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

SmallProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default SmallProjectCard;