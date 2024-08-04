import React from 'react';
import PageTitle from '../components/PageTitle';
import MainProjects from '../components/MainProjects';
import SmallProjects from '../components/SmallProjects';

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