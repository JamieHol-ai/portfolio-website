import React from 'react';
import PageTitle from './PageTitle';
import MainProjects from './MainProjects';
import SmallProjects from './SmallProjects';

const Portfolio = () => (
  <div>
    <PageTitle title="projects" />
    <p className="text-normal text-secondary-text mb-8">
      List of my projects
    </p>
    <MainProjects />
    <SmallProjects />
  </div>
);

export default Portfolio;