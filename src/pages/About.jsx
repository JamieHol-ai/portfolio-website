import React from 'react';
import Skills from '../components/Skills';
import SectionHeader from '../components/SectionHeader';
import PageTitle from '../components/PageTitle';
import { skillCategories } from '../content/skillCategories'; // Adjust the import path as necessary

const About = () => (
  <div>
    <section className="mb-12">
      <PageTitle title="about me" />
      <div className="flex flex-col md:flex-row items-center md:items-start mt-4">
        <div className="flex-grow w-full md:w-auto mb-6 md:mb-0 md:pr-6">
          <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
            Hi, I'm Jamie!
          </p>
          <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
            I'm an Informatics student at Edinburgh University, currently in my second year. My journey in the world of computing has been driven by a passion for technology and a desire to solve complex problems through innovative solutions. I am an eager-to-learn, analytical, and determined aspiring Software Engineer with a strong interest in Data Science and Machine Learning, currently studying towards an integrated Masters in Informatics at the University of Edinburgh.
          </p>
          <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
            In my free time, I love to explore new programming languages and tools, always eager to learn and grow in my field. My academic journey has fueled a deep passion for data science and artificial intelligence, areas that I find both challenging and incredibly rewarding.
          </p>
        </div> 
        <div className="flex-shrink-0 md:ml-6 mb-6 md:mb-0">
          <img 
            src="/portfolio-website/introduction-pic.svg" 
            alt="Jamie Holroyde" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <SectionHeader title="skills" />
      </div>
      <Skills categories={skillCategories} />
    </section>
  </div>
);

export default About;