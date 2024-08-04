import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import projects from '../content/projects/main-projects.json';

const MainProjects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        image={project.image}
        url={project.url}
        software={project.software}
      />
    ))}
  </div>
);

export default MainProjects;