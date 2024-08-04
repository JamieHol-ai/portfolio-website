import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Main = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    console.log('Current page:', page);
  }, [page]);

  const handleSetPage = (newPage) => {
    console.log('Attempting to set page to:', newPage);
    setPage(newPage);
  };

  const renderPage = () => {
    console.log('Rendering page:', page);
    switch (page) {
      case 'home':
        return <Home setPage={handleSetPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio setPage={handleSetPage} />;
      default:
        console.log('Default case, rendering Home');
        return <Home setPage={handleSetPage} />;
    }
  };

  return (
    <div>
      <Navbar setPage={handleSetPage} />
      {renderPage()}
    </div>
  );
};

export default Main;