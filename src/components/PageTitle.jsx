import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => (
  <h2 className="text-title font-bold mb-8">
    <span className="text-navigation">/</span><span className="text-white">{title}</span>
  </h2>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;