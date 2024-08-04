import React, { useState, useEffect } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Main = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    console.log('Current page:', page);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio setPage={setPage} />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <BaseLayout title="Jamie's Portfolio" setPage={setPage}>
      {renderPage()}
    </BaseLayout>
  );
};

export default Main;