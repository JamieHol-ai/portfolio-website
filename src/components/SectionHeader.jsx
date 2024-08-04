import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => (
  <div className="flex items-center mb-4">
    <h2 className="text-title font-bold mr-4">
      <span className="text-navigation">#</span><span className="text-white">{title}</span>
    </h2>
    <div className="flex-grow border-t border-navigation"></div>
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;