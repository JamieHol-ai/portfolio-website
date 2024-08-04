import React from 'react';
import Button from './Button';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import Skills from './Skills';
import Contact from './Contact';
import { skillCategories } from '../content/skillCategories';

const Home = ({ setPage }) => (
  <div>
    <section className="mt-12 md:mt-36">
      <div className="flex flex-col md:flex-row items-center">
        <img 
          src="/portfolio-website/introduction-pic.svg" 
          alt="Jamie Holroyde" 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-2">Jamie Holroyde</h1>
          <p className="text-lg md:text-xl text-secondary-text mb-4">
            Informatics Student @ The University of Edinburgh
          </p>
          <div className="flex flex-row justify-center md:justify-start space-x-4">
            <Button type="live" href="/portfolio-website/Jamie_Holroyde_CV.pdf" text='Download CV'/>
            <Button type='page' href='#' text="Contact me!" onClick={() => setPage('contact')}/>
          </div>
        </div>
      </div>
    </section>
    {/* Other sections */}
  </div>
);

export default Home;