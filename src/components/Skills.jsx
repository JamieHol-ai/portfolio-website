import React from 'react';
import PropTypes from 'prop-types';
import { skillCategories } from '../content/skillCategories'; // Adjust the import path as necessary
import SectionHeader from './SectionHeader';

const Skills = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {skillCategories.map((category, index) => (
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

export default Skills;