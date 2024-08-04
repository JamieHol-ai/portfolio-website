---
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import MobileNavbar from '../components/MobileNavbar.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
---

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{Astro.props.title || 'My Website'}</title>
    <script src="/portfolio-website/scripts/animation.js" defer></script>
  </head>
  <body class="bg-main-bg min-h-screen flex flex-col items-center justify-center relative">
    <canvas id="animation-background" class="fixed inset-0 z-0 hidden md:block"></canvas> <!-- Hide on mobile -->
    <main class="container mx-auto px-4 py-4 w-full md:w-4/5 relative z-10 flex-grow">
      <div class="bg-column-bg p-4 md:p-8 rounded-lg shadow-lg w-full">
        <Navbar client:load />
        <MobileNavbar />
        <div class="mt-4 md:mt-8">
          <slot />
        </div>
        <div class="mt-8">
          <Footer />
        </div>
      </div>
    </main>
  </body>
</html>