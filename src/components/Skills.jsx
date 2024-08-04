import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {categories.map((category, index) => (
      <div key={index} className="bg-column-bg p-4 rounded-lg shadow-md border border-white">
        <h3 className="text-lg font-semibold text-primary-text mb-2">{category.title}</h3>
        <div className="w-full h-px bg-white mb-3"></div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <span key={skillIndex} className="text-secondary-text px-2 py-1 rounded">{skill}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

Skills.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Skills;