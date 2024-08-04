import React, { useState } from 'react';
import PageTitle from './PageTitle';
import ContactIcons from './ContactIcons';

const navItems = [
  { href: 'home', text: 'home' },
  { href: 'portfolio', text: 'projects' },
  { href: 'about', text: 'about me' },
  { href: 'contact', text: 'contact' },
];

const MobileNavbar = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow-hidden', !menuOpen);
  };

  const handleNavClick = (href) => {
    setPage(href);
    toggleMenu();
  };

  return (
    <nav className="sticky top-0 z-50 bg-column-bg p-4 -mx-8 -mt-8 md:hidden">
      <div className="flex justify-between items-center">
        <div className="text-primary-text text-m">Jamie Holroyde</div>
        <button
          onClick={toggleMenu}
          className="text-primary-text focus:outline-none relative w-6 h-6 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-6 relative z-50 ${menuOpen ? 'open' : ''}`} id="hamburger">
            <span className="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out"></span>
            <span className="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out"></span>
            <span className="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out"></span>
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-column-bg z-40 flex flex-col justify-center p-8 space-y-8 transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        id="nav-menu"
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.href)}
            className="text-3xl text-primary-text text-left"
          >
            <PageTitle title={item.text} />
          </button>
        ))}
        <ContactIcons />
      </div>
    </nav>
  );
};

export default MobileNavbar;