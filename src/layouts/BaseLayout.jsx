import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import useIsMobile from '../hooks/useIsMobile';
import '../styles/global.css';

const BaseLayout = ({ title, children, setPage }) => {
  const isMobile = useIsMobile();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body class="bg-main-bg min-h-screen flex flex-col items-center justify-center relative">
        <BackgroundAnimation />
        <main className="container mx-auto px-4 py-4  relative z-10 flex-grow">
          <div className="bg-column-bg p-4 md:p-8 rounded-lg shadow-lg w-full">
            {isMobile ? <MobileNavbar setPage={setPage} /> : <Navbar setPage={setPage} />}
            <div className="mt-4 md:mt-8">
              {children}
            </div>
            <div className="mt-8">
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

BaseLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default BaseLayout;