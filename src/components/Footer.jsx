import React from 'react';
import ContactIcons from './ContactIcons';

const Footer = () => (
  <footer className="bg-column-bg py-4 mt-auto border-t border-white">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
      <a href="https://github.com/JamieHol-ai/portfolio-website" className="text-secondary-text hover:text-primary-text">
        View source code
      </a>
      <ContactIcons />
    </div>
  </footer>
);

export default Footer;