import React from 'react';
import Button from './Button';
import SectionHeader from './SectionHeader';
import Projects from './MainProjects';
import Skills from './Skills';
import Contact from './Contact';

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
    <section className="mt-12 md:mt-36">
      <SectionHeader title="about me" />
      <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
        Hi, I'm Jamie!
      </p>
      <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
        I'm a second year integrated masters student of Informatics at the University of Edinburgh (MInf). 
      </p> 
      <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
        My journey in the world of computing has been driven by a passion for technology and a desire to solve complex problems through innovative solutions. I am an eager-to-learn, analytical, and determined aspiring software engineer with a strong interest in data science and machine learning.
      </p>
      <p className="text-normal text-secondary-text mb-4 text-center md:text-left">
        In my free time, I love to explore new programming languages and tools, and I am always looking for ways to learn, innovate and grow in my field. My academic journey has fueled a deep passion for data science and artificial intelligence, areas that I find both challenging and incredibly rewarding.
      </p>
      <Button type="page" href="/portfolio-website/about" />
    </section>
    <section className="mt-12 md:mt-36">
      <SectionHeader title="projects" />
      <Projects />
    </section>
    <section className="mt-12 md:mt-36">
      <SectionHeader title="skills" />
      <Skills />
    </section>
    <section className="mt-12 md:mt-36">
      <SectionHeader title="contact" />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-normal text-secondary-text">
            I'm always open to new opportunities and collaborations. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out to me. I'll do my best to get back to you as soon as possible.
          </p>
        </div>
        <div className="flex-shrink-0 md:w-1/3">
          <Contact />
        </div>
      </div>
    </section>
  </div>
);

export default Home;