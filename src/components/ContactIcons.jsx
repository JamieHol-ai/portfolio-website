import React from 'react';
import { contactInfo } from '../content/contactInfo';

const { email, discord, linkedin, github } = contactInfo;

const ContactIcons = () => (
  <div className="flex flex-col items-center sm:items-end">
    <div className="flex items-center space-x-4">
      <a href={`mailto:${email}`} className="text-white hover:text-blue-500">
        <img 
          src="/portfolio-website/icons/email.svg" 
          alt="Email" 
          className="w-6 h-6"
        />
      </a>
      <a href={discord} className="text-white hover:text-blue-500">
        <img 
          src="/portfolio-website/icons/discord.svg" 
          alt="Discord" 
          className="w-6 h-6"
        />
      </a>
      <a href={linkedin} className="text-white hover:text-blue-500">
        <img 
          src="/portfolio-website/icons/linkedin.svg" 
          alt="Linkedin" 
          className="w-6 h-6"
        />
      </a>
      <a href={github} className="text-white hover:text-blue-500">
        <img 
          src="/portfolio-website/icons/github.svg" 
          alt="Github" 
          className="w-6 h-6"
        />
      </a>
    </div>
  </div>
);

export default ContactIcons;