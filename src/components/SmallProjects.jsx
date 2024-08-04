import React from 'react';
import SmallProjectCard from './SmallProjectCard';
import SectionHeader from './SectionHeader';
import projects from '../content/projects/small-projects.json';

const SmallProjects = () => (
  <section>
    <div className="flex flex-col md:flex-row items-center mb-8">
      <SectionHeader title="small projects" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <SmallProjectCard
          key={index}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </div>
  </section>
);

export default SmallProjects;