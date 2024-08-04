import React from 'react';
import PropTypes from 'prop-types';

const navItems = [
  { href: 'home', text: 'home' },
  { href: 'portfolio', text: 'projects' },
  { href: 'about', text: 'about me' },
  { href: 'contact', text: 'contact' },
];

const Navbar = ({ setPage }) => {
  const handleClick = (href) => {
    console.log('Navbar button clicked:', href);
    setPage(href);
  };

  return (
    <nav className="sticky top-0 z-10 bg-column-bg p-4 -mx-8 -mt-8 hidden md:flex">
      <div className="flex justify-between items-center w-full">
        <div className="text-primary-text text-m">Jamie Holroyde</div>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(item.href)}
                className={`text-m transition-colors duration-200 ${
                  index === 0 ? 'text-primary-text' : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                <span className="text-navigation">/</span>{item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;