import React from 'react';
import { contactInfo } from '../content/contactInfo';

const { email, discord, discordUsername, linkedin, linkedinUsername, github, githubUsername } = contactInfo;

const Contact = () => (
  <div className="bg-column-bg p-4 rounded-lg shadow-md border border-white flex flex-col items-center">
    <h3 className="text-lg font-semibold text-primary-text mb-4">Message Me</h3>
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <img 
          src="/portfolio-website/icons/email.svg" 
          alt="Email" 
          className="w-6 h-6"
        />
        <a href={`mailto:${email}`} className="text-white hover:text-blue-500">
          {email}
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <img 
          src="/portfolio-website/icons/discord.svg" 
          alt="Discord" 
          className="w-6 h-6"
        />
        <a href={discord} className="text-white hover:text-blue-500">
          {discordUsername}
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <img 
          src="/portfolio-website/icons/linkedin.svg" 
          alt="Linkedin" 
          className="w-6 h-6"
        />
        <a href={linkedin} className="text-white hover:text-blue-500">
          {linkedinUsername}
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <img 
          src="/portfolio-website/icons/github.svg" 
          alt="Github" 
          className="w-6 h-6"
        />
        <a href={github} className="text-white hover:text-blue-500">
          {githubUsername}
        </a>
      </div>
    </div>
  </div>
);

export default Contact;