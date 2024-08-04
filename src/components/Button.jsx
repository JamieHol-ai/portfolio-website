import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  page: 'border-navigation text-primary-text hover:bg-navigation border-2',
  live: 'border-navigation text-primary-text hover:bg-navigation border-2',
  github: 'border-navigation text-primary-text hover:bg-navigation border-2',
  viewAll: 'hover:text-navigation text-primary-text',
};

const defaultTexts = {
  page: 'Read More',
  live: 'Live <->',
  github: 'Github <->',
  viewAll: 'View All -->',
};

const Button = ({ type = 'page', href, text }) => {
  const buttonText = text || defaultTexts[type];
  return (
    <a href={href} className={`inline-block px-4 py-2 rounded ${buttonStyles[type]} transition-colors duration-200`}>
      {buttonText}
    </a>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['page', 'live', 'github', 'viewAll']),
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Button;